

var map = {
    "min":1,
    "max":3,
    "x": {
        1:{
            "y":
            {
                1:{
                    "id":10101,
                    "name": "Kingsport",
                },
                2:{
                    "id":10102,
                    "name": "Road between Kingsport and the farm",
                    "encounter": {
                        "type":"monster",
                        "npc":"wolf",
                        "count":0,
                    }
                },
                3:{
                    "id":10103,
                    "name": "The farm"
                }
            }
        },
        2:{ "y":
            {
                1:{
                    "id":10201,
                    "name": "Kingsport2"
                },
                2:{
                    "id":10202,
                    "name": "Forest2",
                },
                3:{
                    "id":10203,
                    "name": "Mountains2",
                    "encounter": {
                        "type":"monster",
                        "npc":"bandit",
                        "count":0,
                    }
                }
            }
        },
        3:{ "y":
            {
                1:{
                    "id":10301,
                    "name": "Kingsport3"
                },
                2:{
                    "id":10302,
                    "name": "Forest3"
                },
                3:{
                    "id":10303,
                    "name": "Mountains3",
                    // "monster":"Yeti",
                    // "strength":2
                }
            }
        }
    },
}