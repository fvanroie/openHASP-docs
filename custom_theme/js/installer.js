// MIT License

// Copyright (c) 2021 Christian Schwinne

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


function handleStateEvent(ev) {
    var obj = ev.detail;
    //console.log(obj);
    var s = obj.state;
    if (s == "writing") {
        //progress
        var i = obj.details.percentage;
        document.getElementById('state').textContent = "Writing...";
        document.getElementById('progress').textContent = i + "%";
        document.getElementById('extra').textContent = `${(obj.details.bytesWritten / 1000).toFixed(1)} / ${(obj.details.bytesTotal / 1000).toFixed(1)} kB`
            //bar
        var a = (i < 50) ? 1.0 : 1.0 - (i - 50) * 0.02;
        document.getElementById('bar-inner').style.transform = `translate(-${(100 - i) / 2}%,-10%)`
        document.getElementById('bar-inner').style.background = `linear-gradient(to right, rgba(255,255,255,${a}) 50%, #444 50%)`;
    } else {
        document.getElementById('state').textContent = obj.message;

        //env
        var manifestName = obj.manifest ? obj.manifest.name : "";
        var chipFamily = obj.chipFamily;
        var env = "";
        if (manifestName) {
            env = obj.manifest.name;
            if (chipFamily) env += " - "
        }
        if (chipFamily) env += obj.chipFamily;
        if (env == "") env = "&nbsp;";
        document.getElementById('env').innerHTML = env;

        //hide button and show log
        if (s == "initializing") {
            document.getElementsByClassName('inst-button')[0].style.display = "none";
            document.getElementsByClassName('log')[0].style.display = "block";
        } else if (s == "finished") {
            document.getElementById('reset-button').style.display = "block";
        } else if (s == "error") {
            document.getElementById('state').textContent = "Error!";
            document.getElementById('extra').textContent = obj.message;
            document.getElementById('reset-button').style.display = "block";
            if (!obj.chipFamily) document.getElementById('env').textContent = "";
        }
    }
}



function toggleErase() {
    if (document.getElementById('erase').checked) {
        document.getElementById('inst').setAttribute('erase-first', '');
    } else {
        document.getElementById('inst').removeAttribute('erase-first');
    }
}

function reset() {
    document.getElementById('bar-inner').style.transform = `translate(-50%,-10%)`
    document.getElementById('bar-inner').style.background = `linear-gradient(to right, rgba(255,255,255,1.0) 50%, #444 50%)`;
    document.getElementById('progress').textContent = "";
    document.getElementById('extra').textContent = "";
    document.getElementsByClassName('inst-button')[0].style.display = "block";
    document.getElementsByClassName('log')[0].style.display = "none";
    document.getElementById('reset-button').style.display = "none";
}

function checkSupported() {
    if (document.getElementById('inst') && document.getElementById('inst').hasAttribute('install-unsupported')) unsupported();
}

function unsupported() {
    if (document.getElementById('flasher')) document.getElementById('flasher').innerHTML = "Sorry, your browser is not yet supported... Please try on Desktop Chrome or Edge."
}

function showSerialHelp() {
    if (document.getElementById('coms')) document.getElementById('coms').innerHTML = `Click "Install Firmware" and select the correct COM port.<br><br>
You might be missing the drivers for your board.<br>
Here are drivers for chips commonly used in ESP boards:<br>
<a href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers" target="_blank">CP2102 (square chip)</a><br>
<a href="https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers" target="_blank">CH34x (rectangular chip)</a><br><br>
Make sure your USB cable supports data transfer.<br><br>
`;
}

function installerLoaded() {
    const espWebInstallButtonList = document.querySelectorAll("esp-web-install-button");
    espWebInstallButtonList.forEach(function(espWebInstallButton) {
        espWebInstallButton.addEventListener("state-changed", handleStateEvent);
    });
    checkSupported();
}

function setManifest() {
    var sel = document.getElementById('ver');
    var m = sel.options[sel.selectedIndex].dataset.manifest;
    document.getElementById('inst').setAttribute('manifest', m);
}

$(document).ready(function() {
    installerLoaded();
    reset();
});