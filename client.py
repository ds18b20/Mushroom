# -*- coding: utf-8 -*-
import pandas as pd
import requests
import os

feature_name = ['cap-shape', 'cap-surface', 'cap-color', 'bruises', 'odor', 'gill-attachment', 'gill-spacing', 'gill-size', 'gill-color', 'stalk-shape', 'stalk-root', 'stalk-surface-above-ring', 'stalk-surface-below-ring', 'stalk-color-above-ring', 'stalk-color-below-ring', 'veil-type', 'veil-color', 'ring-number', 'ring-type', 'spore-print-color', 'population', 'habitat']

filename = 'mushrooms.csv'
root = 'data/Mushrooms'
data = pd.read_csv(os.path.join(root, filename))
feature = data.iloc[:, 1:]
label = data.iloc[:, 1]

print('feature.shape:', feature.shape)
print('label.shape:', label.shape)
idx = 0
sample = feature.values[idx]
print('sample:\n', sample)

sample_dict = dict(zip(feature_name, sample))
print('sample dict:\n', sample_dict)

res = requests.post('http://127.0.0.1:5000/api/mushroom/0416', json=sample_dict)
if res.ok:
    print(res.json())
"""
sample_selected = ['x', 's', 'n', 't', 'p', 'f', 'c', 'n', 'k', 'e', 'e', 's', 's', 'w', 'w', 'p', 'w', 'o', 'p', 'k', 's', 'u']

sample_dict = dict(zip(feature_name, sample_selected))

# res = requests.post('http://localhost:5000/api/mushroom/0416', json={"cap":"lalala"})
res = requests.post('http://localhost:5000/api/mushroom/0416', json=sample_dict)
if res.ok:
    print(res.json())
    
"""