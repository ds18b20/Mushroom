#!/usr/bin/env python
# -*- coding: UTF-8 -*-
# import logging; logging.basicConfig(level=logging.WARNING)
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from collections import OrderedDict
import model.layers as layers
from model.util import numerical_gradient, get_one_batch
from model.visualize import show_accuracy_loss
from model.optimizer import SGD, Adam
from model.datasets import MushroomClass
from model.net import MultiLayerCL

import pickle
import functools
import time


if __name__ == '__main__':
    mc_data = MushroomClass('.\data\Mushrooms')
    x, t = mc_data.load(non_nan_ratio=0.8)
    print('x.shape:', x.shape)
    print('t.shape:', t.shape)
    feature_count = x.shape[-1]
    
    batch = 10
    sample_x = x[0:batch]
    sample_t = t[0:batch]
    
    print('sample_x.shape:', sample_x.shape)
    print('sample_x:\n', sample_x)
    print('sample_t:\n', sample_t)
    
    # structure = np.load('npy/network_structure.npy').item()
    # input_size = structure['input_size']
    # NN = MultiLayerClassification(**structure)
    
    # params = np.load('npy/network.params.npy').item()
    # NN.params = params
    
    # feature_name = np.load('npy/feature_name.npy')
    
    # ret = NN.predict(sample_x)
    # print('result:', ret)
    
    with open('pkl/network.pkl', 'rb') as f:
        network = pickle.load(f)
    out = network.predict(sample_x)
    print('out.shape:', out.shape)
    ret = np.argmax(out, axis=1)
    print('result:\n', ret)
    print('accuracy:', np.mean(ret == sample_t.flatten()))
    
    
    
    
    
    

