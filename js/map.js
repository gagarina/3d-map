var map = {
    "name": "name example",
    "some-your-property": 234,
    "initialFragment": "floor_1_2",
    // some more 
    "map-fragments": [
        // fragment 2
        {
            "id": "floor_1_2",
            "description": "фойє",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [35, -5, -45.5],
                    "arrowType": "arrowUp",
                    "scale": 6,
                    "fragmentId": "floor_1_3"

                }
            ]
        },
        // fragment 3
        {
            "id": "floor_1_3",
            "description": "Вид на головні сходи",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-5, -20, -95.5],
                    "arrowType": "arrowUp",
                    "scale": 9,
                    "fragmentId": "floor_1_35"

                },
                {
                    "position": [90, -40, -7.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_1_5"

                },
                {
                    "position": [-195, -94, 8.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_1_4"

                },
                {
                    "position": [-20, -160, 230.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_1_2"

                }
            ]
        },
        // fragment 4
        {
            "id": "floor_1_4",
            "description": "Начальник охорони",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [185, -100, -70.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_1_31"
                },
                {
                    "position": [-130, -160, -280.5],
                    "arrowType": "arrowUp",
                    "scale": 31,
                    "fragmentId": "floor_1_25"

                },
                {
                    "position": [80, -110, 190.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_1_3"

                }
            ]
        },
        // fragment 5
        {
            "id": "floor_1_5",
            "description": "Книгарня",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [345, -120, -45.5],
                    "arrowType": "arrowUp",
                    "scale": 40,
                    "fragmentId": "floor_1_3"

                },
                {
                    "position": [-230, -150, 10.5],
                    "arrowType": "arrowUp",
                    "scale": 35,
                    "fragmentId": "floor_1_26"

                },
                {
                    "position": [20, -70, 190.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_1_33"

                }
            ]
        },
        // fragment 6
        {
            "id": "floor_1_6",
            "description": "Гардероб",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [285, -140, 130.5],
                    "arrowType": "arrowUp",
                    "scale": 35,
                    "fragmentId": "floor_1_31"

                },
                {
                    "position": [-360, -120, -180.5],
                    "arrowType": "arrowUp",
                    "scale": 40,
                    "fragmentId": "floor_1_32"

                }
            ]
        },
        // fragment 7
        {
            "id": "floor_1_7",
            "description": "Гардероб",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-120, -80, -170.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_1_34"

                },
                {
                    "position": [150, -100, 200.5],
                    "arrowType": "arrowUp",
                    "scale": 30,
                    "fragmentId": "floor_1_33"

                }
            ]
        },
        // fragment 8
        {
            "id": "floor_1_8",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-80, -35, 25.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_1_10"

                },
                {
                    "position": [-35, -110, -200.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_32"

                }
            ]
        },
        // fragment 9
        {
            "id": "floor_1_9",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-80, -60, -55.5],
                    "arrowType": "arrowUp",
                    "scale": 9,
                    "fragmentId": "floor_1_34"

                },
                {
                    "position": [100, -102, -150.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_10"

                }
            ]
        },
        // fragment 10
        {
            "id": "floor_1_10",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [270, -100, 200.5],
                    "arrowType": "arrowUp",
                    "scale": 35,
                    "fragmentId": "floor_2_1"

                },
                {
                    "position": [-290, -230, -185.5],
                    "arrowType": "arrowUp",
                    "scale": 35,
                    "fragmentId": "floor_1_35"

                },
                {
                    "position": [-280, -130, 190.5],
                    "arrowType": "arrowRight",
                    "scale": 40,
                    "fragmentId": "floor_2_10"

                },
                {
                    "position": [-50, -80, 190.5],
                    "arrowType": "arrowLeft",
                    "scale": 25,
                    "fragmentId": "floor_1_9"

                },
                {
                    "position": [25, -40, -100.5],
                    "arrowType": "arrowLeft",
                    "scale": 13,
                    "fragmentId": "floor_2_7"

                },
                {
                    "position": [130, -70, -100.5],
                    "arrowType": "arrowRight",
                    "scale": 23,
                    "fragmentId": "floor_1_8"

                }
            ]
        },
        // fragment 11
        {
            "id": "floor_2_1",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-110, -100, 200.5],
                    "arrowType": "arrowUp",
                    "scale": 22,
                    "fragmentId": "floor_2_2"

                },
                {
                    "position": [100, -130, -185.5],
                    "arrowType": "arrowUp",
                    "scale": 22,
                    "fragmentId": "floor_1_10"

                }
            ]
        },
        // fragment 12
        {
            "id": "floor_2_2",
            "description": "Актовий зал",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [300, -120, -108.5],
                    "arrowType": "arrowUp",
                    "scale": 32,
                    "fragmentId": "floor_2_1"

                },
                {
                    "position": [-100, -94, -185.5],
                    "arrowType": "arrowUp",
                    "scale": 24,
                    "fragmentId": "floor_2_13"

                },
                {
                    "position": [30, -90, 190.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_2_15"

                }
            ]
        },
        // fragment 13
        {
            "id": "floor_2_3",
            "description": "Буфет (2 поверх)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [170, -60, -40.5],
                    "arrowType": "arrowUp",
                    "scale": 13,
                    "fragmentId": "floor_2_13"

                }
            ]
        },
        // fragment 14
        {
            "id": "floor_2_4",
            "description": "439",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-70, -280, 300.5],
                    "arrowType": "arrowUp",
                    "scale": 37,
                    "fragmentId": "floor_2_5"

                }
            ]
        },
        // fragment 15
        {
            "id": "floor_2_5",
            "description": "Редакція газети 'Каменяр'",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-100, -140, 190.5],
                    "arrowType": "arrowRight",
                    "scale": 40,
                    "fragmentId": "floor_1_11"

                },
                {
                    "position": [150, -280, 300.5],
                    "arrowType": "arrowLeft",
                    "scale": 60,
                    "fragmentId": "floor_2_13"

                },
                {
                    "position": [-250, -20, -100.5],
                    "arrowType": "arrowLeft",
                    "scale": 35,
                    "fragmentId": "floor_2_4"

                }
            ]
        },
        // fragment 16
        {
            "id": "floor_1_11",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-150, -20, 22.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_1_17"

                },
                {
                    "position": [250, -50, -45.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_12"

                },
                {
                    "position": [-170, -30, 130.5],
                    "arrowType": "arrowLeft",
                    "scale": 20,
                    "fragmentId": "floor_1_37"

                },
                {
                    "position": [180, -40, -180.5],
                    "arrowType": "arrowLeft",
                    "scale": 21,
                    "fragmentId": "floor_2_5"

                }
            ]
        },
        // fragment 17
        {
            "id": "floor_1_12",
            "description": "Медпункт",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [190, -80, 160.5],
                    "arrowType": "arrowUp",
                    "scale": 31,
                    "fragmentId": "floor_1_11"

                },
                {
                    "position": [-250, -94, 105.5],
                    "arrowType": "arrowUp",
                    "scale": 33,
                    "fragmentId": "floor_1_13"

                }
            ]
        },
        // fragment18
        {
            "id": "floor_1_13",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-20, -20, 100.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_1_15"

                },
                {
                    "position": [200, -50, -105.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_12"

                },
                {
                    "position": [-145, -50, -160.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_1_14"

                }
            ]
        },
        // fragment 19
        {
            "id": "floor_1_14",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -50, 20.5],
                    "arrowType": "arrowUp",
                    "scale": 9,
                    "fragmentId": "floor_1_13"

                },
                {
                    "position": [2, -10, -20.5],
                    "arrowType": "arrowUp",
                    "scale": 2,
                    "fragmentId": "floor_1_39"

                }
            ]
        },
        // fragment 20
        {
            "id": "floor_1_15",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-50, -45, 160.5],
                    "arrowType": "arrowLeft",
                    "scale": 22,
                    "fragmentId": "floor_1_13"

                },
                {
                    "position": [-180, -50, -120.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_1_16"

                }
            ]
        },
        // fragment 21
        {
            "id": "floor_1_16",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [50, -20, -100.5],
                    "arrowType": "arrowUp",
                    "scale": 10,
                    "fragmentId": "floor_1_18"

                },
                {
                    "position": [-170, -60, 305.5],
                    "arrowType": "arrowUp",
                    "scale": 30,
                    "fragmentId": "floor_1_15"

                },
                {
                    "position": [-10, -25, 160.5],
                    "arrowType": "arrowLeft",
                    "scale": 22,
                    "fragmentId": "floor_1_22"

                }
            ]
        },
        // fragment 22
        {
            "id": "floor_1_17",
            "description": "Лабораторія ідей",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-200, -30, -100.5],
                    "arrowType": "arrowLeft",
                    "scale": 25,
                    "fragmentId": "floor_1_27"

                },
                {
                    "position": [-150, -80, 205.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_1_11"

                },
                {
                    "position": [340, -20, 130.5],
                    "arrowType": "arrowLeft",
                    "scale": 40,
                    "fragmentId": "floor_1_26"

                }
            ]
        },
        // fragment 23
        {
            "id": "floor_1_18",
            "description": "Ощадбанк",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-57, -15, -125.5],
                    "arrowType": "arrowLeft",
                    "scale": 15,
                    "fragmentId": "floor_1_25"

                },
                {
                    "position": [-280, -180, 300.5],
                    "arrowType": "arrowUp",
                    "scale": 40,
                    "fragmentId": "floor_1_16"

                },
                {
                    "position": [75, -10, 170.5],
                    "arrowType": "arrowLeft",
                    "scale": 20,
                    "fragmentId": "floor_1_19"

                }
            ]
        },
        // fragment 24
        {
            "id": "floor_1_19",
            "description": "Бухгалтерія",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-20, -17, -93.5],
                    "arrowType": "arrowLeft",
                    "scale": 10,
                    "fragmentId": "floor_1_20"

                },
                {
                    "position": [90, -190, 300.5],
                    "arrowType": "arrowUp",
                    "scale": 40,
                    "fragmentId": "floor_1_18"

                },
                {
                    "position": [250, -10, 15.5],
                    "arrowType": "arrowLeft",
                    "scale": 35,
                    "fragmentId": "floor_1_36"

                }
            ]
        },
        // fragment 25
        {
            "id": "floor_1_20",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-300, -120, 80.5],
                    "arrowType": "arrowUp",
                    "scale": 30,
                    "fragmentId": "floor_1_19"

                },
                {
                    "position": [70, -100, 300.5],
                    "arrowType": "arrowUp",
                    "scale": 32,
                    "fragmentId": "floor_1_21"

                }
            ]
        },
        // fragment 26
        {
            "id": "floor_1_21",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-60, -40, 80.5],
                    "arrowType": "arrowUp",
                    "scale": 10,
                    "fragmentId": "floor_1_20"

                },
                {
                    "position": [-160, -30, -65.5],
                    "arrowType": "arrowRight",
                    "scale": 18,
                    "fragmentId": "floor_2_6"

                },
                {
                    "position": [100, -65, -135.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_1_23"

                },
                {
                    "position": [-170, -110, -200.5],
                    "arrowType": "arrowRight",
                    "scale": 32,
                    "fragmentId": ""

                }
            ]
        },
        // fragment 27
        {
            "id": "floor_2_6",
            "description": "Деканат прикладної математики",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-55, -90, 200.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_1_21"

                },
                {
                    "position": [3, -10, -20.5],
                    "arrowType": "arrowUp",
                    "scale": 2,
                    "fragmentId": ""

                }
            ]
        },
        // fragment 28
        {
            "id": "floor_2_7",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [37, -40, -80.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_2_16"

                },
                {
                    "position": [-50, -73, 105.5],
                    "arrowType": "arrowRight",
                    "scale": 13,
                    "fragmentId": "floor_1_10"

                },
                {
                    "position": [150, -74, 79.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_2_20"

                }
            ]
        },
        // fragment 29
        {
            "id": "floor_2_8",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-270, -95, 50.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_2_16"

                },
                {
                    "position": [-20, -46, -105.5],
                    "arrowType": "arrowUp",
                    "scale": 11,
                    "fragmentId": "floor_2_10"

                },
                {
                    "position": [170, -60, -30.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_2_9"

                }
            ]
        },
        // fragment 30
        {
            "id": "floor_2_9",
            "description": "Перший проректор",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-250, -90, 15.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_2_18"

                },
                {
                    "position": [9, -40, 105.5],
                    "arrowType": "arrowUp",
                    "scale": 9,
                    "fragmentId": "floor_2_8"

                },
                {
                    "position": [-14, -75, -130.5],
                    "arrowType": "arrowUp",
                    "scale": 13,
                    "fragmentId": "floor_2_19"

                }
            ]
        },
        // fragment 31
        {
            "id": "floor_2_10",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-250, -120, 70.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_2_8"

                },
                {
                    "position": [15, -46, 105.5],
                    "arrowType": "arrowUp",
                    "scale": 11,
                    "fragmentId": "floor_2_18"

                },
                {
                    "position": [170, -100, -30.5],
                    "arrowType": "arrowLeft",
                    "scale": 19,
                    "fragmentId": "floor_1_10"

                }

            ]
        },
        // fragment 32
        {
            "id": "floor_2_11",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-35, -30, -80.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_2_36"

                },
                {
                    "position": [5, -10, 75.5],
                    "arrowType": "arrowLeft",
                    "scale": 9,
                    "fragmentId": ""

                },
                {
                    "position": [170, -40, -140.5],
                    "arrowType": "arrowRight",
                    "scale": 25,
                    "fragmentId": "floor_2_37"

                }
            ]
        },
        // fragment 33
        {
            "id": "floor_2_12",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-150, -110, 150.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_2_21"

                },
                {
                    "position": [170, -100, -157.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_2_16"

                },
                {
                    "position": [-90, -50, -95.5],
                    "arrowType": "arrowUp",
                    "scale": 11,
                    "fragmentId": "floor_2_20"

                }
            ]
        },
        // fragment 34
        {
            "id": "floor_2_13",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-80, -42, 115.5],
                    "arrowType": "arrowUp",
                    "scale": 11,
                    "fragmentId": "floor_2_3"

                },
                {
                    "position": [140, -50, -75.5],
                    "arrowType": "arrowUp",
                    "scale": 14,
                    "fragmentId": "floor_2_2"

                },
                {
                    "position": [-40, -40, -130.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_2_17"

                },
                {
                    "position": [-115, -50, 75.5],
                    "arrowType": "arrowRight",
                    "scale": 17,
                    "fragmentId": "floor_2_5"

                }
            ]
        },
        // fragment 35
        {
            "id": "floor_2_14",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [80, -22, 35.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_2_15"

                }
            ]
        },
        // fragment 36
        {
            "id": "floor_2_15",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [45, -50, 125.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_2_2"

                },
                {
                    "position": [-140, -50, 105.5],
                    "arrowType": "arrowUp",
                    "scale": 14,
                    "fragmentId": "floor_2_20"

                },
                {
                    "position": [-15, -40, -130.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_2_14"

                },

            ]
        },
        // fragment 37
        {
            "id": "floor_2_16",
            "description": "214",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-250, -105, 45.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_2_12"

                },
                {
                    "position": [130, -50, -12.5],
                    "arrowType": "arrowUp",
                    "scale": 10,
                    "fragmentId": "floor_2_8"

                },
                {
                    "position": [-15, -40, -95.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_2_7"

                }
            ]
        },
        // fragment 38
        {
            "id": "floor_1_22",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [155, -170, 125.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_1_16"

                },
                {
                    "position": [-68, 10, -110.5],
                    "arrowType": "arrowLeft",
                    "scale": 20,
                    "fragmentId": "floor_1_23"

                }
            ]
        },
        // fragment 39
        {
            "id": "floor_1_23",
            "description": "Юридичний відділ (ауд. 118)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-75, -50, -110.5],
                    "arrowType": "arrowUp",
                    "scale": 13,
                    "fragmentId": "floor_1_21"

                },
                {
                    "position": [-105, -80, 50.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_1_22"

                },
                {
                    "position": [105, -70, 195.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_1_24"

                }
            ]
        },
        // fragment 40
        {
            "id": "floor_1_24",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [195, -70, 125.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_1_23"

                }
            ]
        },
        // fragment 41
        {
            "id": "floor_1_25",
            "description": "111",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-110, -35, 40.5],
                    "arrowType": "arrowUp",
                    "scale": 9,
                    "fragmentId": "floor_1_4"

                },
                {
                    "position": [60, -30, -22.5],
                    "arrowType": "arrowUp",
                    "scale": 6,
                    "fragmentId": "floor_1_18"

                }
            ]
        },
        // fragment 42
        {
            "id": "floor_1_26",
            "description": "Вчений секретар",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-250, -110, 65.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_1_17"

                },
                {
                    "position": [230, -110, -45.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_1_5"

                }
            ]
        },
        // fragment 43
        {
            "id": "floor_1_27",
            "description": "118-А",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [200, -70, 10.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_1_28"

                },
                {
                    "position": [5, -10, -45.5],
                    "arrowType": "arrowUp",
                    "scale": 5,
                    "fragmentId": "floor_1_38"

                },
                {
                    "position": [-155, -100, -15.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_1_17"

                }
            ]
        },
        // fragment 44
        {
            "id": "floor_1_28",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-270, -110, -100.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_1_27"

                },
                {
                    "position": [9, -23, -45.5],
                    "arrowType": "arrowUp",
                    "scale": 5,
                    "fragmentId": ""

                }
            ]
        },
        // fragment 45
        {
            "id": "floor_1_29",
            "description": "119-А",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [0, 0, 0],
                    "arrowType": "arrowUp",
                    "scale": 0,
                    "fragmentId": ""

                }
            ]
        },
        // fragment 46
        {
            "id": "floor_1_30",
            "description": "119-Б",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [0, 0, 0],
                    "arrowType": "arrowUp",
                    "scale": 0,
                    "fragmentId": ""

                }
            ]
        },
        // fragment 47
        {
            "id": "floor_1_31",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-160, -80, -70.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_1_32"

                },
                {
                    "position": [230, -120, 100.5],
                    "arrowType": "arrowUp",
                    "scale": 30,
                    "fragmentId": "floor_1_4"

                },
                {
                    "position": [50, -10, -40.5],
                    "arrowType": "arrowLeft",
                    "scale": 10,
                    "fragmentId": "floor_1_35"

                }
            ]
        },
        // fragment 48
        {
            "id": "floor_1_32",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-115, -60, -70.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_1_31"

                },
                {
                    "position": [-190, -120, 280.5],
                    "arrowType": "arrowUp",
                    "scale": 29,
                    "fragmentId": "floor_1_8"

                }
            ]
        },
        // fragment 49
        {
            "id": "floor_1_33",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-80, -39, -25.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_1_34"

                },
                {
                    "position": [-100, -139, 280.5],
                    "arrowType": "arrowUp",
                    "scale": 29,
                    "fragmentId": "floor_1_35"

                },
                {
                    "position": [160, -80, 60.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_5"

                }
            ]
        },
        // fragment 50
        {
            "id": "floor_1_34",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-60, -30, 10.5],
                    "arrowType": "arrowUp",
                    "scale": 5,
                    "fragmentId": "floor_1_33"

                },
                {
                    "position": [-15, -115, -230.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_1_9"

                }
            ]
        },
        // fragment 51
        {
            "id": "floor_1_35",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-50, -26, 23.5],
                    "arrowType": "arrowUp",
                    "scale": 5,
                    "fragmentId": "floor_1_33"

                },
                {
                    "position": [-81, -120, -200.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_1_3"

                },
                {
                    "position": [150, -70, -52.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_1_31"

                },
                {
                    "position": [60, -89, 180.5],
                    "arrowType": "arrowUp",
                    "scale": 19,
                    "fragmentId": "floor_1_10"

                }
            ]
        },
        // fragment 52
        {
            "id": "floor_2_17",
            "description": "Музей історії університету",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-110, -110, 200.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_2_13"

                },
                {
                    "position": [100, -90, -185.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_2_18"

                }
            ]
        },
        // fragment 53
        {
            "id": "floor_2_18",
            "description": "222",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [50, -93, 200.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_2_9"

                },
                {
                    "position": [-150, -83, 35.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_2_10"

                },
                {
                    "position": [-40, -50, -130.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_2_17"

                }
            ]
        },
        // fragment 54
        {
            "id": "floor_2_19",
            "description": "Проректор з науково-педагогічної роботи",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -70, -200.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_2_26"

                },
                {
                    "position": [-62.5, -40, 105.5],
                    "arrowType": "arrowUp",
                    "scale": 9,
                    "fragmentId": "floor_2_9"

                }
            ]
        },
        // fragment 55
        {
            "id": "floor_2_20",
            "description": "216",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [0, -70, 150.5],
                    "arrowType": "arrowUp",
                    "scale": 10,
                    "fragmentId": "floor_2_12"

                },
                {
                    "position": [200, -90, 5.5],
                    "arrowType": "arrowUp",
                    "scale": 14,
                    "fragmentId": "floor_2_7"

                },
                {
                    "position": [8, -50, -100.5],
                    "arrowType": "arrowUp",
                    "scale": 7,
                    "fragmentId": "floor_2_15"

                }
            ]
        },
        // fragment 56
        {
            "id": "floor_2_21",
            "description": "Ректор",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-170, -93, 48.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_2_12"

                },
                {
                    "position": [80, -40, -30.5],
                    "arrowType": "arrowUp",
                    "scale": 7,
                    "fragmentId": "floor_2_22"

                }
            ]
        },
        // fragment 57
        {
            "id": "floor_2_22",
            "description": "Проректор з наукової роботи",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-190, -93, 45.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_2_21"

                },
                {
                    "position": [70, -30, -20.5],
                    "arrowType": "arrowUp",
                    "scale": 6,
                    "fragmentId": "floor_2_23"

                }
            ]
        },
        // fragment 58
        {
            "id": "floor_2_23",
            "description": "Проректор з науково-педагогічної роботи (ауд. 210)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [49, -80, -220.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_2_22"

                },
                {
                    "position": [-190, -100, -30.5],
                    "arrowType": "arrowRight",
                    "scale": 17,
                    "fragmentId": "floor_1_36"

                },
                {
                    "position": [-10, -80, -220.5],
                    "arrowType": "arrowLeft",
                    "scale": 20,
                    "fragmentId": "floor_2_25"

                },
                {
                    "position": [-80, -60, 90.5],
                    "arrowType": "arrowRight",
                    "scale": 18,
                    "fragmentId": "floor_2_24"

                }
            ]
        },
        // fragment 59
        {
            "id": "floor_2_24",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [145, -40, 180.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_2_23"

                }
            ]
        },
        // fragment 60
        {
            "id": "floor_2_25",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [160, -100, 120.5],
                    "arrowType": "arrowRight",
                    "scale": 17,
                    "fragmentId": "floor_2_23"

                },
                {
                    "position": [-200, -90, 60.5],
                    "arrowType": "arrowLeft",
                    "scale": 20,
                    "fragmentId": "floor_3_1"

                }
            ]
        },
        // fragment 61
        {
            "id": "floor_3_1",
            "description": "Аудиторія імені Івана Франка (ауд. 308)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-160, -70, -180.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_3_14"

                },
                {
                    "position": [-130, -100, 130.5],
                    "arrowType": "arrowRight",
                    "scale": 19,
                    "fragmentId": "floor_2_25"

                },
                {
                    "position": [150, -150, 130.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_3_15"

                }
            ]
        },
        // fragment 62
        {
            "id": "floor_3_2",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [40, -70, 200.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_3_16"

                },
                {
                    "position": [30, -140, -240.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_3_15"

                }
            ]
        },
        // fragment 63
        {
            "id": "floor_1_36",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-130, -80, 130.5],
                    "arrowType": "arrowLeft",
                    "scale": 25,
                    "fragmentId": "floor_2_23"

                },
                {
                    "position": [170, -90, 0.5],
                    "arrowType": "arrowRight",
                    "scale": 20,
                    "fragmentId": "floor_1_19"

                }
            ]
        },
        // fragment 
        {
            "id": "floor_1_37",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-150, -40, 22.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_1_27"

                },
                {
                    "position": [-5, -115, -250.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_11"

                }
            ]
        },
        // fragment 
        {
            "id": "floor_1_38",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-230, -100, -50.5],
                    "arrowType": "arrowRight",
                    "scale": 27,
                    "fragmentId": "floor_2_26"

                },
                {
                    "position": [170, -110, -115.5],
                    "arrowType": "arrowLeft",
                    "scale": 23,
                    "fragmentId": "floor_1_27"

                }
            ]
        },
        // fragment 66
        {
            "id": "floor_2_26",
            "description": "Студентський відділ",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-190, -50, -25.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_2_19"

                },
                {
                    "position": [-230, -80, -130.5],
                    "arrowType": "arrowRight",
                    "scale": 27,
                    "fragmentId": "floor_2_27"

                },
                {
                    "position": [170, -60, -52.5],
                    "arrowType": "arrowLeft",
                    "scale": 21,
                    "fragmentId": "floor_2_28"

                },
                {
                    "position": [40, -80, -180.5],
                    "arrowType": "arrowLeft",
                    "scale": 19,
                    "fragmentId": "floor_1_38"

                }
            ]
        },
        // fragment 67 
        {
            "id": "floor_2_27",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-80, -30, -40.5],
                    "arrowType": "arrowRight",
                    "scale": 10,
                    "fragmentId": "floor_3_3"

                },
                {
                    "position": [130, -100, -160.5],
                    "arrowType": "arrowLeft",
                    "scale": 23,
                    "fragmentId": "floor_2_26"

                }
            ]
        },
        // fragment 68
        {
            "id": "floor_3_3",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-190, -50, -25.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_3_13"

                },
                {
                    "position": [120, -100, 20.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_3_12"

                },
                {
                    "position": [30, -90, -180.5],
                    "arrowType": "arrowLeft",
                    "scale": 19,
                    "fragmentId": "floor_2_27"

                }
            ]
        },
        // fragment 69
        {
            "id": "floor_2_28",
            "description": "Студентський відділ",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [40, -150, 350.5],
                    "arrowType": "arrowUp",
                    "scale": 26,
                    "fragmentId": "floor_2_29"

                },
                {
                    "position": [80, -60, -90.5],
                    "arrowType": "arrowRight",
                    "scale": 13,
                    "fragmentId": "floor_2_26"

                }
            ]
        },
        // fragment 70
        {
            "id": "floor_2_29",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-180, -40, 30.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_2_30"

                },
                {
                    "position": [200, -40, -25.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "<floor_2_28></floor_2_28>"

                }
            ]
        },
        // fragment 71
        {
            "id": "floor_1_39",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -60, 230.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_1_40"

                },
                {
                    "position": [-100, -50, -250.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_14"

                }
            ]
        },
        // fragment 72
        {
            "id": "floor_1_40",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [230, -80, -95.5],
                    "arrowType": "arrowUp",
                    "scale": 19,
                    "fragmentId": "floor_1_39"

                },
                {
                    "position": [-208, -60, -60.5],
                    "arrowType": "arrowLeft",
                    "scale": 25,
                    "fragmentId": "floor_1_41"

                }
            ]
        },
        // fragment 73
        {
            "id": "floor_2_30",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-150, -40, 120.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_2_31"

                },
                {
                    "position": [200, -50, -155.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_2_29"

                }
            ]
        },
        // fragment 74
        {
            "id": "floor_2_31",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-30, -100, -230.5],
                    "arrowType": "arrowUp",
                    "scale": 19,
                    "fragmentId": "floor_2_30"

                },
                {
                    "position": [-130, -50, -60.5],
                    "arrowType": "arrowLeft",
                    "scale": 16,
                    "fragmentId": "floor_2_32"

                }
            ]
        },
        // fragment 75
        {
            "id": "floor_1_41",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-80, -43, 50.5],
                    "arrowType": "arrowRight",
                    "scale": 13,
                    "fragmentId": "floor_2_32"

                },
                {
                    "position": [5, -120, 195.5],
                    "arrowType": "arrowUp",
                    "scale": 19,
                    "fragmentId": "floor_1_40"

                }
            ]
        },
        // fragment 76
        {
            "id": "floor_2_32",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -120, -195.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_2_31"

                },
                {
                    "position": [190, -78, -90.5],
                    "arrowType": "arrowRight",
                    "scale": 24,
                    "fragmentId": "floor_3_4"

                },
                {
                    "position": [80, -50, 100.5],
                    "arrowType": "arrowLeft",
                    "scale": 17,
                    "fragmentId": "floor_1_41"

                }
            ]
        },
        // fragment 77
        {
            "id": "floor_3_4",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-150, -120, -120.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_3_5"

                },
                {
                    "position": [130, -70, -30.5],
                    "arrowType": "arrowLeft",
                    "scale": 19,
                    "fragmentId": "floor_2_32"

                }
            ]
        },
        // fragment 78
        {
            "id": "floor_3_5",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-240, -120, 0.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_3_6"

                },
                {
                    "position": [35, -80, 155.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_3_8"

                },
                {
                    "position": [100, -80, 50.5],
                    "arrowType": "arrowLeft",
                    "scale": 16,
                    "fragmentId": "floor_3_4"

                }
            ]
        },
        // fragment 79
        {
            "id": "floor_3_6",
            "description": "331",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [20, -70, -150.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_3_7"

                },
                {
                    "position": [-5, -70, 155.5],
                    "arrowType": "arrowUp",
                    "scale": 16,
                    "fragmentId": "floor_3_5"

                }
            ]
        },
        // fragment 80
        {
            "id": "floor_3_7",
            "description": "Інститут славістики",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [20, -50, 100.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_3_6"

                }
            ]
        },
        // fragment 81
        {
            "id": "floor_3_8",
            "description": "324",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -50, -50.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_3_5"

                },
                {
                    "position": [-110, -60, 50.5],
                    "arrowType": "arrowUp",
                    "scale": 13,
                    "fragmentId": "floor_3_9"

                }
            ]
        },
        // fragment 82
        {
            "id": "floor_3_9",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -50, 60.5],
                    "arrowType": "arrowUp",
                    "scale": 11,
                    "fragmentId": "floor_3_12"

                },
                {
                    "position": [70, -70, -150.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_3_10"

                },
                {
                    "position": [-220, -110, -70.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_3_8"

                }
            ]
        },
        // fragment 83
        {
            "id": "floor_3_10",
            "description": "340",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-17, -20, 60.5],
                    "arrowType": "arrowUp",
                    "scale": 7,
                    "fragmentId": "floor_3_9"

                },
                {
                    "position": [45, -70, -150.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_3_11"

                }
            ]
        },
        // fragment 84
        {
            "id": "floor_3_11",
            "description": "Науково дослідна частина",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-5, -20, 60.5],
                    "arrowType": "arrowUp",
                    "scale": 7,
                    "fragmentId": "floor_3_10"

                }
            ]
        },
        // fragment 85
        {
            "id": "floor_3_12",
            "description": "318, 319, 320",
            "transitions": [
                // transition - опи3с кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-100, -50, 60.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_3_9"

                },
                {
                    "position": [50, -90, 90.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_3_3"

                }
            ]
        },
        // fragment 86
        {
            "id": "floor_3_13",
            "description": "315",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-50, -80, -160.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_3_3"

                },
                {
                    "position": [50, -60, 90.5],
                    "arrowType": "arrowUp",
                    "scale": 11,
                    "fragmentId": "floor_3_14"

                }
            ]
        },
        // fragment 87
        {
            "id": "floor_3_14",
            "description": "311",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -60, -130.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_3_13"

                },
                {
                    "position": [-150, -10, -10.5],
                    "arrowType": "arrowLeft",
                    "scale": 25,
                    "fragmentId": "floor_3_1"

                }
            ]
        },
        // fragment 88
        {
            "id": "floor_3_15",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [0, -70, -130.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_3_2"

                },
                {
                    "position": [80, -65, 7.5],
                    "arrowType": "arrowUp",
                    "scale": 12,
                    "fragmentId": "floor_3_1"

                }
            ]
        },
        // fragment 89
        {
            "id": "floor_3_16",
            "description": "Інститут фанкознавства",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-50, -70, -130.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_3_2"

                },
                {
                    "position": [60, -40, -23.5],
                    "arrowType": "arrowUp",
                    "scale": 9,
                    "fragmentId": "floor_3_17"

                }
            ]
        },
        // fragment 90
        {
            "id": "floor_3_17",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-150, -70, -100.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_3_16"

                },
                {
                    "position": [100, -60, 80.5],
                    "arrowType": "arrowUp",
                    "scale": 11,
                    "fragmentId": "floor_3_28"

                }
            ]
        },
        // fragment 91
        {
            "id": "floor_3_18",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-100, -60, 50.5],
                    "arrowType": "arrowUp",
                    "scale": 14,
                    "fragmentId": "floor_3_27"
                },
                { 
                    "position":[60, -20, -23.5],
                    "arrowType": "arrowUp",
                    "scale": 7,
                    "fragmentId": "floor_3_28"

                },
                { 
                    "position":[-10, -80, -130.5],
                    "arrowType": "arrowLeft",
                    "scale": 16,
                    "fragmentId": "floor_3_22"

                }
            ]
        },
        // fragment 92
        {
            "id": "floor_3_19",
            "description": "Кафедра дискретного аналізу та інтелектуальних систем (ауд. 360)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                { 
                    "position":[140, -130, -150.5],
                    "arrowType": "arrowLeft",
                    "scale": 25,
                    "fragmentId": "floor_2_33"

                },
                { 
                    "position":[65, -30, 80.5],
                    "arrowType": "arrowLeft",
                    "scale": 14,
                    "fragmentId": "floor_3_30"

                }
            ]
        },
        // fragment 93
        {
            "id": "floor_2_33",
            "description": "Кафедра прикладної математики (ауд. 278)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [0, -30, -90.5],
                    "arrowType": "arrowRight",
                    "scale": 12,
                    "fragmentId": "floor_3_19"

                },
                {
                    "position": [240, -170, -110.5],
                    "arrowType": "arrowLeft",
                    "scale": 34,
                    "fragmentId": "floor_2_34"

                }

            ]
        },
        // fragment 94
        {
            "id": "floor_2_34",
            "description": "Кафедра інформаційних систем (ауд. 260)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-100, -30, 30.5],
                    "arrowType": "arrowRight",
                    "scale": 12,
                    "fragmentId": "floor_2_33"

                },
                {
                    "position": [-170, -170, -190.5],
                    "arrowType": "arrowLeft",
                    "scale": 34,
                    "fragmentId": "floor_1_42"

                }
            ]
        },
        // fragment 95
        {
            "id": "floor_1_42",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-120, 0, 0.5],
                    "arrowType": "arrowRight",
                    "scale": 12,
                    "fragmentId": "floor_1_43"

                },
                {
                    "position": [50, -50, -190.5],
                    "arrowType": "arrowLeft",
                    "scale": 25,
                    "fragmentId": "floor_1_44"

                },
                {
                    "position": [-100, -30, 180.5],
                    "arrowType": "arrowLeft",
                    "scale": 20,
                    "fragmentId": "floor_2_34"

                }
            ]
        },
        // fragment 96
        {
            "id": "floor_1_43",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-70, -100, -150.5],
                    "arrowType": "arrowUp",
                    "scale": 17,
                    "fragmentId": "floor_1_42"

                }
            ]
        },
        // fragment 97
        {
            "id": "floor_1_44",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-200, -80, 60.5],
                    "arrowType": "arrowUp",
                    "scale": 22,
                    "fragmentId": "floor_1_42"

                },
                {
                    "position": [50, -20, -190.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_1_45"

                }

            ]
        },
        // fragment 98
        {
            "id": "floor_1_45",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-180, -30, 60.5],
                    "arrowType": "arrowRight",
                    "scale": 25,
                    "fragmentId": "floor_1_42"

                },
                {
                    "position": [170, -20, -190.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_1_46"

                }
            ]
        },
        // fragment 99
        {
            "id": "floor_1_46",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-40, -70, -160.5],
                    "arrowType": "arrowRight",
                    "scale": 20,
                    "fragmentId": "floor_1_45"

                },
                {
                    "position": [250, -20, -190.5],
                    "arrowType": "arrowLeft",
                    "scale": 45,
                    "fragmentId": "floor_2_41"

                }
            ]
        },
        // fragment 100
        {
            "id": "floor_2_35",
            "description": "Навчальна лабораторія кафедри програмування (ауд. 264)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [280, -180, 30.5],
                    "arrowType": "arrowUp",
                    "scale": 30,
                    "fragmentId": "floor_2_41"

                },
                {
                    "position": [-280, -180, 70.5],
                    "arrowType": "arrowUp",
                    "scale": 30,
                    "fragmentId": "floor_2_36"

                }
            ]
        },
        // fragment 101
        {
            "id": "floor_2_36",
            "description": "Кафедра диференціальних рівнянь (ауд. 267)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-100, -130, 150.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_2_35"

                },
                {
                    "position": [30, -100, -240.5],
                    "arrowType": "arrowLeft",
                    "scale": 35,
                    "fragmentId": "floor_2_11"

                }
            ]
        },
        // fragment 102
        {
            "id": "floor_3_20",
            "description": "ауд. 372",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-110, -100, 170.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_3_21"

                }
            ]
        },
        // fragment 103
        {
            "id": "floor_3_21",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-60, -50, 170.5],
                    "arrowType": "arrowRight",
                    "scale": 25,
                    "fragmentId": "floor_3_22"

                },
                {
                    "position": [150, -100, 170.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_3_20"

                },
                {
                    "position": [-110, -100, -170.5],
                    "arrowType": "arrowUp",
                    "scale": 25,
                    "fragmentId": "floor_3_23"

                }
            ]
        },
        // fragment 104
        {
            "id": "floor_3_22",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-250, -130, 20.5],
                    "arrowType": "arrowLeft",
                    "scale": 35,
                    "fragmentId": "floor_3_21"

                },
                {
                    "position": [250, -60, -20.5],
                    "arrowType": "arrowRight",
                    "scale": 35,
                    "fragmentId": "floor_3_18"

                }
            ]
        },
        // fragment 105
        {
            "id": "floor_3_23",
            "description": "Кафедра алгебри і логіки (ауд. 305)",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-100, -80, 120.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_3_21"

                },
                {
                    "position": [-100, -80, -135.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_3_24"

                }
            ]
        },
        // fragment 106
        {
            "id": "floor_2_37",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-180, -160, -135.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_2_11"

                },
                {
                    "position": [100, -45, 170.5],
                    "arrowType": "arrowRight",
                    "scale": 30,
                    "fragmentId": "floor_3_24"

                }
            ]
        },
        // fragment 107
        {
            "id": "floor_2_38",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [150, -80, 170.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_2_40"

                }
            ]
        },
            // fragment 108
        {
            "id": "floor_2_39",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [150, 10, 100.5],
                    "arrowType": "arrowLeft",
                    "scale": 30,
                    "fragmentId": "floor_3_32"

                },
                {
                    "position": [100, -80, -100.5],
                    "arrowType": "arrowRight",
                    "scale": 20,
                    "fragmentId": "floor_2_40"

                },
            ]
        },
            // fragment 109
        {
            "id": "floor_3_24",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-50, -30, 40.5],
                    "arrowType": "arrowLeft",
                    "scale": 10,
                    "fragmentId": "floor_2_37"

                },
                {
                    "position": [-150, -80, -60.5],
                    "arrowType": "arrowUp",
                    "scale": 22,
                    "fragmentId": "floor_3_25"

                },
                {
                    "position": [250, -130, 110.5],
                    "arrowType": "arrowUp",
                    "scale": 30,
                    "fragmentId": "floor_3_23"

                }
            ]
        },
            // fragment 110
        {
            "id": "floor_3_25",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [100, -100, 160.5],
                    "arrowType": "arrowUp",
                    "scale": 23,
                    "fragmentId": "floor_3_26"

                },
                {
                    "position": [130, -80, -70.5],
                    "arrowType": "arrowUp",
                    "scale": 18,
                    "fragmentId": "floor_3_24"

                }
            ]
        },
            // fragment 111
        {
            "id": "floor_3_26",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [190, -100, -10.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_3_25"

                }
            ]
        },
            // fragment 112
        {
            "id": "floor_3_27",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [63, -80, 150.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_3_18"

                }
            ]
        },
            // fragment 113
        {
            "id": "floor_3_28",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [63, -80, 150.5],
                    "arrowType": "arrowUp",
                    "scale": 21,
                    "fragmentId": "floor_3_18"

                },
                {
                    "position": [-45, -40, -100.5],
                    "arrowType": "arrowUp",
                    "scale": 13,
                    "fragmentId": "floor_3_17"

                },
                {
                    "position": [-45, -20, 17.5],
                    "arrowType": "arrowUp",
                    "scale": 6,
                    "fragmentId": "floor_3_29"

                }
            ]
        },
            // fragment 114
        {
            "id": "floor_3_29",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-45, -20, 20.5],
                    "arrowType": "arrowUp",
                    "scale": 6,
                    "fragmentId": "floor_3_28"

                },
                {
                    "position": [150, -80, -50.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_3_30"

                }
            ]
        },
            // fragment 115
        {
            "id": "floor_3_30",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [150, -80, -40.5],
                    "arrowType": "arrowUp",
                    "scale": 20,
                    "fragmentId": "floor_3_31"

                },
                {
                    "position": [-45, -20, -20.5],
                    "arrowType": "arrowLeft",
                    "scale": 10,
                    "fragmentId": "floor_3_19"

                },
                {
                    "position": [10, -20, -120.5],
                    "arrowType": "arrowLeft",
                    "scale": 20,
                    "fragmentId": "floor_3_29"

                }
            ]
        },
            // fragment 116
        {
            "id": "floor_3_31",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-70, -40, -22.5],
                    "arrowType": "arrowUp",
                    "scale": 10,
                    "fragmentId": "floor_3_30"

                },
                {
                    "position": [5, -30, 120.5],
                    "arrowType": "arrowRight",
                    "scale": 20,
                    "fragmentId": "floor_3_32"

                }
            ]
        },    // fragment 117
        {
            "id": "floor_3_32",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [50, -30, 80.5],
                    "arrowType": "arrowLeft",
                    "scale": 15,
                    "fragmentId": "floor_3_31"

                },
                {
                    "position": [50, -30, -60.5],
                    "arrowType": "arrowLeft",
                    "scale": 15,
                    "fragmentId": "floor_2_39"

                }
            ]
        },
            // fragment 118
        {
            "id": "floor_2_40",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [-50, -50, -60.5],
                    "arrowType": "arrowRight",
                    "scale": 10,
                    "fragmentId": "floor_2_41"

                },
                {
                    "position": [50, -20, -120.5],
                    "arrowType": "arrowLeft",
                    "scale": 17,
                    "fragmentId": "floor_2_39"

                },
                {
                    "position": [-20, -110, 150.5],
                    "arrowType": "arrowRight",
                    "scale": 30,
                    "fragmentId": "floor_2_38"

                }
            ]
        },
            // fragment 119
        {
            "id": "floor_2_41",
            "description": "",
            "transitions": [
                // transition - опис кнопки на фотці. Її координати та id фотки, на яку вона перекидує
                {
                    "position": [65, -70, 100.5],
                    "arrowType": "arrowUp",
                    "scale": 15,
                    "fragmentId": "floor_2_35"

                },
                {
                    "position": [65, -50, -60.5],
                    "arrowType": "arrowUp",
                    "scale": 8,
                    "fragmentId": "floor_1_46"

                },
                {
                    "position": [65, -25, -20.5],
                    "arrowType": "arrowLeft",
                    "scale": 10,
                    "fragmentId": "floor_2_40"

                }
            ]
        },
    ]
};
