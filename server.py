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

filepath = '/home/time' # 文件路径
fm = '%Y-%m-%d %X'

def get_time():
    nowtime = time.strftime(fm, time.localtime())
    with open(filepath, 'a') as fp:
        fp.write('test:' + nowtime)
        fp.write('\n')


@app.route("/")
def index():
    # 主页面
    return render_template("main.html")


@app.route('/add')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    return jsonify(result = a + b)


@app.route('/api/mushroom/<uuid>', methods=['GET', 'POST'])
def add_message(uuid):
    content = request.json
    # print(content)
    ret = classify(content)
    print('result:\n', ret)
    
    return jsonify({"uuid": uuid, 'result':ret})


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


def classify(rec_dict):
    network, feature_name = load_model()
    select_name = merge_key_value(rec_dict)
    input_vector = generate_input_vector(select_name, feature_name)

    print('input_vector:\n', input_vector)
    print('input_vector.shape:\n', input_vector.shape)

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
    network_path = os.path.join(scriptDirectory, 'pkl/network.pkl')
    print('network_path:', network_path)
    with open(network_path, 'rb') as f:
        network = pickle.load(f)
        
    feature_name_path = os.path.join(scriptDirectory, 'pkl/feature_name.pkl')
    print('feature_name_path:', feature_name_path)
    with open(feature_name_path, 'rb') as f:
        feature_name = pickle.load(f)
    print('feature_name.shape:\n', feature_name.shape)
    
    return network, feature_name
    
    
if __name__ == "__main__":

    # app.run(host = "0.0.0.0", port = 8080, debug = True)
    app.run(host="127.0.0.1", port = 5000)
