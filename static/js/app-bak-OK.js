/**
 * Created by sen on 2018/10/28.
 */
var feature_count = 22
var feature_obj = {
	cap_shape: "John",
	lastname: "Doe",
	age: 50,
	eyecolor: "blue"
};

// change photo
var mushroom = new Vue({
	delimiters: ['{[', ']}'],
	el: '#mushroom',
	data: {
		name: 'mushroom',
		altText: 'mushroom',
		image: './static/image/' + 'cap.png',
	}
});

var change_photo_cap = new Vue({
	el: '#change_photo_cap',
	data: {
		name: 'cap.png'
	},
	// 在 `methods` 对象中定义方法
	methods: {
		change_photo: function (event) {
			mushroom.image = './static/image/' + this.name;
			//      // `this` 在方法里指向当前 Vue 实例
			//      alert('Hello ' + this.name + '!')
			//      // `event` 是原生 DOM 事件
			//      if (event) {
			//        alert(event.target.tagName)
			//      }
		}
	}
});

var change_photo_gill = new Vue({
	el: '#change_photo_gill',
	data: {
		name: 'gill.png'
	},
	// 在 `methods` 对象中定义方法
	methods: {
		change_photo: function (event) {
			mushroom.image = './static/image/' + this.name;
		}
	}
});

var change_photo_stalk = new Vue({
	el: '#change_photo_stalk',
	data: {
		name: 'stalk.png'
	},
	// 在 `methods` 对象中定义方法
	methods: {
		change_photo: function (event) {
			mushroom.image = './static/image/' + this.name;
		}
	}
});

var change_photo_ring = new Vue({
	el: '#change_photo_ring',
	data: {
		name: 'ring.png'
	},
	// 在 `methods` 对象中定义方法
	methods: {
		change_photo: function (event) {
			mushroom.image = './static/image/' + this.name;
		}
	}
});

var change_photo_veil = new Vue({
	el: '#change_photo_veil',
	data: {
		name: 'veil.png'
	},
	// 在 `methods` 对象中定义方法
	methods: {
		change_photo: function (event) {
			mushroom.image = './static/image/' + this.name;
		}
	}
});


var change_photo_other = new Vue({
	el: '#change_photo_other',
	data: {
		name: 'other.png'
	},
	// 在 `methods` 对象中定义方法
	methods: {
		change_photo: function (event) {
			mushroom.image = './static/image/' + this.name;
		}
	}
});

// select cap-shape
var cap_shape = new Vue({
	delimiters: ['{[', ']}'],
	el: '#cap_shape',
	data: {
		name: 'cap_shape',
		selected: '',
		options: [{
				text: 'bell',
				value: 'b'
			},
			{
				text: 'conical',
				value: 'c'
			},
			{
				text: 'convex',
				value: 'x'
			},
			{
				text: 'flat',
				value: 'f'
			},
			{
				text: 'knobbed',
				value: 'k'
			},
			{
				text: 'sunken',
				value: 's'
			},
		]
	}
});


// select cap-surface
var cap_surface = new Vue({
	delimiters: ['{[', ']}'],
	el: '#cap_surface',
	data: {
		name: 'cap_surface',
		selected: '',
		options: [{
				text: 'fibrous',
				value: 'f'
			},
			{
				text: 'grooves',
				value: 'g'
			},
			{
				text: 'scaly',
				value: 'y'
			},
			{
				text: 'smooth',
				value: 's'
			},
		]
	}
});

// select cap-color
var cap_color = new Vue({
	delimiters: ['{[', ']}'],
	el: '#cap_color',
	data: {
		name: 'cap_color',
		selected: '',
		options: [{
				text: 'brown',
				value: 'n'
			},
			{
				text: 'buff',
				value: 'b'
			},
			{
				text: 'cinnamon',
				value: 'c'
			},
			{
				text: 'gray',
				value: 'g'
			},
			{
				text: 'green',
				value: 'r'
			},
			{
				text: 'pink',
				value: 'p'
			},
			{
				text: 'purple',
				value: 'u'
			},
			{
				text: 'red',
				value: 'e'
			},
			{
				text: 'white',
				value: 'w'
			},
			{
				text: 'yellow',
				value: 'y'
			},
		]
	}
});

// select bruises
var bruises = new Vue({
	delimiters: ['{[', ']}'],
	el: '#bruises',
	data: {
		name: 'bruises',
		selected: '',
		options: [{
				text: 'bruises',
				value: 't'
			},
			{
				text: 'no',
				value: 'f'
			},
		]
	}
});

