var APP_DATA = {
  "scenes": [
    {
      "id": "0-upper-end",
      "name": "Upper End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5664,
      "initialViewParameters": {
        "yaw": -3.0766667598198083,
        "pitch": 0.2442805858407393,
        "fov": 0.8463740163553201
      },
      "linkHotspots": [
        {
          "yaw": -2.8224836368338586,
          "pitch": 0.01895048166113611,
          "rotation": 0,
          "target": "2-stacker"
        },
        {
          "yaw": 2.556573327965464,
          "pitch": 0.1291748911359356,
          "rotation": 0,
          "target": "1-near-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-near-office",
      "name": "Near Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5664,
      "initialViewParameters": {
        "yaw": -0.459079074153264,
        "pitch": 0.34406296276989146,
        "fov": 0.9411344822493861
      },
      "linkHotspots": [
        {
          "yaw": -1.2463088388054082,
          "pitch": 0.04234383108479989,
          "rotation": 0,
          "target": "2-stacker"
        },
        {
          "yaw": 0.4587861115938523,
          "pitch": 0.08802028125185579,
          "rotation": 0,
          "target": "0-upper-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stacker",
      "name": "Stacker",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5664,
      "initialViewParameters": {
        "yaw": 0.010740994990115382,
        "pitch": 0.3090733994860777,
        "fov": 1.2066814984253762
      },
      "linkHotspots": [
        {
          "yaw": 0.4475218526345248,
          "pitch": 0.012740061649708423,
          "rotation": 0,
          "target": "1-near-office"
        },
        {
          "yaw": -0.19395296893283387,
          "pitch": -0.009725759733449024,
          "rotation": 0,
          "target": "0-upper-end"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Paw Paw 2 North 5-24-22",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
