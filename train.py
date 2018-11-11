#!/usr/bin/env python
# -*- coding: UTF-8 -*-
# import logging; logging.basicConfig(level=logging.WARNING)
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import model.layers as layers
from model.util import get_one_batch
from model.visualize import show_accuracy_loss
from model.optimizer import SGD, Adam
from model.datasets import MushroomClass
from model.net import MultiLayerCL

import pickle
import functools
import time

    
def generate_submission_csv(id_column, predict_y, filename='prediction.csv', write_index=False):
    df = pd.DataFrame({'Id': id_column, 'SalePrice': predict_y.flatten()})
    df.to_csv(filename, index=write_index)


if __name__ == '__main__':
    mc_data = MushroomClass('.\data\Mushrooms')
    x, t = mc_data.load(non_nan_ratio=0.8)
    print('x.shape:', x.shape)
    print('t.shape:', t.shape)
    
    feature_count = x.shape[-1]
    
    train_num = 8000
    train_x, train_y, test_x, test_y = x[:train_num, :], t[:train_num, :], x[train_num:, :], t[train_num:, :]
    print('train_x.shape:', train_x.shape)
    print('train_y.shape:', train_y.shape)

    max_iterations = 5000
    batch_size = 128
    # initialize network optimizer
    weight_init_types = {'std=0.01': 0.01, 'Xavier': 'sigmoid', 'He': 'relu'}
    # optimizer = SGD(lr=1e-4)
    optimizer = Adam(lr=1e-4)
    network_structure = {'input_size': feature_count,
                        'hidden_size_list': [10, 10],
                        'output_size': 2,
                        'weight_decay_lambda': 1e-6,
                        'use_dropout': True,
                        'dropout_ratio': 0.1,
                        'use_batchnorm': True}
    network = MultiLayerCL(**network_structure)

    print('network layers:', network.layers.keys())
    print('network last layer:', network.last_layer)
    x_batch, t_batch = get_one_batch(train_x, train_y, batch_size=3)

    train_loss_list = []
    test_loss_list = []
    train_acc_list = []
    test_acc_list = []
    
    # Start training
    for i in range(max_iterations):
        x_batch, t_batch = get_one_batch(train_x, train_y, batch_size=batch_size)
        
        grads = network.gradient(x_batch, t_batch)
        optimizer.update(network.params, grads)

        # train_loss = network.loss(x_batch, t_batch, train_flag=False)
        # train_loss_list.append(train_loss)
        # test_loss = network.loss(test_x, test_y, train_flag=False)
        # test_loss_list.append(test_loss)
        if i % 100 == 0:
            print("===========" + "iteration:" + str(i) + "===========")
            
            # calculate accuracy
            train_acc = network.accuracy(x_batch, t_batch)
            train_acc_list.append(train_acc)
            test_acc = network.accuracy(test_x, test_y)
            test_acc_list.append(test_acc)
            print("train accuracy: {:.3f}".format(train_acc), "test accuracy: {:.3f}".format(test_acc))
            # calculate loss
            train_loss = network.loss(x_batch, t_batch, train_flag=False)
            train_loss_list.append(train_loss)
            test_loss = network.loss(test_x, test_y, train_flag=False)
            test_loss_list.append(test_loss)
            print("train loss: {:.6f}".format(train_loss), "test loss: {:.6f}".format(test_loss))
    show_accuracy_loss(train_acc_list, test_acc_list, train_loss_list, test_loss_list)
    # np.save('npy/network.params.npy', network.params)
    # np.save('npy/network_structure.npy', network_structure)
    
    # np.save('npy/feature_name.npy', mc_data.column_name)
    
    with open('pkl/network.pkl', 'wb') as f:
        pickle.dump(network, f)
        
    with open('pkl/network.params.pkl', 'wb') as f:
        pickle.dump(network.params, f)
        
    with open('pkl/network_structure.pkl', 'wb') as f:
        pickle.dump(network_structure, f)
    
    with open('pkl/feature_name.pkl', 'wb') as f:
        pickle.dump(mc_data.column_name, f)
        
    BN_name_list = [layer_name for layer_name in network.layers.keys() if 'BatchNorm' in layer_name]
    BN_dict = {}
    for BN_name in BN_name_list:
        BN_dict[BN_name] = [network.layers[BN_name].running_mean, network.layers[BN_name].running_var]
    with open('pkl/batch_norm_mean_std.pkl', 'wb') as f:
        pickle.dump(BN_dict, f)
