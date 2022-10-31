
## GraphTimeline

Demo:

```tsx
import React from 'react';
import { GraphTimeline } from 'graph-timeline-v2';
import './index.less'

const data = {
  "typeFromKey": "group",
  "nodeTypes": {
    "SPerson": {
      color: "red",
      bgLineColor: "red"
    }
  },
  "nodes": [
    {
      "id": "s-1530035685489119232",
      "group": "SPerson",
      "properties": {
        "id": "1530035685489119232",
        "superId": "1530035685489119232",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1530035685489119232",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/aise-dianjun/DFC-RZ-05240017C7457B90/5746_32047_1658456292_2919_RL-992-784-208-208.jpg"
      }
    },
    {
      "id": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "Device",
      "properties": {
        "id": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
        "sourceId": "418549777957912576",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C77DC800",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933"
      },
      "data": {
        "id": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
        "createdTime": 1659004708929,
        "updatedTime": 1665484442334,
        "isDeleted": false,
        "eventRevision": 78,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418549777957912576",
          "sn": "05240017C77DC800",
          "type": "FULL_TARGET_CAMERA",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1631169059668,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C77DC800/945a9d395965d8295c7bab5d10000220.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C77DC800/945a9d395969790c376e92e910000221.jpg"
          ],
          "name": "小区大门口朝入口方向",
          "lnglat": [
            111.27351,
            30.649685
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近泰和世家"
        },
        "_createdTime": "2022-07-28T10:38:28.929Z",
        "_updatedTime": "2022-10-11T10:34:02.334Z"
      }
    },
    {
      "id": "80be1a98-0e68-11ed-8228-961e4c7dc098",
      "group": "Device",
      "properties": {
        "id": "80be1a98-0e68-11ed-8228-961e4c7dc098",
        "sourceId": "418554882962751488",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C78EAD39",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "80be1a98-0e68-11ed-8228-961e4c7dc098"
      },
      "data": {
        "id": "80be1a98-0e68-11ed-8228-961e4c7dc098",
        "createdTime": 1659007751768,
        "updatedTime": 1665541034822,
        "isDeleted": false,
        "eventRevision": 94,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418554882962751488",
          "sn": "05240017C78EAD39",
          "type": "FULL_TARGET_CAMERA",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1631952639401,
          "tags": [],
          "contacts": [
            {
              "Name": "罗宏伟",
              "Contact": "13487210805"
            }
          ],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C78EAD39/946cdbb8760bb7855ef529c410000304.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C78EAD39/946cdbb8760eb32e36f6361e10000305.jpg"
          ],
          "name": "中间停车棚往消防通道方向",
          "lnglat": [
            111.272285,
            30.6488
          ],
          "location": "湖北省宜昌市点军区联棚乡观音街12号附近"
        },
        "_createdTime": "2022-07-28T11:29:11.768Z",
        "_updatedTime": "2022-10-12T02:17:14.822Z"
      }
    },
    {
      "id": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "Device",
      "properties": {
        "id": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
        "sourceId": "418549244828319744",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7550AB1",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "ada5b9be-0e60-11ed-a1b3-ae5507a13933"
      },
      "data": {
        "id": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
        "createdTime": 1659004391132,
        "updatedTime": 1665484212037,
        "isDeleted": false,
        "eventRevision": 110,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418549244828319744",
          "sn": "05240017C7550AB1",
          "type": "FULL_TARGET_CAMERA",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1631405537513,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7550AB1/94601ebd6ea8cd513bde06bc10000378.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7550AB1/94601ebd6eab563f46f6ad1610000379.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7550AB1/94601ebea823cdf5e1d1a31e1000037c.jpg"
          ],
          "name": "配电室侧壁停车位朝向",
          "lnglat": [
            111.27372,
            30.649092
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路s68翻坝"
        },
        "_createdTime": "2022-07-28T10:33:11.132Z",
        "_updatedTime": "2022-10-11T10:30:12.037Z"
      }
    },
    {
      "id": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "Device",
      "properties": {
        "id": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
        "sourceId": "418554835013468160",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C72937AD",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3"
      },
      "data": {
        "id": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
        "createdTime": 1659007723131,
        "updatedTime": 1665890465437,
        "isDeleted": false,
        "eventRevision": 50,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418554835013468160",
          "sn": "05240017C72937AD",
          "type": "FULL_TARGET_CAMERA",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1640335109795,
          "tags": [],
          "contacts": [
            {
              "Name": "余丹",
              "Contact": "18972552882"
            }
          ],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C72937AD/953007241aa1ce413785c7ec10000444.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C72937AD/953007241aa7c383e334d1ba10000445.jpg"
          ],
          "name": "6号楼二单元往一单元方向",
          "lnglat": [
            111.27368,
            30.648277
          ],
          "location": "湖北省宜昌市点军区夷桥路s68翻坝靠近泰和世家"
        },
        "_createdTime": "2022-07-28T11:28:43.131Z",
        "_updatedTime": "2022-10-16T03:21:05.437Z"
      }
    },
    {
      "id": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "Device",
      "properties": {
        "id": "109832d1-0e68-11ed-8228-961e4c7dc098",
        "sourceId": "418554567383318528",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C76A4C4F",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "109832d1-0e68-11ed-8228-961e4c7dc098"
      },
      "data": {
        "id": "109832d1-0e68-11ed-8228-961e4c7dc098",
        "createdTime": 1659007563615,
        "updatedTime": 1665483893185,
        "isDeleted": false,
        "eventRevision": 50,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418554567383318528",
          "sn": "05240017C76A4C4F",
          "type": "FULL_TARGET_CAMERA",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1631406648138,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C76A4C4F/9460255b699da93feb00fe2910000419.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C76A4C4F/9460255b69a42ea3db69cb351000041a.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C76A4C4F/9460255c755c28fe35898d3d1000041d.jpg"
          ],
          "name": "配电室北侧墙角停车位方向",
          "lnglat": [
            111.2735,
            30.649178
          ],
          "location": "湖北省宜昌市点军区夷桥路靠近点军区联棚乡卫生院"
        },
        "_createdTime": "2022-07-28T11:26:03.615Z",
        "_updatedTime": "2022-10-11T10:24:53.185Z"
      }
    },
    {
      "id": "07d33c46-0e61-11ed-8c75-c65929cba6f7",
      "group": "Device",
      "properties": {
        "id": "07d33c46-0e61-11ed-8c75-c65929cba6f7",
        "sourceId": "418549498533445632",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C7D8130B",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "07d33c46-0e61-11ed-8c75-c65929cba6f7"
      },
      "data": {
        "id": "07d33c46-0e61-11ed-8c75-c65929cba6f7",
        "createdTime": 1659004542425,
        "updatedTime": 1665483044250,
        "isDeleted": false,
        "eventRevision": 46,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418549498533445632",
          "sn": "04560017C7D8130B",
          "type": "FULL_TARGET_CAMERA_DOME",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1641643541168,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7D8130B/954e7e001de0b04b6f30175610000387.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7D8130B/954e7e001de58d20c27ad2d810000388.jpg"
          ],
          "name": "6号楼一单元货梯",
          "lnglat": [
            111.272675,
            30.648396
          ],
          "location": "湖北省宜昌市点军区观音街s68翻坝靠近老来乐托老公寓"
        },
        "_createdTime": "2022-07-28T10:35:42.425Z",
        "_updatedTime": "2022-10-11T10:10:44.250Z"
      }
    },
    {
      "id": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "Device",
      "properties": {
        "id": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
        "sourceId": "418549693837017088",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7E6B22C",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "4d299c3b-0e61-11ed-8c75-c65929cba6f7"
      },
      "data": {
        "id": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
        "createdTime": 1659004658754,
        "updatedTime": 1665483894211,
        "isDeleted": false,
        "eventRevision": 46,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418549693837017088",
          "sn": "05240017C7E6B22C",
          "type": "FULL_TARGET_CAMERA",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1631063809071,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7E6B22C/945829e11385ba778cc06c121000047a.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7E6B22C/945829e1138a8e00f81db1911000047b.jpg"
          ],
          "name": "篮球场旁边汽车充电桩",
          "lnglat": [
            111.273315,
            30.648666
          ],
          "location": "湖北省宜昌市点军区夷桥路s68翻坝靠近湖北省公安厅高速公路警察总队六支队三峡大队"
        },
        "_createdTime": "2022-07-28T10:37:38.754Z",
        "_updatedTime": "2022-10-11T10:24:54.211Z"
      }
    },
    {
      "id": "53dace9d-0e68-11ed-840a-e284e8240358",
      "group": "Device",
      "properties": {
        "id": "53dace9d-0e68-11ed-840a-e284e8240358",
        "sourceId": "418554756680646656",
        "type": "FACE_GRABBER",
        "deviceSN": "04560017C722FDBC",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "53dace9d-0e68-11ed-840a-e284e8240358"
      },
      "data": {
        "id": "53dace9d-0e68-11ed-840a-e284e8240358",
        "createdTime": 1659007676459,
        "updatedTime": 1665212053217,
        "isDeleted": false,
        "eventRevision": 50,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418554756680646656",
          "sn": "04560017C722FDBC",
          "type": "FACE_GRABBER",
          "category": "FACE_GRABBER"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1631321243026,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C722FDBC/945e284dfc80a6a7fbd2190910000166.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C722FDBC/945e284dfc8311b59ba2b2bf10000167.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C722FDBC/945e284f46f65ad22457f7dd1000016a.jpg"
          ],
          "name": "监控室门口",
          "lnglat": [
            111.27357,
            30.648996
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路s68翻坝附近"
        },
        "_createdTime": "2022-07-28T11:27:56.459Z",
        "_updatedTime": "2022-10-08T06:54:13.217Z"
      }
    },
    {
      "id": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "Device",
      "properties": {
        "id": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
        "sourceId": "418549837215105024",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C783E976",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192"
      },
      "data": {
        "id": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
        "createdTime": 1659004744213,
        "updatedTime": 1665483317100,
        "isDeleted": false,
        "eventRevision": 74,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418549837215105024",
          "sn": "05240017C783E976",
          "type": "FULL_TARGET_CAMERA",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1631156187772,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C783E976/945a507e1a28cf5ecb884c3710000440.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C783E976/945a507e1a2c0cc482af720f10000441.jpg"
          ],
          "name": "大门口朝物业管理中心方向",
          "lnglat": [
            111.27359,
            30.649666
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近点军区联棚乡卫生院"
        },
        "_createdTime": "2022-07-28T10:39:04.213Z",
        "_updatedTime": "2022-10-11T10:15:17.100Z"
      }
    },
    {
      "id": "216bbdb6-0e68-11ed-9c74-5ea49c3d1ec1",
      "group": "Device",
      "properties": {
        "id": "216bbdb6-0e68-11ed-9c74-5ea49c3d1ec1",
        "sourceId": "418554614611247104",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C783D682",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "216bbdb6-0e68-11ed-9c74-5ea49c3d1ec1"
      },
      "data": {
        "id": "216bbdb6-0e68-11ed-9c74-5ea49c3d1ec1",
        "createdTime": 1659007591845,
        "updatedTime": 1665587631249,
        "isDeleted": false,
        "eventRevision": 82,
        "tenantId": "1526114566429618177",
        "merchantId": "1430872481079660545",
        "status": "NORMAL",
        "networkStatus": true,
        "signalQuality": "GOOD",
        "propertyMode": null,
        "domain": "VISUAL_UNION_DOMAIN",
        "appUsed": [],
        "subsystem": {
          "updatedTime": null,
          "eventRevision": 0,
          "name": "VISUAL",
          "sourceId": "418554614611247104",
          "sn": "04560017C783D682",
          "type": "FULL_TARGET_CAMERA_DOME",
          "category": "FULL_TARGET_CAMERA"
        },
        "acceptance": {
          "time": null,
          "id": null,
          "status": "unaccept",
          "user": {
            "id": null,
            "nickname": null
          }
        },
        "deployment": {
          "time": 1641644149534,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C783D682/954e81a045e3a0899bc87688100003fe.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C783D682/954e81a045eb017c08ae841c100003ff.jpg"
          ],
          "name": "6号楼一单元客梯",
          "lnglat": [
            111.272675,
            30.648396
          ],
          "location": "湖北省宜昌市点军区观音街s68翻坝靠近老来乐托老公寓"
        },
        "_createdTime": "2022-07-28T11:26:31.845Z",
        "_updatedTime": "2022-10-12T15:13:51.249Z"
      }
    }
  ],
  "edges": [
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664121600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664467200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664208000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1663516800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1663689600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1663862400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664294400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80be1a98-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1663516800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664467200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664208000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664294400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664121600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664294400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664726400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664208000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664294400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664467200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664121600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "07d33c46-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1663516800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "53dace9d-0e68-11ed-840a-e284e8240358",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1663776000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1663603200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664121600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664294400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "216bbdb6-0e68-11ed-9c74-5ea49c3d1ec1",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664208000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "216bbdb6-0e68-11ed-9c74-5ea49c3d1ec1",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    }
  ]
}

export default () => (
    <GraphTimeline
        data={data}
        yAxis={{ width: 200 }}
        style={{ height: 800, padding: 30 }}
        className="test"
    />
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
