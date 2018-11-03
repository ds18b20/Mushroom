# -*- coding: utf-8 -*-
import model.deploy as ddd

if __name__=="__main__":
    network = ddd.MultiLayerClassification(input_size=123, hidden_size_list=[100, 10], output_size=2,
                                   weight_init_std='relu', activation='relu',
                                   weight_decay_lambda=1e-6,
                                   use_dropout=True, dropout_ratio=0.05,
                                   use_batchnorm=True)
    print(network)