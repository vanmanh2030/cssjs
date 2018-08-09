var popup_toomarketer_parent = true;
document.addEventListener('DOMContentLoaded', function () {
    if (popup_toomarketer_parent) {
        var popup_loadScriptTime = (new Date).getTime();

        popup_toomarketer_loadjscssfile("https://forms.toomarketer.com/Scripts/Webform-Popup-core.js?rf=" + popup_loadScriptTime, function () {
            toomarketer_parent_popup_process();
        });

        popup_toomarketer_parent = false;
    }
});

function popup_toomarketer_loadjscssfile(url, callback) {
    var script = document.createElement("script")
    script.setAttribute("type", "text/javascript")
    script.setAttribute("src", url)
    //script.setAttribute("id", "script-webpopup-toomarketer")
    //script.setAttribute("class", "script-webpopup-toomarketer")
    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}











