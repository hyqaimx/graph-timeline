
## GraphTimeline

Demo:

```tsx
import React from 'react';
import { GraphTimeline } from 'graph-timeline-v2';
import './index.less'

const data = {
  "nodeTypeFromKey": "group",
  "nodeTypes": {
    "SPerson": {
      "color": "rgba(255,0,0,1)",
      "radius": 4,
      "bgLineColor": "rgba(255,0,0,.3)",
      "bgLineStyle": "solid"
    }
  },
  "nodeStyle": {
    "radius": 4,
    "color": "green",
    "bgLineColor": "rgba(0,0,0,.1)",
    // "bgLineStyle": "dashed"
    "bgLineStyle": "solid"
  },
  "edgeStyle": {
    "width": 2,
    "gradientReverse": true
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
      "id": "s-1576813199045427200",
      "group": "SPerson",
      "properties": {
        "id": "1576813199045427200",
        "superId": "1576813199045427200",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1576813199045427200",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C7457B90/98714_38729_1667107441_28640_RL-1120-800-240-224.jpg"
      }
    },
    {
      "id": "s-1551846825718190080",
      "group": "SPerson",
      "properties": {
        "id": "1551846825718190080",
        "superId": "1551846825718190080",
        "merchantId": "1402983393794093058",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1551846825718190080",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C7457B90/99226_42063_1667109357_28902_RL-1600-832-224-224.jpg"
      }
    },
    {
      "id": "s-1529788513728335872",
      "group": "SPerson",
      "properties": {
        "id": "1529788513728335872",
        "superId": "1529788513728335872",
        "merchantId": "1402983393794093058",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1529788513728335872",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C77DC800/84866_67225_1667122464_85168_RL-928-144-160-144.jpg"
      }
    },
    {
      "id": "s-1554622223493365760",
      "group": "SPerson",
      "properties": {
        "id": "1554622223493365760",
        "superId": "1554622223493365760",
        "merchantId": "1402983393794093058",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1554622223493365760",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C7457B90/17250_47471_1667192726_37447_RL-1168-576-160-160.jpg"
      }
    },
    {
      "id": "s-1552868052809285632",
      "group": "SPerson",
      "properties": {
        "id": "1552868052809285632",
        "superId": "1552868052809285632",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1552868052809285632",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C77DC800/50706_34263_1667096089_66908_RL-384-128-208-192.jpg"
      }
    },
    {
      "id": "s-1532565666639384576",
      "group": "SPerson",
      "properties": {
        "id": "1532565666639384576",
        "superId": "1532565666639384576",
        "merchantId": "1402983393794093058",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1532565666639384576",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C77DC800/57650_0_1666259217_16686_RL-400-80-160-144.jpg"
      }
    },
    {
      "id": "s-1526143777335414784",
      "group": "SPerson",
      "properties": {
        "id": "1526143777335414784",
        "superId": "1526143777335414784",
        "merchantId": "1369509398923079681",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1526143777335414784",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/aise-dianjun1/DFC-RZ-04560017C73E2063/1226_1327_1658917635_224_RL-1856-528-272-272.jpg"
      }
    },
    {
      "id": "s-1553321703310884864",
      "group": "SPerson",
      "properties": {
        "id": "1553321703310884864",
        "superId": "1553321703310884864",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1553321703310884864",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C725E904/97266_3391_1666239098_29460_RL-1120-160-160-160.jpg"
      }
    },
    {
      "id": "s-1543873163924869120",
      "group": "SPerson",
      "properties": {
        "id": "1543873163924869120",
        "superId": "1543873163924869120",
        "merchantId": "1402983393794093058",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1543873163924869120",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C783E976/90386_90967_1666335818_40582_RL-2080-592-192-192.jpg"
      }
    },
    {
      "id": "s-1561317454485913600",
      "group": "SPerson",
      "properties": {
        "id": "1561317454485913600",
        "superId": "1561317454485913600",
        "merchantId": "1402983393794093058",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1561317454485913600",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C77F26F9/79866_15959_1667132557_38035_RL-2000-160-208-192.jpg"
      }
    },
    {
      "id": "s-1556786460969926656",
      "group": "SPerson",
      "properties": {
        "id": "1556786460969926656",
        "superId": "1556786460969926656",
        "merchantId": "1402983393794093058",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1556786460969926656",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-04560017C76DD03B/50906_28175_1667191316_58492_RL-160-960-224-224.jpg"
      }
    },
    {
      "id": "s-1574671578610794496",
      "group": "SPerson",
      "properties": {
        "id": "1574671578610794496",
        "superId": "1574671578610794496",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1574671578610794496",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C77DC800/61314_10719_1667103126_77003_RL-304-96-192-192.jpg"
      }
    },
    {
      "id": "s-1526356294800248832",
      "group": "SPerson",
      "properties": {
        "id": "1526356294800248832",
        "superId": "1526356294800248832",
        "merchantId": "1471330423825920002",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1526356294800248832",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/aise-dianjun1/DFC-RZ-05240017C77F26F9/33770_85567_1658968502_10752_RL-48-192-160-144.jpg"
      }
    },
    {
      "id": "s-1554678192399187968",
      "group": "SPerson",
      "properties": {
        "id": "1554678192399187968",
        "superId": "1554678192399187968",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1554678192399187968",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C7457B90/18106_52559_1667196387_37795_RL-2112-784-208-208.jpg"
      }
    },
    {
      "id": "s-1559418765265862656",
      "group": "SPerson",
      "properties": {
        "id": "1559418765265862656",
        "superId": "1559418765265862656",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1559418765265862656",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C7457B90/97866_34575_1667104814_28320_RL-1984-752-240-240.jpg"
      }
    },
    {
      "id": "s-1585520168379875328",
      "group": "SPerson",
      "properties": {
        "id": "1585520168379875328",
        "superId": "1585520168379875328",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1585520168379875328",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C77F26F9/51410_33527_1667022480_96894_RL-640-176-192-192.jpg"
      }
    },
    {
      "id": "s-1583053087113740288",
      "group": "SPerson",
      "properties": {
        "id": "1583053087113740288",
        "superId": "1583053087113740288",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1583053087113740288",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-04560017C7BC8630/5210_1951_1667204962_13388_RL-576-192-192-192.jpg"
      }
    },
    {
      "id": "s-1562606794973380608",
      "group": "SPerson",
      "properties": {
        "id": "1562606794973380608",
        "superId": "1562606794973380608",
        "merchantId": "1430872481079660545",
        "tenantId": "",
        "lastCaptureTime": null
      },
      "data": {
        "id": "1562606794973380608",
        "faceImageUrl": "https://s3.dianjun.sensoro.vip/ivms-ams-prod/DFC-RZ-05240017C79997F3/58138_44621_1666925762_51603_RL-1696-96-160-160.jpg"
      }
    },
    {
      "id": "e7240e8f-0e60-11ed-9271-0ed7f04f0bae",
      "group": "Device",
      "properties": {
        "id": "e7240e8f-0e60-11ed-9271-0ed7f04f0bae",
        "sourceId": "418549406678188032",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7B23736",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "e7240e8f-0e60-11ed-9271-0ed7f04f0bae"
      },
      "data": {
        "id": "e7240e8f-0e60-11ed-9271-0ed7f04f0bae",
        "createdTime": 1659004487590,
        "updatedTime": 1665485107833,
        "isDeleted": false,
        "eventRevision": 150,
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
          "sourceId": "418549406678188032",
          "sn": "05240017C7B23736",
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
          "time": 1640335688716,
          "tags": [],
          "contacts": [
            {
              "Name": "余丹",
              "Contact": "18972552882"
            }
          ],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7B23736/95300a96ebadf3da4655699d1000045f.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7B23736/95300a96ebb1be9aeea0a8ac10000460.jpg"
          ],
          "name": "6号楼二单元往4号楼方向",
          "lnglat": [
            111.27358,
            30.648258
          ],
          "location": "湖北省宜昌市点军区夷桥路s68翻坝靠近湖北省公安厅高速公路警察总队六支队三峡大队"
        },
        "_createdTime": "2022-07-28T10:34:47.590Z",
        "_updatedTime": "2022-10-11T10:45:07.833Z"
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
      "id": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "Device",
      "properties": {
        "id": "2243798c-0e61-11ed-910f-0e5bf2aee668",
        "sourceId": "418549573091393536",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C725E904",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "2243798c-0e61-11ed-910f-0e5bf2aee668"
      },
      "data": {
        "id": "2243798c-0e61-11ed-910f-0e5bf2aee668",
        "createdTime": 1659004586782,
        "updatedTime": 1665539834445,
        "isDeleted": false,
        "eventRevision": 118,
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
          "sourceId": "418549573091393536",
          "sn": "05240017C725E904",
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
          "time": 1631159117173,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C725E904/945a61f5d6e476f523d56ae01000017d.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C725E904/945a61f5d6e72fbb0b50ae041000017e.jpg"
          ],
          "name": "大门口朝道闸出口方向",
          "lnglat": [
            111.27363,
            30.649702
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近泰和世家"
        },
        "_createdTime": "2022-07-28T10:36:26.782Z",
        "_updatedTime": "2022-10-12T01:57:14.445Z"
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
      "id": "bd90abe8-0e60-11ed-8c75-c65929cba6f7",
      "group": "Device",
      "properties": {
        "id": "bd90abe8-0e60-11ed-8c75-c65929cba6f7",
        "sourceId": "418549289589932032",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7DC2B70",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "bd90abe8-0e60-11ed-8c75-c65929cba6f7"
      },
      "data": {
        "id": "bd90abe8-0e60-11ed-8c75-c65929cba6f7",
        "createdTime": 1659004417838,
        "updatedTime": 1666665698772,
        "isDeleted": false,
        "eventRevision": 198,
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
          "sourceId": "418549289589932032",
          "sn": "05240017C7DC2B70",
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
          "time": 1631930830478,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7DC2B70/946c59baf40c174e8e1a5cf110000495.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7DC2B70/946c59baf4100605e64c311010000496.jpg"
          ],
          "name": "小区后门往门禁方向",
          "lnglat": [
            111.272385,
            30.64806
          ],
          "location": "湖北省宜昌市点军区联棚乡宜昌市黑臭水体整治和五龙河截污管道工程项目经理部"
        },
        "_createdTime": "2022-07-28T10:33:37.838Z",
        "_updatedTime": "2022-10-25T02:41:38.772Z"
      }
    },
    {
      "id": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "Device",
      "properties": {
        "id": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
        "sourceId": "418554415331409920",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7083768",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53"
      },
      "data": {
        "id": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
        "createdTime": 1659007472989,
        "updatedTime": 1665483324169,
        "isDeleted": false,
        "eventRevision": 122,
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
          "sourceId": "418554415331409920",
          "sn": "05240017C7083768",
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
          "time": 1631157505797,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7083768/945a585b3b976e2e369cf6f4100004da.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7083768/945a585b3b9c744851d2b4bc100004db.jpg"
          ],
          "name": "大门口朝停车场出口",
          "lnglat": [
            111.273544,
            30.649664
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近泰和世家"
        },
        "_createdTime": "2022-07-28T11:24:32.989Z",
        "_updatedTime": "2022-10-11T10:15:24.169Z"
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
      "id": "8bb7ecff-0e60-11ed-915e-5a9ef55c85a6",
      "group": "Device",
      "properties": {
        "id": "8bb7ecff-0e60-11ed-915e-5a9ef55c85a6",
        "sourceId": "418549148560654336",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C759BD2E",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "8bb7ecff-0e60-11ed-915e-5a9ef55c85a6"
      },
      "data": {
        "id": "8bb7ecff-0e60-11ed-915e-5a9ef55c85a6",
        "createdTime": 1659004334209,
        "updatedTime": 1665483326307,
        "isDeleted": false,
        "eventRevision": 60,
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
          "sourceId": "418549148560654336",
          "sn": "05240017C759BD2E",
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
          "time": 1631151256596,
          "tags": [
            "泰和世家"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C759BD2E/945a331b71fce9bcaffdb2fe100001ea.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C759BD2E/945a331b720090ff74995b31100001eb.jpg"
          ],
          "name": "大门口朝出口方向",
          "lnglat": [
            111.273605,
            30.649616
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近泰和世家"
        },
        "_createdTime": "2022-07-28T10:32:14.209Z",
        "_updatedTime": "2022-10-11T10:15:26.307Z"
      }
    },
    {
      "id": "b933fc05-0e60-11ed-8310-8607d6c6332c",
      "group": "Device",
      "properties": {
        "id": "b933fc05-0e60-11ed-8310-8607d6c6332c",
        "sourceId": "418549275513847808",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C70481CF",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "b933fc05-0e60-11ed-8310-8607d6c6332c"
      },
      "data": {
        "id": "b933fc05-0e60-11ed-8310-8607d6c6332c",
        "createdTime": 1659004410520,
        "updatedTime": 1665722830148,
        "isDeleted": false,
        "eventRevision": 102,
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
          "sourceId": "418549275513847808",
          "sn": "05240017C70481CF",
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
          "time": 1631946284530,
          "tags": [],
          "contacts": [
            {
              "Name": "罗宏伟",
              "Contact": "13487210805"
            }
          ],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C70481CF/946cb5d7f5770e00f8d9ec4b10000408.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C70481CF/946cb5d7f580b7f5c6ecb57b10000409.jpg"
          ],
          "name": "2号楼旁停车棚消防通道方向",
          "lnglat": [
            111.27287,
            30.649195
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路276号附近"
        },
        "_createdTime": "2022-07-28T10:33:30.520Z",
        "_updatedTime": "2022-10-14T04:47:10.148Z"
      }
    },
    {
      "id": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "Device",
      "properties": {
        "id": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
        "sourceId": "418549359634808832",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7457B90",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "d66d9135-0e60-11ed-a549-1af40d3f3db3"
      },
      "data": {
        "id": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
        "createdTime": 1659004459551,
        "updatedTime": 1665483324811,
        "isDeleted": false,
        "eventRevision": 114,
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
          "sourceId": "418549359634808832",
          "sn": "05240017C7457B90",
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
          "time": 1649927196710,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7457B90/960f5c6ff46c83de67f68dda100001cd.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7457B90/960f5c6ff470262e0360f280100001ce.jpg"
          ],
          "name": "大门口朝1号楼方向",
          "lnglat": [
            111.272835,
            30.650187
          ],
          "location": "宜昌市点军区观音街联棚乡政府东北"
        },
        "_createdTime": "2022-07-28T10:34:19.551Z",
        "_updatedTime": "2022-10-11T10:15:24.811Z"
      }
    },
    {
      "id": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "Device",
      "properties": {
        "id": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
        "sourceId": "418554852998643712",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C70B780A",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "7610cf79-0e68-11ed-8b86-42ef0fcc4059"
      },
      "data": {
        "id": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
        "createdTime": 1659007733856,
        "updatedTime": 1665482352475,
        "isDeleted": false,
        "eventRevision": 86,
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
          "sourceId": "418554852998643712",
          "sn": "05240017C70B780A",
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
          "time": 1631176961514,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C70B780A/945acc5214ef3a56562034e9100002a1.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C70B780A/945acc5214f3d44d745be29a100002a2.jpg"
          ],
          "name": "1号楼2单元右侧垃圾投放点",
          "lnglat": [
            111.27263,
            30.649618
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T11:28:53.856Z",
        "_updatedTime": "2022-10-11T09:59:12.475Z"
      }
    },
    {
      "id": "5aae8459-0e61-11ed-8b86-42ef0fcc4059",
      "group": "Device",
      "properties": {
        "id": "5aae8459-0e61-11ed-8b86-42ef0fcc4059",
        "sourceId": "418549729656307712",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C76EFCCC",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "5aae8459-0e61-11ed-8b86-42ef0fcc4059"
      },
      "data": {
        "id": "5aae8459-0e61-11ed-8b86-42ef0fcc4059",
        "createdTime": 1659004681436,
        "updatedTime": 1665484432818,
        "isDeleted": false,
        "eventRevision": 70,
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
          "sourceId": "418549729656307712",
          "sn": "05240017C76EFCCC",
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
          "time": 1631066395439,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C76EFCCC/9458394bf310b978af58daaf100001c9.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C76EFCCC/9458394bf314c1d4337a0ad4100001ca.jpg"
          ],
          "name": "养老服务中心对面朝小区出口方向",
          "lnglat": [
            111.27342,
            30.648632
          ],
          "location": "湖北省宜昌市点军区夷桥路s68翻坝靠近湖北省公安厅高速公路警察总队六支队三峡大队"
        },
        "_createdTime": "2022-07-28T10:38:01.436Z",
        "_updatedTime": "2022-10-11T10:33:52.818Z"
      }
    },
    {
      "id": "69966a8f-0e61-11ed-80b6-0e3fba728bd5",
      "group": "Device",
      "properties": {
        "id": "69966a8f-0e61-11ed-80b6-0e3fba728bd5",
        "sourceId": "418549772002066432",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C741621F",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "69966a8f-0e61-11ed-80b6-0e3fba728bd5"
      },
      "data": {
        "id": "69966a8f-0e61-11ed-80b6-0e3fba728bd5",
        "createdTime": 1659004706443,
        "updatedTime": 1665482356197,
        "isDeleted": false,
        "eventRevision": 58,
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
          "sourceId": "418549772002066432",
          "sn": "05240017C741621F",
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
          "time": 1631349446630,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C741621F/945ed068e7f0efdd0221f71c1000030b.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C741621F/945ed068e7f53f7018b628451000030c.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C741621F/945ed06a137d653eb50d90af1000030f.jpg"
          ],
          "name": "3号楼东侧乒乓球台通道",
          "lnglat": [
            111.272705,
            30.648865
          ],
          "location": "湖北省宜昌市点军区夷桥路靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T10:38:26.443Z",
        "_updatedTime": "2022-10-11T09:59:16.197Z"
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
      "id": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "Device",
      "properties": {
        "id": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
        "sourceId": "418549444410146816",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C79997F3",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "f48caa50-0e60-11ed-a549-1af40d3f3db3"
      },
      "data": {
        "id": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
        "createdTime": 1659004510086,
        "updatedTime": 1665482353053,
        "isDeleted": false,
        "eventRevision": 130,
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
          "sourceId": "418549444410146816",
          "sn": "05240017C79997F3",
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
          "time": 1631170673669,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C79997F3/945aa6d7ba72c364bb54702710000323.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C79997F3/945aa6d7ba79d7ae0f1c3af210000324.jpg"
          ],
          "name": "1号楼2单元右侧朝车棚方向",
          "lnglat": [
            111.27272,
            30.6497
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近点军区联棚乡卫生院"
        },
        "_createdTime": "2022-07-28T10:35:10.086Z",
        "_updatedTime": "2022-10-11T09:59:13.053Z"
      }
    },
    {
      "id": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
      "group": "Device",
      "properties": {
        "id": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
        "sourceId": "418549527792844800",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7168EA5",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "12325bf0-0e61-11ed-8b86-42ef0fcc4059"
      },
      "data": {
        "id": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
        "createdTime": 1659004559826,
        "updatedTime": 1665482352452,
        "isDeleted": false,
        "eventRevision": 34,
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
          "sourceId": "418549527792844800",
          "sn": "05240017C7168EA5",
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
          "time": 1631417227947,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7168EA5/9460646b5723e563f6a18e101000013f.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7168EA5/9460646b572780a31e7b1b8910000140.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7168EA5/9460646c6f7907f7f7fb6ef710000143.jpg"
          ],
          "name": "3号楼西侧立杆车棚方向",
          "lnglat": [
            111.2723,
            30.648771
          ],
          "location": "湖北省宜昌市点军区观音街靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T10:35:59.826Z",
        "_updatedTime": "2022-10-11T09:59:12.452Z"
      }
    },
    {
      "id": "6360d323-0e61-11ed-915e-5a9ef55c85a6",
      "group": "Device",
      "properties": {
        "id": "6360d323-0e61-11ed-915e-5a9ef55c85a6",
        "sourceId": "418549756365635584",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C7CA63B4",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "6360d323-0e61-11ed-915e-5a9ef55c85a6"
      },
      "data": {
        "id": "6360d323-0e61-11ed-915e-5a9ef55c85a6",
        "createdTime": 1659004696026,
        "updatedTime": 1665483193209,
        "isDeleted": false,
        "eventRevision": 70,
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
          "sourceId": "418549756365635584",
          "sn": "04560017C7CA63B4",
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
          "time": 1641525508155,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7CA63B4/954bbe7747bd8db8bf68d6b0100003e8.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7CA63B4/954bbe7747c3d3e1c3ea6279100003e9.jpg"
          ],
          "name": "1号楼二单元货梯",
          "lnglat": [
            111.273254,
            30.649399
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路276号泰和世家"
        },
        "_createdTime": "2022-07-28T10:38:16.026Z",
        "_updatedTime": "2022-10-11T10:13:13.209Z"
      }
    },
    {
      "id": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
      "group": "Device",
      "properties": {
        "id": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
        "sourceId": "418554509652983808",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C7024F53",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "fc178e7d-0e67-11ed-9950-f22003c5a9ff"
      },
      "data": {
        "id": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
        "createdTime": 1659007529218,
        "updatedTime": 1665483014268,
        "isDeleted": false,
        "eventRevision": 22,
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
          "sourceId": "418554509652983808",
          "sn": "04560017C7024F53",
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
          "time": 1641873043885,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7024F53/9553d5f1586bd714ec14275a10000402.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7024F53/9553d5f1586f38959232a82110000403.jpg"
          ],
          "name": "3号楼负一层电梯间靠楼梯",
          "lnglat": [
            111.27261,
            30.648964
          ],
          "location": "湖北省宜昌市点军区观音街s68翻坝靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T11:25:29.218Z",
        "_updatedTime": "2022-10-11T10:10:14.268Z"
      }
    },
    {
      "id": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1",
      "group": "Device",
      "properties": {
        "id": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1",
        "sourceId": "418549096249294848",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C78989F3",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1"
      },
      "data": {
        "id": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1",
        "createdTime": 1659004302563,
        "updatedTime": 1665961217543,
        "isDeleted": false,
        "eventRevision": 34,
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
          "sourceId": "418549096249294848",
          "sn": "04560017C78989F3",
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
          "time": 1641460024310,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C78989F3/954a38273e9ffb3e2bd42f8510000235.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C78989F3/954a38273ea3a0c3d64a528510000236.jpg"
          ],
          "name": "3号楼客梯",
          "lnglat": [
            111.27228,
            30.648382
          ],
          "location": "湖北省宜昌市点军区观音街12号靠近宜昌市联棚派出所"
        },
        "_createdTime": "2022-07-28T10:31:42.563Z",
        "_updatedTime": "2022-10-16T23:00:17.543Z"
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
      "id": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "Device",
      "properties": {
        "id": "7ec588ed-0e68-11ed-87f0-d265de259e97",
        "sourceId": "418554877493379072",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C74A36EE",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "7ec588ed-0e68-11ed-87f0-d265de259e97"
      },
      "data": {
        "id": "7ec588ed-0e68-11ed-87f0-d265de259e97",
        "createdTime": 1659007748462,
        "updatedTime": 1666397716544,
        "isDeleted": false,
        "eventRevision": 128,
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
          "sourceId": "418554877493379072",
          "sn": "05240017C74A36EE",
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
          "time": 1631947055098,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C74A36EE/946cba6f8fa15ceba926b0721000041a.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C74A36EE/946cba6f8fa56c1917790fcd1000041b.jpg"
          ],
          "name": "2号楼停车棚往1号楼方向",
          "lnglat": [
            111.27255,
            30.649305
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路276号附近"
        },
        "_createdTime": "2022-07-28T11:29:08.462Z",
        "_updatedTime": "2022-10-22T00:15:16.544Z"
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
      "id": "1d5901b2-0e61-11ed-8c75-c65929cba6f7",
      "group": "Device",
      "properties": {
        "id": "1d5901b2-0e61-11ed-8c75-c65929cba6f7",
        "sourceId": "418549559149461504",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7E61B20",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "1d5901b2-0e61-11ed-8c75-c65929cba6f7"
      },
      "data": {
        "id": "1d5901b2-0e61-11ed-8c75-c65929cba6f7",
        "createdTime": 1659004578534,
        "updatedTime": 1666690410839,
        "isDeleted": false,
        "eventRevision": 138,
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
          "sourceId": "418549559149461504",
          "sn": "05240017C7E61B20",
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
          "time": 1631949816995,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7E61B20/946ccae61010a53d8a317f7d100001d2.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7E61B20/946ccae61015c5ef02b9a217100001d3.jpg"
          ],
          "name": "2号楼旁停车棚往1号楼方向",
          "lnglat": [
            111.27237,
            30.649
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路276号附近"
        },
        "_createdTime": "2022-07-28T10:36:18.534Z",
        "_updatedTime": "2022-10-25T09:33:30.839Z"
      }
    },
    {
      "id": "33f2b87a-0e61-11ed-8228-961e4c7dc098",
      "group": "Device",
      "properties": {
        "id": "33f2b87a-0e61-11ed-8228-961e4c7dc098",
        "sourceId": "418549622869327872",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C72D4F6A",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "33f2b87a-0e61-11ed-8228-961e4c7dc098"
      },
      "data": {
        "id": "33f2b87a-0e61-11ed-8228-961e4c7dc098",
        "createdTime": 1659004616451,
        "updatedTime": 1665483021358,
        "isDeleted": false,
        "eventRevision": 66,
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
          "sourceId": "418549622869327872",
          "sn": "04560017C72D4F6A",
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
          "time": 1642570433181,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C72D4F6A/956429019d7aec82a163ec32100001a8.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C72D4F6A/956429019d7fd7c0f22d2bbc100001a9.jpg"
          ],
          "name": "1号楼二单元负一层电梯间靠楼梯",
          "lnglat": [
            111.273575,
            30.649044
          ],
          "location": "湖北省宜昌市点军区夷桥路s68翻坝靠近点军区住房和城乡建设局"
        },
        "_createdTime": "2022-07-28T10:36:56.451Z",
        "_updatedTime": "2022-10-11T10:10:21.358Z"
      }
    },
    {
      "id": "4927047c-0e61-11ed-b37f-f2954caaca38",
      "group": "Device",
      "properties": {
        "id": "4927047c-0e61-11ed-b37f-f2954caaca38",
        "sourceId": "418549682478776320",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C78D8164",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "4927047c-0e61-11ed-b37f-f2954caaca38"
      },
      "data": {
        "id": "4927047c-0e61-11ed-b37f-f2954caaca38",
        "createdTime": 1659004652027,
        "updatedTime": 1666177438620,
        "isDeleted": false,
        "eventRevision": 70,
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
          "sourceId": "418549682478776320",
          "sn": "04560017C78D8164",
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
          "time": 1641540944883,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C78D8164/954c23434c8d991611c7ddb1100002bc.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C78D8164/954c23434c944ecafb206d76100002bd.jpg"
          ],
          "name": "2号楼货梯",
          "lnglat": [
            111.272675,
            30.649376
          ],
          "location": "湖北省宜昌市点军区观音街276号靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T10:37:32.027Z",
        "_updatedTime": "2022-10-19T11:03:58.620Z"
      }
    },
    {
      "id": "2d53c292-0e61-11ed-9271-0ed7f04f0bae",
      "group": "Device",
      "properties": {
        "id": "2d53c292-0e61-11ed-9271-0ed7f04f0bae",
        "sourceId": "418549604229840896",
        "type": "FACE_GRABBER",
        "deviceSN": "04560017C7FD9CD2",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "2d53c292-0e61-11ed-9271-0ed7f04f0bae"
      },
      "data": {
        "id": "2d53c292-0e61-11ed-9271-0ed7f04f0bae",
        "createdTime": 1659004605343,
        "updatedTime": 1665213144745,
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
          "sourceId": "418549604229840896",
          "sn": "04560017C7FD9CD2",
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
          "time": 1631411244738,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7FD9CD2/946040c18fa914f74e45c7741000023e.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7FD9CD2/946040c18fac2581c72324871000023f.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7FD9CD2/946040c2d921235852ccd60410000242.jpg"
          ],
          "name": "篮球场旁边汽车充电桩左侧",
          "lnglat": [
            111.273766,
            30.648731
          ],
          "location": "湖北省宜昌市点军区夷桥路靠近联棚小学"
        },
        "_createdTime": "2022-07-28T10:36:45.343Z",
        "_updatedTime": "2022-10-08T07:12:24.745Z"
      }
    },
    {
      "id": "dff2e75d-0e67-11ed-ba55-5ad98904b0c3",
      "group": "Device",
      "properties": {
        "id": "dff2e75d-0e67-11ed-ba55-5ad98904b0c3",
        "sourceId": "418554430447681536",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C7423914",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "dff2e75d-0e67-11ed-ba55-5ad98904b0c3"
      },
      "data": {
        "id": "dff2e75d-0e67-11ed-ba55-5ad98904b0c3",
        "createdTime": 1659007482001,
        "updatedTime": 1665483019044,
        "isDeleted": false,
        "eventRevision": 34,
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
          "sourceId": "418554430447681536",
          "sn": "04560017C7423914",
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
          "time": 1641638515990,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7423914/954e600c157e9e7cb2c8719f1000037e.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7423914/954e600c15836fa64248b51e1000037f.jpg"
          ],
          "name": "4号楼二单元货梯",
          "lnglat": [
            111.27223,
            30.648602
          ],
          "location": "湖北省宜昌市点军区观音街12号靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T11:24:42.001Z",
        "_updatedTime": "2022-10-11T10:10:19.044Z"
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
      "id": "def1c976-0e60-11ed-ba55-5ad98904b0c3",
      "group": "Device",
      "properties": {
        "id": "def1c976-0e60-11ed-ba55-5ad98904b0c3",
        "sourceId": "418549383609450496",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C790C3E0",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "def1c976-0e60-11ed-ba55-5ad98904b0c3"
      },
      "data": {
        "id": "def1c976-0e60-11ed-ba55-5ad98904b0c3",
        "createdTime": 1659004473839,
        "updatedTime": 1665482357356,
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
          "sourceId": "418549383609450496",
          "sn": "05240017C790C3E0",
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
          "time": 1631350177751,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C790C3E0/945ed4c475f5f31c7a70283410000380.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C790C3E0/945ed4c475f9541ea91f357410000381.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C790C3E0/945ed4c5b72348c3c7afde8710000385.jpg"
          ],
          "name": "3号楼东侧小广场",
          "lnglat": [
            111.272865,
            30.648867
          ],
          "location": "湖北省宜昌市点军区夷桥路靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T10:34:33.839Z",
        "_updatedTime": "2022-10-11T09:59:17.356Z"
      }
    },
    {
      "id": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "Device",
      "properties": {
        "id": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
        "sourceId": "418554915695099904",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C710FCA6",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "8c577eb3-0e68-11ed-a1b3-ae5507a13933"
      },
      "data": {
        "id": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
        "createdTime": 1659007771228,
        "updatedTime": 1665483018266,
        "isDeleted": false,
        "eventRevision": 42,
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
          "sourceId": "418554915695099904",
          "sn": "04560017C710FCA6",
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
          "time": 1641628794184,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C710FCA6/954e2619c6a5cd19c4dd51341000030a.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C710FCA6/954e2619c6a982a8e67d20821000030b.jpg"
          ],
          "name": "3号楼货梯",
          "lnglat": [
            111.27245,
            30.6488
          ],
          "location": "湖北省宜昌市点军区观音街s68翻坝靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T11:29:31.228Z",
        "_updatedTime": "2022-10-11T10:10:18.266Z"
      }
    },
    {
      "id": "87bf4c37-0e60-11ed-a1b3-ae5507a13933",
      "group": "Device",
      "properties": {
        "id": "87bf4c37-0e60-11ed-a1b3-ae5507a13933",
        "sourceId": "418549138024562688",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7B70394",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "87bf4c37-0e60-11ed-a1b3-ae5507a13933"
      },
      "data": {
        "id": "87bf4c37-0e60-11ed-a1b3-ae5507a13933",
        "createdTime": 1659004327546,
        "updatedTime": 1665482521716,
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
          "sourceId": "418549138024562688",
          "sn": "05240017C7B70394",
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
          "time": 1631954842292,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7B70394/946ce8d8d138c72d3953f4f11000047c.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7B70394/946ce8d8d13c1d94eca2dd871000047d.jpg"
          ],
          "name": "3号楼旁停车棚往2号楼方向",
          "lnglat": [
            111.27219,
            30.648474
          ],
          "location": "湖北省宜昌市点军区联棚乡观音街12号附近"
        },
        "_createdTime": "2022-07-28T10:32:07.546Z",
        "_updatedTime": "2022-10-11T10:02:01.716Z"
      }
    },
    {
      "id": "1fadd517-0e61-11ed-8228-961e4c7dc098",
      "group": "Device",
      "properties": {
        "id": "1fadd517-0e61-11ed-8228-961e4c7dc098",
        "sourceId": "418549565810016256",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C713203C",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "1fadd517-0e61-11ed-8228-961e4c7dc098"
      },
      "data": {
        "id": "1fadd517-0e61-11ed-8228-961e4c7dc098",
        "createdTime": 1659004582445,
        "updatedTime": 1665482354250,
        "isDeleted": false,
        "eventRevision": 114,
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
          "sourceId": "418549565810016256",
          "sn": "05240017C713203C",
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
          "time": 1630992041184,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C713203C/94567e1c7c5bb9e626b8f4d11000012e.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C713203C/94567e1c7c5f5f3649e8e1601000012f.jpg"
          ],
          "name": "1号楼2单元左侧朝停车库方向",
          "lnglat": [
            111.27329,
            30.648033
          ],
          "location": "湖北省宜昌市点军区夷桥路s68翻坝靠近湖北省公安厅高速公路警察总队六支队三峡大队"
        },
        "_createdTime": "2022-07-28T10:36:22.445Z",
        "_updatedTime": "2022-10-11T09:59:14.250Z"
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
      "id": "baf71ba6-0e60-11ed-8e92-a2f3fdffeb53",
      "group": "Device",
      "properties": {
        "id": "baf71ba6-0e60-11ed-8e92-a2f3fdffeb53",
        "sourceId": "418549282308620288",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C7B42732",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "baf71ba6-0e60-11ed-8e92-a2f3fdffeb53"
      },
      "data": {
        "id": "baf71ba6-0e60-11ed-8e92-a2f3fdffeb53",
        "createdTime": 1659004413476,
        "updatedTime": 1665483017186,
        "isDeleted": false,
        "eventRevision": 42,
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
          "sourceId": "418549282308620288",
          "sn": "04560017C7B42732",
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
          "time": 1641542971568,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7B42732/954c268ec899e1490407455d1000026c.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7B42732/954c268ec89d281b83713fab1000026d.jpg"
          ],
          "name": "2号楼一层电梯间",
          "lnglat": [
            111.27268,
            30.649181
          ],
          "location": "湖北省宜昌市点军区观音街276号靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T10:33:33.476Z",
        "_updatedTime": "2022-10-11T10:10:17.186Z"
      }
    },
    {
      "id": "057959fe-0e68-11ed-b37f-f2954caaca38",
      "group": "Device",
      "properties": {
        "id": "057959fe-0e68-11ed-b37f-f2954caaca38",
        "sourceId": "418554536093810688",
        "type": "FULL_TARGET_CAMERA_DOME",
        "deviceSN": "04560017C7C09FA5",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "057959fe-0e68-11ed-b37f-f2954caaca38"
      },
      "data": {
        "id": "057959fe-0e68-11ed-b37f-f2954caaca38",
        "createdTime": 1659007544959,
        "updatedTime": 1665806527285,
        "isDeleted": false,
        "eventRevision": 86,
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
          "sourceId": "418554536093810688",
          "sn": "04560017C7C09FA5",
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
          "time": 1641443983808,
          "tags": [
            "半球"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7C09FA5/9549d88bb84957b64baa5a3c10000409.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C7C09FA5/9549d88bb850b3b556bffbca1000040a.jpg"
          ],
          "name": "4号楼一单元客梯",
          "lnglat": [
            111.27294,
            30.647879
          ],
          "location": "湖北省宜昌市点军区观音街s68翻坝靠近联棚小学"
        },
        "_createdTime": "2022-07-28T11:25:44.959Z",
        "_updatedTime": "2022-10-15T04:02:07.285Z"
      }
    },
    {
      "id": "47223a4d-0e68-11ed-8eac-4247c8c0a508",
      "group": "Device",
      "properties": {
        "id": "47223a4d-0e68-11ed-8eac-4247c8c0a508",
        "sourceId": "418554720911622144",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C721D193",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "47223a4d-0e68-11ed-8eac-4247c8c0a508"
      },
      "data": {
        "id": "47223a4d-0e68-11ed-8eac-4247c8c0a508",
        "createdTime": 1659007655117,
        "updatedTime": 1665482356761,
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
          "sourceId": "418554720911622144",
          "sn": "05240017C721D193",
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
          "time": 1630991806866,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C721D193/94567cb5dcc5a02864dc647510000105.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C721D193/94567cb5dcd6cbc16b2427f710000106.jpg"
          ],
          "name": "1号楼2单元旁边车库朝出口方向",
          "lnglat": [
            111.27328,
            30.64799
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路s68翻坝附近"
        },
        "_createdTime": "2022-07-28T11:27:35.117Z",
        "_updatedTime": "2022-10-11T09:59:16.761Z"
      }
    },
    {
      "id": "afcbd5f8-0e60-11ed-ba55-5ad98904b0c3",
      "group": "Device",
      "properties": {
        "id": "afcbd5f8-0e60-11ed-ba55-5ad98904b0c3",
        "sourceId": "418549250633302016",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7CC5258",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "afcbd5f8-0e60-11ed-ba55-5ad98904b0c3"
      },
      "data": {
        "id": "afcbd5f8-0e60-11ed-ba55-5ad98904b0c3",
        "createdTime": 1659004394738,
        "updatedTime": 1665484743812,
        "isDeleted": false,
        "eventRevision": 108,
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
          "sourceId": "418549250633302016",
          "sn": "05240017C7CC5258",
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
          "time": 1631953577678,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7CC5258/946ce1504e41ef7d0cf15abf100003af.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7CC5258/946ce1504e457d5bb2f54feb100003b0.jpg"
          ],
          "name": "中间停车棚往1号楼方向",
          "lnglat": [
            111.27228,
            30.64877
          ],
          "location": "湖北省宜昌市点军区联棚乡观音街12号附近"
        },
        "_createdTime": "2022-07-28T10:33:14.738Z",
        "_updatedTime": "2022-10-11T10:39:03.812Z"
      }
    },
    {
      "id": "d2be7d49-0e60-11ed-910f-0e5bf2aee668",
      "group": "Device",
      "properties": {
        "id": "d2be7d49-0e60-11ed-910f-0e5bf2aee668",
        "sourceId": "418549349249712128",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7367825",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "d2be7d49-0e60-11ed-910f-0e5bf2aee668"
      },
      "data": {
        "id": "d2be7d49-0e60-11ed-910f-0e5bf2aee668",
        "createdTime": 1659004453371,
        "updatedTime": 1666539083758,
        "isDeleted": false,
        "eventRevision": 422,
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
          "sourceId": "418549349249712128",
          "sn": "05240017C7367825",
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
          "time": 1640589929101,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7367825/9535f5fb80146e4069803e2d10000337.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7367825/9535f5fb8019de55e255215810000338.jpg"
          ],
          "name": "1号楼二单元负一层电梯口",
          "lnglat": [
            111.27297,
            30.64936
          ],
          "location": "湖北省宜昌市点军区观音街276号靠近老来乐托老公寓"
        },
        "_createdTime": "2022-07-28T10:34:13.371Z",
        "_updatedTime": "2022-10-23T15:31:23.758Z"
      }
    },
    {
      "id": "d493d928-0e60-11ed-8eac-4247c8c0a508",
      "group": "Device",
      "properties": {
        "id": "d493d928-0e60-11ed-8eac-4247c8c0a508",
        "sourceId": "418549354433871872",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7959E7E",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "d493d928-0e60-11ed-8eac-4247c8c0a508"
      },
      "data": {
        "id": "d493d928-0e60-11ed-8eac-4247c8c0a508",
        "createdTime": 1659004456446,
        "updatedTime": 1665482354248,
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
          "sourceId": "418549354433871872",
          "sn": "05240017C7959E7E",
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
          "time": 1631347161395,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7959E7E/945ec2ca15d189f19226cdd810000186.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7959E7E/945ec2ca15d593fc421c844710000187.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7959E7E/945ec2cb4a25fe00510e09db1000018a.jpg"
          ],
          "name": "2号楼东侧凉亭-向西方向",
          "lnglat": [
            111.27333,
            30.648767
          ],
          "location": "湖北省宜昌市点军区夷桥路靠近联棚小学"
        },
        "_createdTime": "2022-07-28T10:34:16.446Z",
        "_updatedTime": "2022-10-11T09:59:14.248Z"
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
        "updatedTime": 1667129090805,
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
        "_updatedTime": "2022-10-30T11:24:50.805Z"
      }
    },
    {
      "id": "972a9f44-0e60-11ed-b65e-f68af7cab855",
      "group": "Device",
      "properties": {
        "id": "972a9f44-0e60-11ed-b65e-f68af7cab855",
        "sourceId": "418549181410443264",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C75363F5",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "972a9f44-0e60-11ed-b65e-f68af7cab855"
      },
      "data": {
        "id": "972a9f44-0e60-11ed-b65e-f68af7cab855",
        "createdTime": 1659004353416,
        "updatedTime": 1665483890716,
        "isDeleted": false,
        "eventRevision": 70,
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
          "sourceId": "418549181410443264",
          "sn": "05240017C75363F5",
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
          "time": 1631933805202,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C75363F5/946c6b75f658813b659dc33610000289.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C75363F5/946c6b75f65c372bd49c1e481000028a.jpg"
          ],
          "name": "配电房围墙往小区后门方向",
          "lnglat": [
            111.27316,
            30.647905
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路s68翻坝附近"
        },
        "_createdTime": "2022-07-28T10:32:33.416Z",
        "_updatedTime": "2022-10-11T10:24:50.716Z"
      }
    },
    {
      "id": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "Device",
      "properties": {
        "id": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
        "sourceId": "418549235735134208",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C71C0535",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264"
      },
      "data": {
        "id": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
        "createdTime": 1659004385744,
        "updatedTime": 1665482351788,
        "isDeleted": false,
        "eventRevision": 86,
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
          "sourceId": "418549235735134208",
          "sn": "05240017C71C0535",
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
          "time": 1631947560909,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C71C0535/946cbd73c46f20d7bfe903e3100004ca.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C71C0535/946cbd73c4739625b7ff8c26100004cb.jpg"
          ],
          "name": "2号楼旁停车棚往3号楼方向",
          "lnglat": [
            111.27252,
            30.649305
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路276号附近"
        },
        "_createdTime": "2022-07-28T10:33:05.744Z",
        "_updatedTime": "2022-10-11T09:59:11.788Z"
      }
    },
    {
      "id": "5bca6928-0e61-11ed-a3dc-6e89c2637264",
      "group": "Device",
      "properties": {
        "id": "5bca6928-0e61-11ed-a3dc-6e89c2637264",
        "sourceId": "418549735008305152",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C747F426",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "5bca6928-0e61-11ed-a3dc-6e89c2637264"
      },
      "data": {
        "id": "5bca6928-0e61-11ed-a3dc-6e89c2637264",
        "createdTime": 1659004683296,
        "updatedTime": 1665540628064,
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
          "sourceId": "418549735008305152",
          "sn": "05240017C747F426",
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
          "time": 1631062100813,
          "tags": [
            "泰和世家",
            "宜昌点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C747F426/94581fb217084777261629461000039a.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C747F426/94581fb21710f5fee2e4e9df1000039b.jpg"
          ],
          "name": "泰和世家篮球场",
          "lnglat": [
            111.27345,
            30.64857
          ],
          "location": "湖北省宜昌市点军区联棚乡夷桥路s68翻坝附近"
        },
        "_createdTime": "2022-07-28T10:38:03.296Z",
        "_updatedTime": "2022-10-12T02:10:28.064Z"
      }
    },
    {
      "id": "0aff5187-0e68-11ed-915e-5a9ef55c85a6",
      "group": "Device",
      "properties": {
        "id": "0aff5187-0e68-11ed-915e-5a9ef55c85a6",
        "sourceId": "418554551629578240",
        "type": "FACE_GRABBER",
        "deviceSN": "04560017C71045DA",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "0aff5187-0e68-11ed-915e-5a9ef55c85a6"
      },
      "data": {
        "id": "0aff5187-0e68-11ed-915e-5a9ef55c85a6",
        "createdTime": 1659007554225,
        "updatedTime": 1665212152725,
        "isDeleted": false,
        "eventRevision": 42,
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
          "sourceId": "418554551629578240",
          "sn": "04560017C71045DA",
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
          "time": 1631346088984,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C71045DA/945ebc65570c6bbfe7c3847e100004e1.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C71045DA/945ebc655711bc73796540dc100004e2.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/04560017C71045DA/945ebc673e0bfee8912943c8100004e5.jpg"
          ],
          "name": "健身器材区域",
          "lnglat": [
            111.2733,
            30.649357
          ],
          "location": "湖北省宜昌市点军区夷桥路靠近点军区联棚乡卫生院"
        },
        "_createdTime": "2022-07-28T11:25:54.225Z",
        "_updatedTime": "2022-10-08T06:55:52.725Z"
      }
    },
    {
      "id": "5bb96e72-0e68-11ed-80b6-0e3fba728bd5",
      "group": "Device",
      "properties": {
        "id": "5bb96e72-0e68-11ed-80b6-0e3fba728bd5",
        "sourceId": "418554778860191744",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C7ED0C69",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "5bb96e72-0e68-11ed-80b6-0e3fba728bd5"
      },
      "data": {
        "id": "5bb96e72-0e68-11ed-80b6-0e3fba728bd5",
        "createdTime": 1659007689662,
        "updatedTime": 1665547444822,
        "isDeleted": false,
        "eventRevision": 83,
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
          "sourceId": "418554778860191744",
          "sn": "05240017C7ED0C69",
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
          "time": 1631170065292,
          "tags": [],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7ED0C69/945aa336f0c6163f63251ed110000299.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C7ED0C69/945aa336f0caaac672acccb71000029a.jpg"
          ],
          "name": "1号楼2单元左侧朝车棚方向",
          "lnglat": [
            111.27273,
            30.649736
          ],
          "location": "湖北省宜昌市点军区夷桥路276号靠近点军区联棚乡卫生院"
        },
        "_createdTime": "2022-07-28T11:28:09.662Z",
        "_updatedTime": "2022-10-12T04:04:04.822Z"
      }
    },
    {
      "id": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "Device",
      "properties": {
        "id": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
        "sourceId": "418554619677900800",
        "type": "FULL_TARGET_CAMERA",
        "deviceSN": "05240017C77F26F9",
        "isDeleted": false,
        "time": "",
        "subsystem": "VISUAL",
        "merchantId": "1430872481079660545",
        "status": "",
        "deviceId": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8"
      },
      "data": {
        "id": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
        "createdTime": 1659007594779,
        "updatedTime": 1665482352342,
        "isDeleted": false,
        "eventRevision": 66,
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
          "sourceId": "418554619677900800",
          "sn": "05240017C77F26F9",
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
          "time": 1631353408975,
          "tags": [
            "泰和世家",
            "宜昌市点军区"
          ],
          "contacts": [],
          "images": [
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C77F26F9/945ee8070f4ea783b166964b10000193.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C77F26F9/945ee8070f548596f3b6622e10000194.jpg",
            "https://s3.dianjun.sensoro.vip/ivms-ams-prod/install/05240017C77F26F9/945ee80850cc0fb7325ccc6310000197.jpg"
          ],
          "name": "2号楼东侧凉亭方向",
          "lnglat": [
            111.27334,
            30.649061
          ],
          "location": "湖北省宜昌市点军区夷桥路靠近联棚乡人民政府"
        },
        "_createdTime": "2022-07-28T11:26:34.779Z",
        "_updatedTime": "2022-10-11T09:59:12.342Z"
      }
    }
  ],
  "edges": [
    {
      "start": "s-1530035685489119232",
      "end": "e7240e8f-0e60-11ed-9271-0ed7f04f0bae",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
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
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 6,
        "createdTime": 1666195200000
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
        "count": 1,
        "createdTime": 1665590400000
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
        "count": 2,
        "createdTime": 1665504000000
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
        "createdTime": 1665763200000
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
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
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
        "createdTime": 1664899200000
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
        "count": 2,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
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
        "createdTime": 1665936000000
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
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665590400000
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
        "createdTime": 1666108800000
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
        "createdTime": 1666281600000
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
        "createdTime": 1666368000000
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
        "createdTime": 1665158400000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "bd90abe8-0e60-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
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
      "end": "53dace9d-0e68-11ed-840a-e284e8240358",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "8bb7ecff-0e60-11ed-915e-5a9ef55c85a6",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "b933fc05-0e60-11ed-8310-8607d6c6332c",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1576813199045427200",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666237808000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1551846825718190080",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666237290000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1529788513728335872",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666235971000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1554622223493365760",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666583904000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1554622223493365760",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666583903000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1552868052809285632",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666236131000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1532565666639384576",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666235971000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1526143777335414784",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666344794000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1553321703310884864",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666237640000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1553321703310884864",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666238451000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1543873163924869120",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666335693000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1543873163924869120",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666335692000
      }
    },
    {
      "start": "s-1530035685489119232",
      "end": "s-1561317454485913600",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666235971000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1556786460969926656",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666585358000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1574671578610794496",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666325193000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1574671578610794496",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666325194000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "s-1526356294800248832",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666840184000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1554678192399187968",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666842626000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1554678192399187968",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666842620000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1559418765265862656",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666756738000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1559418765265862656",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666671610000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "s-1559418765265862656",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1667104811000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "s-1585520168379875328",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666925362000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "s-1583053087113740288",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666753861000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "s-1583053087113740288",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666755172000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "s-1583053087113740288",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666753114000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "s-1562606794973380608",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666222396000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "s-1562606794973380608",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666682842000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "s-1532565666639384576",
      "group": "COMPANY",
      "properties": {
        "count": 1,
        "createdTime": 1666235970000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664726400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666972800000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666713600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667145600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665158400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666972800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "5aae8459-0e61-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "69966a8f-0e61-11ed-80b6-0e3fba728bd5",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666972800000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665158400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6360d323-0e61-11ed-915e-5a9ef55c85a6",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "e7240e8f-0e60-11ed-9271-0ed7f04f0bae",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "80be1a98-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "80be1a98-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "80be1a98-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "80be1a98-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "80be1a98-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6360d323-0e61-11ed-915e-5a9ef55c85a6",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6360d323-0e61-11ed-915e-5a9ef55c85a6",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "1d5901b2-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666800000000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667145600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666713600000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666972800000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1554622223493365760",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "33f2b87a-0e61-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "4927047c-0e61-11ed-b37f-f2954caaca38",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "4927047c-0e61-11ed-b37f-f2954caaca38",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "4927047c-0e61-11ed-b37f-f2954caaca38",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "4927047c-0e61-11ed-b37f-f2954caaca38",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "2d53c292-0e61-11ed-9271-0ed7f04f0bae",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "dff2e75d-0e67-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665158400000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "def1c976-0e60-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666713600000
      }
    },
    {
      "start": "s-1532565666639384576",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1532565666639384576",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665158400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "8c577eb3-0e68-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1664726400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "87bf4c37-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1532565666639384576",
      "end": "53dace9d-0e68-11ed-840a-e284e8240358",
      "group": "CAPTURE",
      "properties": {
        "count": 7,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 6,
        "createdTime": 1665417600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664726400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666972800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "1fadd517-0e61-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "1fadd517-0e61-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "07d33c46-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "baf71ba6-0e60-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "53dace9d-0e68-11ed-840a-e284e8240358",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "057959fe-0e68-11ed-b37f-f2954caaca38",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "69966a8f-0e61-11ed-80b6-0e3fba728bd5",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "47223a4d-0e68-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "47223a4d-0e68-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "47223a4d-0e68-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6fac5f28-0e68-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "afcbd5f8-0e60-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "ada5b9be-0e60-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "1d5901b2-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "1d5901b2-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "fc178e7d-0e67-11ed-9950-f22003c5a9ff",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666800000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "78db2577-0e60-11ed-9c74-5ea49c3d1ec1",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "7ec588ed-0e68-11ed-87f0-d265de259e97",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "d2be7d49-0e60-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664985600000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "d493d928-0e60-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "d493d928-0e60-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "d493d928-0e60-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 7,
        "createdTime": 1666713600000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "d493d928-0e60-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 6,
        "createdTime": 1666800000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "80199ed1-0e61-11ed-8c0a-9a15ce7fc192",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "47223a4d-0e68-11ed-8eac-4247c8c0a508",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "69966a8f-0e61-11ed-80b6-0e3fba728bd5",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666800000000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "69966a8f-0e61-11ed-80b6-0e3fba728bd5",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "216bbdb6-0e68-11ed-9c74-5ea49c3d1ec1",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "972a9f44-0e60-11ed-b65e-f68af7cab855",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "2243798c-0e61-11ed-910f-0e5bf2aee668",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665158400000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666800000000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664640000000
      }
    },
    {
      "start": "s-1552868052809285632",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "109832d1-0e68-11ed-8228-961e4c7dc098",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "5bca6928-0e61-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664726400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "aa6f8ccf-0e60-11ed-a3dc-6e89c2637264",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "12325bf0-0e61-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "0aff5187-0e68-11ed-915e-5a9ef55c85a6",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666713600000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665331200000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665158400000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664553600000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1551846825718190080",
      "end": "5bb96e72-0e68-11ed-80b6-0e3fba728bd5",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "5bb96e72-0e68-11ed-80b6-0e3fba728bd5",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "5bb96e72-0e68-11ed-80b6-0e3fba728bd5",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "d66d9135-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "b933fc05-0e60-11ed-8310-8607d6c6332c",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "b933fc05-0e60-11ed-8310-8607d6c6332c",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "b933fc05-0e60-11ed-8310-8607d6c6332c",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "b933fc05-0e60-11ed-8310-8607d6c6332c",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "b933fc05-0e60-11ed-8310-8607d6c6332c",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666800000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664726400000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665504000000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666972800000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "6b11b3a4-0e61-11ed-a1b3-ae5507a13933",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1529788513728335872",
      "end": "da93bc4f-0e67-11ed-8e92-a2f3fdffeb53",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664812800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 20,
        "createdTime": 1666627200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666800000000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666368000000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 20,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 14,
        "createdTime": 1666713600000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1666972800000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 8,
        "createdTime": 1667059200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "232b6668-0e68-11ed-9bd9-5eb4dc640bb8",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1543873163924869120",
      "end": "4d299c3b-0e61-11ed-8c75-c65929cba6f7",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "afcbd5f8-0e60-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1553321703310884864",
      "end": "afcbd5f8-0e60-11ed-ba55-5ad98904b0c3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666022400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1665849600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666108800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 3,
        "createdTime": 1665072000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1666281600000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665676800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666540800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665763200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 4,
        "createdTime": 1666195200000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1665936000000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 5,
        "createdTime": 1665244800000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664726400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1576813199045427200",
      "end": "f48caa50-0e60-11ed-a549-1af40d3f3db3",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1665590400000
      }
    },
    {
      "start": "s-1526143777335414784",
      "end": "972a9f44-0e60-11ed-b65e-f68af7cab855",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1664899200000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 1,
        "createdTime": 1666886400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666454400000
      }
    },
    {
      "start": "s-1561317454485913600",
      "end": "7610cf79-0e68-11ed-8b86-42ef0fcc4059",
      "group": "CAPTURE",
      "properties": {
        "count": 2,
        "createdTime": 1666713600000
      }
    }
  ]
}

export default () => (
    <GraphTimeline
        data={data}
        yAxis={{ width: 200 }}
        style={{ height: 1200, padding: 30 }}
    />
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
