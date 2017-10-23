import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "html": {
        "height": "100%",
        "fontSize": "62.5%",
        "WebkitTapHighlightColor": "transparent"
    },
    "body": {
        "height": "100%",
        "fontSize": "62.5%",
        "WebkitTapHighlightColor": "transparent",
        "fontFamily": "microsoft yahei",
        "background": "#fff",
        "position": "relative"
    },
    "ul": {
        "listStyle": "none"
    },
    "li": {
        "listStyle": "none"
    },
    "a": {
        "textDecoration": "none",
        "outLine": "none",
        "color": "#333333",
        "opacity": 0
    },
    "swiper-container": {
        "width": "100%",
        "maxWidth": 640,
        "height": "100%",
        "backgroundColor": "#000"
    },
    "p": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "swiper-slide-v1": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v2": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "img": {
        "display": "block"
    },
    "swiper-pagination-bullet": {
        "width": 6,
        "height": 6,
        "background": "#fff",
        "opacity": 0.4
    },
    "swiper-pagination-bullet-active": {
        "opacity": 1
    },
    "arrow-box": {
        "position": "absolute",
        "bottom": -26,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "50%",
        "height": 90,
        "zIndex": 20
    },
    "array": {
        "zIndex": 99,
        "WebkitAnimation": "start 1.5s infinite ease-in-out",
        "display": "block",
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 32,
        "height": 30
    },
    "top-box": {
        "position": "absolute",
        "top": -45,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "50%",
        "height": 90,
        "zIndex": 900,
        "transform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "MozTransform": "rotate(180deg)",
        "WebkitTransform": "rotate(180deg)",
        "OTransform": "rotate(180deg)"
    },
    "arraytop": {
        "zIndex": 999,
        "WebkitAnimation": "start 1.5s infinite ease-in-out",
        "display": "block",
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 20,
        "height": 15
    },
    "hide": {
        "display": "none"
    },
    "hideOpacity": {
        "opacity": 0
    },
    "showOpacity": {
        "opacity": 1
    },
    "loading": {
        "WebkitAnimationName": "loading",
        "animationName": "loading"
    },
    "poster_wrapload": {
        "height": "100%",
        "zIndex": 100,
        "backgroundSize": "100%"
    },
    "poster_wrap": {
        "WebkitTransform": "translate3d(0,0,0)",
        "WebkitTransition": "-webkit-transform .3s linear,opacity .3s linear"
    },
    "p_loading": {
        "position": "absolute",
        "top": -40,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": "100%",
        "height": 150
    },
    "p_loading_logo": {
        "display": "block",
        "width": 100,
        "height": 100,
        "background": "url(../images/zp_loading_new.png) center top no-repeat",
        "backgroundSize": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "WebkitAnimation": "loading 3s linear infinite",
        "animation": "loading 3s linear infinite"
    },
    "p_loading_tip": {
        "color": "#ccc",
        "fontSize": 15,
        "textAlign": "center",
        "lineHeight": 25,
        "marginTop": 25,
        "textShadow": "1px 1px 1px rgba(0,0,0,.1)"
    },
    "pageContainer": {
        "width": "100%",
        "height": "100%",
        "position": "relative"
    },
    "pagelogo": {
        "marginTop": "6%",
        "width": "54%",
        "height": "auto",
        "marginLeft": "23%"
    },
    "page1_book_div": {
        "width": "84%",
        "marginTop": "5%",
        "height": "auto",
        "marginLeft": "8%",
        "background": "url(../images/1/book_bg.png) center top no-repeat",
        "backgroundSize": "100% 100%"
    },
    "page1_book": {
        "width": "46%",
        "marginLeft": "27%",
        "height": "auto",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "page1_center_text_div": {
        "marginTop": "3%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "textAlign": "center",
        "fontSize": 1.8,
        "lineHeight": 2.4,
        "letterSpacing": 0.2
    },
    "page1_active_title_div": {
        "position": "relative",
        "marginTop": "3%",
        "fontSize": 1.8,
        "lineHeight": 1.8,
        "textAlign": "center",
        "height": 3.4,
        "background": "url(../images/1/line_center.png) center no-repeat",
        "backgroundSize": "54% 100%"
    },
    "page1_text_active": {
        "paddingTop": 0.8
    },
    "page1_line1": {
        "position": "absolute",
        "width": "3%",
        "height": 1.9,
        "left": "14.5%",
        "top": "0%"
    },
    "page1_line2": {
        "position": "absolute",
        "width": "3.2%",
        "height": 1.9,
        "left": "16%",
        "top": "0%"
    },
    "page1_line3": {
        "position": "absolute",
        "width": "3.4%",
        "height": 1.9,
        "left": "18%",
        "top": "0%"
    },
    "page1_line4": {
        "position": "absolute",
        "width": "4.2%",
        "height": 1.9,
        "left": "20%",
        "top": "0%"
    },
    "page1_line5": {
        "position": "absolute",
        "width": "4.2%",
        "height": 1.9,
        "left": "76%",
        "top": "0%"
    },
    "page1_line6": {
        "position": "absolute",
        "width": "3.4%",
        "height": 1.9,
        "left": "78.8%",
        "top": "0%"
    },
    "page1_line7": {
        "position": "absolute",
        "width": "3.2%",
        "height": 1.9,
        "left": "81%",
        "top": "0%"
    },
    "page1_line8": {
        "position": "absolute",
        "width": "3%",
        "height": 1.9,
        "left": "82.5%",
        "top": "0%"
    },
    "page1_bottom_text_div": {
        "marginLeft": "13%",
        "width": "74%",
        "paddingTop": 1.8,
        "paddingBottom": 1,
        "height": "auto",
        "marginTop": -0.4,
        "fontSize": 1.2,
        "lineHeight": 1.2,
        "background": "url(../images/1/bottom_text_bg.png) center no-repeat",
        "backgroundSize": "100% 100%"
    },
    "page1_time_icon_div": {
        "marginLeft": "5%",
        "background": "url(../images/1/time_icon.png)  no-repeat",
        "backgroundSize": "2rem 2rem",
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": "10%",
        "textAlign": "left"
    },
    "page1_file_icon_div": {
        "marginLeft": "5%",
        "marginTop": 0.8,
        "background": "url(../images/1/file_icon.png)  no-repeat",
        "backgroundSize": "1.6rem 2rem",
        "lineHeight": 1.8,
        "paddingTop": 0.2,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": "10%",
        "textAlign": "left"
    },
    "page1_address_icon_div": {
        "marginLeft": "5%",
        "background": "url(../images/1/address_icon.png)  no-repeat",
        "backgroundSize": "1.6rem 2rem",
        "lineHeight": 1.8,
        "paddingTop": 0.2,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": "10%",
        "textAlign": "left"
    },
    "page1_timenoise_icon_div": {
        "marginLeft": "5%",
        "background": "url(../images/1/time_noise_icon.png)  no-repeat",
        "backgroundSize": "1.6rem 2rem",
        "lineHeight": 1.8,
        "paddingTop": 0.2,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": "10%",
        "textAlign": "left"
    },
    "page1_pick_btn": {
        "width": "40%",
        "marginLeft": "30%",
        "height": "auto",
        "marginTop": "4%",
        "background": "url(../images/1/pick_bg.png)  no-repeat",
        "backgroundSize": "100% 100%"
    },
    "pick_size": {
        "paddingTop": 0.6,
        "paddingRight": 0.6,
        "paddingBottom": 0.6,
        "paddingLeft": 0.6,
        "color": "#fff",
        "fontSize": 1.8,
        "textAlign": "center"
    },
    "layerdiv": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "backgroundColor": "rgba(0,0,0,0.8)",
        "height": "100%",
        "width": "100%"
    },
    "qrCode_div": {
        "position": "relative",
        "width": "84%",
        "height": "38%",
        "marginLeft": "8%",
        "marginTop": "40%",
        "opacity": 1,
        "background": "url(../images/2/layer_content_bg.png)  no-repeat",
        "backgroundSize": "100% 100%"
    },
    "layer_close": {
        "position": "absolute",
        "height": 3,
        "width": 3,
        "right": -1.5,
        "top": -1.5
    },
    "qr_content_div": {
        "position": "absolute",
        "width": "100%",
        "top": "12%"
    },
    "qrCode_img_div": {
        "position": "relative",
        "width": "46%",
        "marginLeft": "27%",
        "height": "100%"
    },
    "qrCode": {
        "width": "100%",
        "height": "100%"
    },
    "qrCode_close": {
        "position": "absolute",
        "top": -1,
        "right": -1,
        "width": 2,
        "height": 2
    },
    "qr_text": {
        "fontSize": 1.2,
        "lineHeight": 2,
        "textAlign": "center"
    },
    "qr_text_margin": {
        "marginTop": "2%"
    },
    "layer_help_btn": {
        "position": "absolute",
        "top": "22%",
        "height": "auto",
        "width": "62%",
        "left": "19%",
        "background": "url(../images/1/pick_bg.png)  no-repeat",
        "backgroundSize": "100% 100%"
    },
    "layer_want_btn": {
        "position": "absolute",
        "top": "50%",
        "height": "auto",
        "width": "62%",
        "left": "19%",
        "background": "url(../images/1/pick_bg.png)  no-repeat",
        "backgroundSize": "100% 100%"
    },
    "layer_help_btn_size": {
        "paddingTop": 0.8,
        "paddingRight": 0.8,
        "paddingBottom": 0.8,
        "paddingLeft": 0.8,
        "color": "#fff",
        "fontSize": 2,
        "textAlign": "center",
        "letterSpacing": 0.1
    },
    "page2_icons_div": {
        "position": "relative",
        "marginTop": "16%",
        "height": 24,
        "width": "100%"
    },
    "page2_book_div": {
        "position": "absolute",
        "width": "29%",
        "height": "auto",
        "marginLeft": "5%"
    },
    "page2_icon2_div": {
        "position": "absolute",
        "width": "29%",
        "height": "auto",
        "marginLeft": "35%"
    },
    "page2_icon3_div": {
        "position": "absolute",
        "width": "29%",
        "height": "auto",
        "marginLeft": "65%"
    },
    "page2_icon4_div": {
        "position": "absolute",
        "width": "29%",
        "height": "auto",
        "marginLeft": "20%",
        "top": "45%"
    },
    "page2_icon5_div": {
        "position": "absolute",
        "width": "29%",
        "height": "auto",
        "marginLeft": "51%",
        "top": "45%"
    },
    "page2_icon_bg": {
        "width": "100%",
        "height": "auto"
    },
    "page2_book_circle": {
        "position": "absolute",
        "top": "14%",
        "left": "14%",
        "width": "72%",
        "height": "auto"
    },
    "page2_icon2": {
        "position": "absolute",
        "top": "28%",
        "left": "28%",
        "width": "44%",
        "height": "auto"
    },
    "page2_icon3": {
        "position": "absolute",
        "top": "33%",
        "left": "33%",
        "width": "34%",
        "height": "auto"
    },
    "page2_icon4": {
        "position": "absolute",
        "top": "44%",
        "left": "26%",
        "width": "48%",
        "height": "auto"
    },
    "page2_icon5": {
        "position": "absolute",
        "top": "38%",
        "left": "33%",
        "width": "34%",
        "height": "auto"
    },
    "page2_book": {
        "position": "absolute",
        "top": "3%",
        "left": "3%",
        "width": "95%",
        "height": "auto"
    },
    "page2_text_margin": {
        "marginTop": "3%"
    },
    "page2_text": {
        "fontSize": 1.8,
        "lineHeight": 2.6,
        "textAlign": "center",
        "letterSpacing": 0.1
    },
    "page2_share_btn": {
        "width": "40%",
        "marginLeft": "30%",
        "height": "auto",
        "marginTop": "13%",
        "background": "url(../images/1/pick_bg.png)  no-repeat",
        "backgroundSize": "100% 100%"
    },
    "share_icon": {
        "position": "absolute",
        "height": 8,
        "width": 9,
        "top": 1,
        "right": 1
    },
    "share_layer_text": {
        "position": "absolute",
        "top": 8,
        "right": 11,
        "textAlign": "center",
        "fontSize": 1.5,
        "color": "#fff"
    }
});