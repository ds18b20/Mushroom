# -*- coding: utf-8 -*-
import numpy as np
    
if __name__=="__main__":
    params = np.load('network.params.npy')
    print(type(params.item()))
    
    structure = np.load('network_structure.npy')
    print(type(structure.item()))
    
    feature_name = np.load('feature_name.npy')
    print(feature_name.shape)