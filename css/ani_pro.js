import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "thisRotate": {
        "WebkitAnimation": "thisRotate 8s linear infinite"
    },
    "ThisScale": {
        "WebkitAnimation": "ThisScale 1s 1s ease-out infinite alternate"
    },
    "ThisScale2": {
        "WebkitAnimation": "ThisScale2 1s 1s ease-out infinite alternate"
    },
    "ThisOpaticy4": {
        "WebkitAnimation": "ThisOpaticy 4s infinite"
    },
    "ThisOpaticy3": {
        "WebkitAnimation": "ThisOpaticy2 4s infinite"
    },
    "ThisOpaticy2": {
        "WebkitAnimation": "ThisOpaticy3 4s infinite"
    },
    "ThisOpaticy1": {
        "WebkitAnimation": "ThisOpaticy4 4s infinite"
    },
    "page1_book_div_pre": {
        "position": "absolute",
        "width": "70%",
        "top": "8.5%",
        "height": "16%",
        "left": "15%",
        "overflow": "hidden"
    },
    "shineflash": {
        "position": "absolute",
        "width": 10,
        "height": "200%",
        "top": "-50%",
        "backgroundColor": "rgba(255,255,255,.2)",
        "WebkitTransform": "rotate(45deg)",
        "MozTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "OTransform": "rotate(45deg)",
        "transform": "rotate(45deg)",
        "WebkitAnimation": "searchLights 1s ease-in 1s infinite",
        "OAnimation": "searchLights 1s ease-in 1s infinite",
        "animation": "searchLights 1s ease-in 1s infinite"
    }
});