// select odor
var odor = new Vue({
	delimiters: ['{[', ']}'],
	el: '#odor',
	data: {
		name: 'odor',
		selected: '',
		options: [{
				text: 'almond',
				value: 'a'
			},
			{
				text: 'anise',
				value: 'l'
			},
			{
				text: 'creosote',
				value: 'c'
			},
			{
				text: 'foul',
				value: 'f'
			},
			{
				text: 'musty',
				value: 'm'
			},
			{
				text: 'none',
				value: 'n'
			},
			{
				text: 'pungent',
				value: 'p'
			},
			{
				text: 'spicy',
				value: 's'
			},
		]
	}
});

// select gill-attachment
var gill_attachment = new Vue({
	delimiters: ['{[', ']}'],
	el: '#gill_attachment',
	data: {
		name: 'gill_attachment',
		selected: '',
		options: [{
				text: 'attached',
				value: 'a'
			},
			{
				text: 'descending',
				value: 'd'
			},
			{
				text: 'free',
				value: 'f'
			},
			{
				text: 'notched',
				value: 'n'
			},
		]
	}
});

// select gill-spacing
var gill_spacing = new Vue({
	delimiters: ['{[', ']}'],
	el: '#gill_spacing',
	data: {
		name: 'gill_spacing',
		selected: '',
		options: [{
				text: 'close',
				value: 'c'
			},
			{
				text: 'crowded',
				value: 'w'
			},
			{
				text: 'distant',
				value: 'd'
			},
		]
	}
});

// select gill-size
var gill_size = new Vue({
	delimiters: ['{[', ']}'],
	el: '#gill_size',
	data: {
		name: 'gill_size',
		selected: '',
		options: [{
				text: 'broad',
				value: 'b'
			},
			{
				text: 'narrow',
				value: 'n'
			},
		]
	}
});

// select gill-color
var gill_color = new Vue({
	delimiters: ['{[', ']}'],
	el: '#gill_color',
	data: {
		name: 'gill_color',
		selected: '',
		options: [{
				text: 'black',
				value: 'k'
			},
			{
				text: 'brown',
				value: 'n'
			},
			{
				text: 'buff',
				value: 'b'
			},
			{
				text: 'chocolate',
				value: 'h'
			},
			{
				text: 'gray',
				value: 'g'
			},
			{
				text: 'green',
				value: 'r'
			},
			{
				text: 'orange',
				value: 'o'
			},
			{
				text: 'pink',
				value: 'p'
			},
			{
				text: 'purple',
				value: 'u'
			},
			{
				text: 'red',
				value: 'e'
			},
			{
				text: 'white',
				value: 'w'
			},
			{
				text: 'yellow',
				value: 'y'
			},
		]
	}
});

// select stalk-shape
var stalk_shape = new Vue({
	delimiters: ['{[', ']}'],
	el: '#stalk_shape',
	data: {
		name: 'stalk_shape',
		selected: '',
		options: [{
				text: 'enlarging',
				value: 'e'
			},
			{
				text: 'tapering',
				value: 't'
			},
		]
	}
});

// select stalk-root
var stalk_root = new Vue({
	delimiters: ['{[', ']}'],
	el: '#stalk_root',
	data: {
		name: 'stalk_root',
		selected: '',
		options: [{
				text: 'bulbous',
				value: 'b'
			},
			{
				text: 'club',
				value: 'c'
			},
			{
				text: 'cup',
				value: 'u'
			},
			{
				text: 'equal',
				value: 'e'
			},
			{
				text: 'rhizomorphs',
				value: 'z'
			},
			{
				text: 'rooted',
				value: 'r'
			},
			{
				text: 'missing',
				value: '?'
			},
		]
	}
});

// select stalk-surface-above-ring
var stalk_surface_above_ring = new Vue({
	delimiters: ['{[', ']}'],
	el: '#stalk_surface_above_ring',
	data: {
		name: 'stalk_surface_above_ring',
		selected: '',
		options: [{
				text: 'fibrous',
				value: 'f'
			},
			{
				text: 'scaly',
				value: 'y'
			},
			{
				text: 'silky',
				value: 'k'
			},
			{
				text: 'smooth',
				value: 's'
			},
		]
	}
});

// select stalk-surface-below-ring
var stalk_surface_below_ring = new Vue({
	delimiters: ['{[', ']}'],
	el: '#stalk_surface_below_ring',
	data: {
		name: 'stalk_surface_below_ring',
		selected: '',
		options: [{
				text: 'fibrous',
				value: 'f'
			},
			{
				text: 'scaly',
				value: 'y'
			},
			{
				text: 'silky',
				value: 'k'
			},
			{
				text: 'smooth',
				value: 's'
			},
		]
	}
});

