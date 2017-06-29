cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.jda.captuvo.CaptuvoCDV",
        "file": "plugins/com.jda.captuvo/www/CaptuvoCDV.js",
        "pluginId": "com.jda.captuvo",
        "clobbers": [
            "captuvo"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "dff-cordova-plugin-common.common",
        "file": "plugins/dff-cordova-plugin-common/www/common.js",
        "pluginId": "dff-cordova-plugin-common",
        "clobbers": [
            "CommonPlugin"
        ]
    },
    {
        "id": "dff-cordova-plugin-honeywell.honeywell",
        "file": "plugins/dff-cordova-plugin-honeywell/www/honeywell.js",
        "pluginId": "dff-cordova-plugin-honeywell",
        "clobbers": [
            "Honeywell"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.jda.captuvo": "1.0.0",
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "dff-cordova-plugin-common": "1.2.0",
    "dff-cordova-plugin-honeywell": "0.0.1"
};
// BOTTOM OF METADATA
});