import * as axios from 'axios';


const host_address = '47.92.141.19' //'127.0.0.1'
const port = 9981//5000


const restaurants =
    [
        {
            "address": "中关村东路8号东升大厦卜蜂莲花1层门口",
            "city": "北京市",
            "distance": 61,
            "location": {
                "latitude": 39.999615,
                "longitude": 116.34016
            },
            "name": "老北京冰糖葫芦(东升大厦店)",
            "price": 28,
            "province": "北京市",
            "rating": 4.8,
            "time": 52
        },
        {
            "address": "北四环西路9号银谷大厦B2层",
            "city": "北京市",
            "distance": 1067,
            "location": {
                "latitude": 39.992806,
                "longitude": 116.340807
            },
            "name": "麻辣拌(银谷大厦店)",
            "price": 16,
            "province": "北京市",
            "rating": 5,
            "time": 910
        },
        {
            "address": "北京市海淀区成府路27号花园五道口商业综合楼三层",
            "city": "北京市",
            "distance": 663,
            "location": {
                "latitude": 39.998804,
                "longitude": 116.345687
            },
            "name": "凉皮先生(五道口店)",
            "price": 20,
            "province": "北京市",
            "rating": 4.6,
            "time": 566
        },
        {
            "address": "成府路29号五道口国际美食苑内",
            "city": "北京市",
            "distance": 640,
            "location": {
                "latitude": 39.999148,
                "longitude": 116.344872
            },
            "name": "第一佳大鸡排(五道口店)",
            "price": 19,
            "province": "北京市",
            "rating": 4.5,
            "time": 546
        },
        {
            "address": "海淀区清华科技园科技大厦B座G层",
            "city": "北京市",
            "distance": 627,
            "location": {
                "latitude": 39.999721,
                "longitude": 116.337979
            },
            "name": "满座儿(清华店)",
            "price": 30,
            "province": "北京市",
            "rating": 4.5,
            "time": 531
        },
        {
            "address": "北京市海淀区学院路15号语言大学家属区",
            "city": "北京市",
            "distance": 1404,
            "location": {
                "latitude": 40.00127,
                "longitude": 116.348225
            },
            "name": "北京语言大学-第三食堂",
            "price": 20,
            "province": "北京市",
            "rating": 5,
            "time": 1200
        },
        {
            "address": "北京市海淀区城府路28号五道口购物中心B1",
            "city": "北京市",
            "distance": 860,
            "location": {
                "latitude": 39.997014,
                "longitude": 116.345923
            },
            "name": "嗨贝花甲(五道口店)",
            "price": 27,
            "province": "北京市",
            "rating": 4.6,
            "time": 733
        },
        {
            "address": "北京市海淀区学院路15",
            "city": "北京市",
            "distance": 1420,
            "location": {
                "latitude": 40.001424,
                "longitude": 116.34826
            },
            "name": "风味餐厅(第三食堂店)",
            "price": 24,
            "province": "北京市",
            "rating": 5,
            "time": 1213
        },
        {
            "address": "北京市海淀区中关村东路8号一层59-A02",
            "city": "北京市",
            "distance": 299,
            "location": {
                "latitude": 39.998948,
                "longitude": 116.340262
            },
            "name": "西少爷(五道口宇宙总店)",
            "price": 24,
            "province": "北京市",
            "rating": 4.1,
            "time": 255
        },
        {
            "address": "成府路29号(五道口国际食尚苑)一期地下一层",
            "city": "北京市",
            "distance": 605,
            "location": {
                "latitude": 39.998829,
                "longitude": 116.345038
            },
            "name": "小白杨新疆手抓饭",
            "price": 21,
            "province": "北京市",
            "rating": 4.3,
            "time": 516
        },
        {
            "address": "北京市海淀区科建大厦地下1层",
            "city": "北京市",
            "distance": 800,
            "location": {
                "latitude": 39.999651,
                "longitude": 116.336037
            },
            "name": "车库食堂",
            "price": 25,
            "province": "北京市",
            "rating": 4.5,
            "time": 680
        },
        {
            "address": "北京市海淀区中关村东路18号1幢07、08一层",
            "city": "北京市",
            "distance": 1071,
            "location": {
                "latitude": 39.993886,
                "longitude": 116.340858
            },
            "name": "他二哥刀削面(五道口店)",
            "price": 25,
            "province": "北京市",
            "rating": 4.7,
            "time": 911
        },
        {
            "address": "北京市海淀区双清路88号华源世纪商务楼1层",
            "city": "北京市",
            "distance": 468,
            "location": {
                "latitude": 40.002142,
                "longitude": 116.341413
            },
            "name": "必胜客(双清路餐厅)",
            "price": 27,
            "province": "北京市",
            "rating": 4.2,
            "time": 399
        },
        {
            "address": "北京市海淀区双清路西王庄45商铺",
            "city": "北京市",
            "distance": 546,
            "location": {
                "latitude": 40.002585,
                "longitude": 116.341942
            },
            "name": "龙香记桂林米粉(双清路店)",
            "price": 19,
            "province": "北京市",
            "rating": 4.1,
            "time": 465
        },
        {
            "address": "成府路35号华清嘉园G座7号楼1楼(近五道口城铁站Www.4008927927.cn)",
            "city": "北京市",
            "distance": 462,
            "location": {
                "latitude": 39.998185,
                "longitude": 116.340361
            },
            "name": "一品三笑北京聚海川餐厅",
            "price": 26,
            "province": "北京市",
            "rating": 4.1,
            "time": 391
        },
        {
            "address": "北京市海淀区东升双清路88号",
            "city": "北京市",
            "distance": 506,
            "location": {
                "latitude": 40.002474,
                "longitude": 116.341828
            },
            "name": "武圣羊杂割(清华东门店)",
            "price": 26,
            "province": "北京市",
            "rating": 4.1,
            "time": 431
        },
        {
            "address": "北京市海淀区中关村东路66号2号楼地下一层",
            "city": "北京市",
            "distance": 1380,
            "location": {
                "latitude": 39.989798,
                "longitude": 116.34055
            },
            "name": "无名缘米粉(科贸店)",
            "price": 19,
            "province": "北京市",
            "rating": 4.7,
            "time": 1179
        },
        {
            "address": "中关村街道五道口财智国际大厦B1层美食城",
            "city": "北京市",
            "distance": 927,
            "location": {
                "latitude": 39.993763,
                "longitude": 116.340428
            },
            "name": "米有理由(五道口店)",
            "price": 17,
            "province": "北京市",
            "rating": 4.2,
            "time": 789
        },
        {
            "address": "海淀区成府路28号优盛大厦一层09号,二层019号",
            "city": "北京市",
            "distance": 742,
            "location": {
                "latitude": 39.998158,
                "longitude": 116.346205
            },
            "name": "肯德基(成府路餐厅)",
            "price": 25,
            "province": "北京市",
            "rating": 4.1,
            "time": 633
        },
        {
            "address": "北京市海淀区成府路35号东源大厦西侧1层",
            "city": "北京市",
            "distance": 449,
            "location": {
                "latitude": 39.998848,
                "longitude": 116.343106
            },
            "name": "肯德基(五道口餐厅)",
            "price": 25,
            "province": "北京市",
            "rating": 3.8,
            "time": 382
        }
    ];

// export function get_restaurants(location, price_section, result_count) {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve(restaurants);
//         }, 10000);
//     });
// }


export function get_restaurants(location, price_section, result_count) {
    return new Promise((resolve, reject) => {
        let url = `http://${host_address}:${port}/restaurants?location=${location}&price=${price_section}&result_count=${result_count}`;
        axios.default.get(url)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}