// select stalk-color-above-ring
var stalk_color_above_ring = new Vue({
	delimiters: ['{[', ']}'],
	el: '#stalk_color_above_ring',
	data: {
		name: 'stalk_color_above_ring',
		selected: '',
		options: [{
				text: 'brown',
				value: 'n'
			},
			{
				text: 'buff',
				value: 'b'
			},
			{
				text: 'cinnamon',
				value: 'c'
			},
			{
				text: 'gray',
				value: 'g'
			},
			{
				text: 'orange',
				value: 'o'
			},
			{
				text: 'pink',
				value: 'p'
			},
			{
				text: 'red',
				value: 'e'
			},
			{
				text: 'white',
				value: 'w'
			},
			{
				text: 'yellow',
				value: 'y'
			},
		]
	}
});

// select stalk-color-below-ring
var stalk_color_below_ring = new Vue({
	delimiters: ['{[', ']}'],
	el: '#stalk_color_below_ring',
	data: {
		name: 'stalk_color_below_ring',
		selected: '',
		options: [{
				text: 'brown',
				value: 'n'
			},
			{
				text: 'buff',
				value: 'b'
			},
			{
				text: 'cinnamon',
				value: 'c'
			},
			{
				text: 'gray',
				value: 'g'
			},
			{
				text: 'orange',
				value: 'o'
			},
			{
				text: 'pink',
				value: 'p'
			},
			{
				text: 'red',
				value: 'e'
			},
			{
				text: 'white',
				value: 'w'
			},
			{
				text: 'yellow',
				value: 'y'
			},
		]
	}
});

// select veil-type
var veil_type = new Vue({
	delimiters: ['{[', ']}'],
	el: '#veil_type',
	data: {
		name: 'veil_type',
		selected: '',
		options: [{
				text: 'partial',
				value: 'p'
			},
			{
				text: 'universal',
				value: 'u'
			},
		]
	}
});

// select veil-color
var veil_color = new Vue({
	delimiters: ['{[', ']}'],
	el: '#veil_color',
	data: {
		name: 'veil_color',
		selected: '',
		options: [{
				text: 'brown',
				value: 'n'
			},
			{
				text: 'orange',
				value: 'o'
			},
			{
				text: 'white',
				value: 'w'
			},
			{
				text: 'yellow',
				value: 'y'
			},
		]
	}
});

// select ring-number
var ring_number = new Vue({
	delimiters: ['{[', ']}'],
	el: '#ring_number',
	data: {
		name: 'ring_number',
		selected: '',
		options: [{
				text: 'none',
				value: 'n'
			},
			{
				text: 'one',
				value: 'o'
			},
			{
				text: 'two',
				value: 't'
			},
		]
	}
});

// select ring-type
var ring_type = new Vue({
	delimiters: ['{[', ']}'],
	el: '#ring_type',
	data: {
		name: 'ring_type',
		selected: '',
		options: [{
				text: 'cobwebby',
				value: 'c'
			},
			{
				text: 'evanescent',
				value: 'e'
			},
			{
				text: 'flaring',
				value: 'f'
			},
			{
				text: 'large',
				value: 'l'
			},
			{
				text: 'none',
				value: 'n'
			},
			{
				text: 'pendant',
				value: 'p'
			},
			{
				text: 'sheathing',
				value: 's'
			},
			{
				text: 'zone',
				value: 'z'
			},
		]
	}
});

// select spore-print-color
var spore_print_color = new Vue({
	delimiters: ['{[', ']}'],
	el: '#spore_print_color',
	data: {
		name: 'spore_print_color',
		selected: '',
		options: [{
				text: 'black',
				value: 'k'
			},
			{
				text: 'brown',
				value: 'n'
			},
			{
				text: 'buff',
				value: 'b'
			},
			{
				text: 'chocolate',
				value: 'h'
			},
			{
				text: 'green',
				value: 'r'
			},
			{
				text: 'orange',
				value: 'o'
			},
			{
				text: 'purple',
				value: 'u'
			},
			{
				text: 'white',
				value: 'w'
			},
			{
				text: 'yellow',
				value: 'y'
			},
		]
	}
});

// select population
var population = new Vue({
	delimiters: ['{[', ']}'],
	el: '#population',
	data: {
		name: 'population',
		selected: '',
		options: [{
				text: 'abundant',
				value: 'a'
			},
			{
				text: 'clustered',
				value: 'c'
			},
			{
				text: 'numerous',
				value: 'n'
			},
			{
				text: 'scattered',
				value: 's'
			},
			{
				text: 'several',
				value: 'v'
			},
			{
				text: 'solitary',
				value: 'y'
			},
		]
	}
});

