# -*- coding: utf-8 -*-
from flask import Flask, jsonify, render_template, request, jsonify
import numpy as np
import pickle
from model.net import MultiLayerCL
from model.datasets import MushroomClass
from model import functions
import os
import time

app = Flask(__name__)


@app.route("/")
def index():
    # 主页面
    return render_template("main.html")


@app.route('/api/test/<uuid>', methods=['GET', 'POST'])
def test(uuid):
    content = request.json
    print('content:', content)
    select_name = merge_key_value(content)
    print('select_name:\n', select_name)
    
    print('feature_name:\n', feature_name)
    
    ret = 'OK'
    # ret = classify(content)
    return jsonify({"uuid": uuid, 'result': ret})


@app.route('/api/mushroom/<uuid>', methods=['GET', 'POST'])
def main(uuid):
    content = request.json
    # print(content)
    ret = classify(content)
    print('result:\n', ret)
    
    return jsonify({"uuid": uuid, 'result':ret})


def classify(rec_dict):
    network_structure, network_params, feature_name, network_BN = load_model()
    select_name = merge_key_value(rec_dict)
    input_vector = generate_input_vector(select_name, feature_name)

    print('input_vector:\n', input_vector)
    print('input_vector.shape:\n', input_vector.shape)
    network = MultiLayerCL(**network_structure)
    network.update_params(network_params)

    network.update_BN_values(network_BN)

    result = functions.softmax(network.predict(input_vector))
    result = result.tolist()[0]
    
    return result


def generate_input_vector(select_feature, all_feature):
    ret = np.zeros_like(all_feature).astype(np.float)
    for idx, value in enumerate(all_feature):
        if value in select_feature:
            ret[idx] = 1.0
    return ret.reshape((1, -1))


def merge_key_value(rec_dict, symbol='_'):
    ret_list = []
    for key, value in rec_dict.items():
        ret_list.append(key + symbol + value)
    return ret_list

    
def load_model():
    scriptDirectory = os.path.dirname(os.path.realpath(__file__))
    print('scriptDirectory:', scriptDirectory)
    
    # network_path = os.path.join(scriptDirectory, 'pkl/network.pkl')
    # print('network_path:', network_path)
    # with open(network_path, 'rb') as f:
        # network = pickle.load(f)
    
    network_params_path = os.path.join(scriptDirectory, 'pkl/network.params.pkl')  # load network parameters(W & b)
    print('network_params_path:', network_params_path)
    with open(network_params_path, 'rb') as f:
        network_params = pickle.load(f)
        
    network_structure_path = os.path.join(scriptDirectory, 'pkl/network_structure.pkl')  # load network structure
    print('network_structure_path:', network_structure_path)
    with open(network_structure_path, 'rb') as f:
        network_structure = pickle.load(f)
    
    feature_name_path = os.path.join(scriptDirectory, 'pkl/feature_name.pkl')  # generate feature_name list for input vectorizing 
    print('feature_name_path:', feature_name_path)
    with open(feature_name_path, 'rb') as f:
        feature_name = pickle.load(f)
        
    network_BN_path = os.path.join(scriptDirectory, 'pkl/batch_norm_mean_std.pkl')  # load network parameters(batch normalization use)
    print('network_BN_path:', network_BN_path)
    with open(network_BN_path, 'rb') as f:
        network_BN = pickle.load(f)
    
    return network_structure, network_params, feature_name, network_BN
    
    
if __name__ == "__main__":
    # app.run(host = "0.0.0.0", port = 8080, debug = True)
    app.run(host="127.0.0.1", port = 5000)
