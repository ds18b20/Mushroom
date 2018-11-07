#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import os, sys

if __name__ == '__main__':
    # print('sys.argv[0] =', sys.argv[0])             
    # pathname = os.path.dirname(sys.argv[0])        
    # print('path ={}'.format(pathname))
    print('full path =', os.path.abspath(__file__)) 
    print(os.path.dirname(sys.argv[0]))
    scriptDirectory = os.path.dirname(os.path.realpath(__file__))
    print('scriptDirectory:', scriptDirectory)
    network_path = os.path.join(scriptDirectory, 'pkl/network.pkl')
    print('network_path:', network_path)