// select habitat
var habitat = new Vue({
	delimiters: ['{[', ']}'],
	el: '#habitat',
	data: {
		name: 'habitat',
		selected: '',
		options: [{
				text: 'grasses',
				value: 'g'
			},
			{
				text: 'leaves',
				value: 'l'
			},
			{
				text: 'meadows',
				value: 'm'
			},
			{
				text: 'paths',
				value: 'p'
			},
			{
				text: 'urban',
				value: 'u'
			},
			{
				text: 'waste',
				value: 'w'
			},
			{
				text: 'woods',
				value: 'd'
			},
		]
	}
});


var flag = true;
// list of objects
var feature_list = [cap_shape, cap_surface, cap_color, bruises, odor, gill_attachment, gill_spacing, gill_size, gill_color, stalk_shape, stalk_root, stalk_surface_above_ring, stalk_surface_below_ring, stalk_color_above_ring, stalk_color_below_ring, veil_type, veil_color, ring_number, ring_type, spore_print_color, population, habitat];

var app5 = new Vue({
	delimiters: ['{[', ']}'],
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			console.log('test');
			console.log(habitat.selected);
			console.log(habitat.name);
			console.log(feature_list.length);
			console.log(feature_list[21].name);

			for (var i = 0; i < feature_list.length; i++) {
				console.log(feature_list[i].selected);
				if (feature_list[i].selected === '') {
					flag = false;
					console.log(feature_list[i].name + ' unselected !');
				}
			}

			if (!flag) {
				alert('Please select all features !');
			}
		}
	}
});

// https://www.walbrix.co.jp/blog/2013-08-jquery-json-post.html
var test = new Vue({
	delimiters: ['{[', ']}'],
	el: '#test',
	data: {
		message: 'test'
	},
	methods: {
		testJSON: function () {
			// 多重送信を防ぐため通信完了までボタンをdisableにする
			// var button = $(this);
			// button.attr("disabled", true);

			// 各フィールドから値を取得してJSONデータを作成
			var data = {
				// name: $("#name").val(),
				// age: parseInt($("#age").val())
				name: "Tom",
				age: 23

			};

			// 通信実行
			$.ajax({
				type: "post", // method = "POST"
				url: "http://localhost:5000/api/test/0416", // POST送信先のURL
				data: JSON.stringify(data), // JSONデータ本体
				contentType: 'application/json', // リクエストの Content-Type
				dataType: "json", // レスポンスをJSONとしてパースする
				success: function (json_data) { // 200 OK時
					console.log(json_data);
					// JSON Arrayの先頭が成功フラグ、失敗の場合2番目がエラーメッセージ
					//            if (!json_data[0]) {    // サーバが失敗を返した場合
					//                alert("Transaction error. " + json_data[1]);
					//                return;
					//            }
					// 成功時処理
					location.reload();
				},
				error: function () { // HTTPエラー時
					alert("Server Error. Pleasy try again later.");
				},
				complete: function () { // 成功・失敗に関わらず通信が終了した際の処理
					// button.attr("disabled", false);  // ボタンを再び enableにする
					console.log('OK');
				}
			});
		}
	}
});
var run = new Vue({
	delimiters: ['{[', ']}'],
	el: '#run',
	data: {
		message: 'magic'
	},
	methods: {
		magic: function () {
			// 多重送信を防ぐため通信完了までボタンをdisableにする
			// var button = $(this);
			// button.attr("disabled", true);

			// 各フィールドから値を取得してJSONデータを作成
			var select_data = {};
			for (var i = 0; i < feature_list.length; i++) {
				console.log(feature_list[i].selected);
				if (feature_list[i].selected === '') {
					flag = false;
					console.log(feature_list[i].name + ' unselected !');
				}
			}

			if (flag) {
				for (var i = 0; i < feature_list.length; i++) {
					select_data[feature_list[i].name] = feature_list[i].selected;
				}
				console.log(select_data)
				// 通信実行
				$.ajax({
					type: "post", // method = "POST"
					url: "http://127.0.0.1:5000/api/test/4351", // POST送信先のURL
					data: JSON.stringify(select_data), // JSONデータ本体
					contentType: 'application/json', // リクエストの Content-Type
					dataType: "json", // レスポンスをJSONとしてパースする
					success: function (json_data) { // 200 OK時
						console.log(json_data);
						// JSON Arrayの先頭が成功フラグ、失敗の場合2番目がエラーメッセージ
						//            if (!json_data[0]) {    // サーバが失敗を返した場合
						//                alert("Transaction error. " + json_data[1]);
						//                return;
						//            }
						// 成功時処理
						//                        location.reload();
					},
					error: function () { // HTTPエラー時
						alert("Server Error. Pleasy try again later.");
					},
					complete: function () { // 成功・失敗に関わらず通信が終了した際の処理
						// button.attr("disabled", false);  // ボタンを再び enableにする
						console.log('OK');
					}
				});
			} else {
				alert('Please select all features !');
			}
		}
	}
});