# Flash ESP32

## Download the firmware

Go to the [releases](https://github.com/HASwitchPlate/openHASP/releases/v0.6.0) page on GitHub to download the latest openHASP binaries.

Get the *full* binary file for your ESP32 device: *e.g.* d1-mini-esp32_ili9341_full_4MB_v0.6.0.bin

!!! note
    You can also download the *nightly* openHASP firmware.zip file from the [Actions tab](https://github.com/HASwitchPlate/openHASP/actions) on Github.


## Flash ESP32

!!! important
    When flashing openHASP onto the ESP32 for the first time, you need to flash it over serial using the **full** firmware binary file.
    You need to write the full binary to the ESP32 flash chip at address `0x0`.

    The full binary also contains a bootloader and partition scheme needed to properly boot the ESP32.

Before starting the flash process you have to put the ESP into *flash mode*:

1. Connect `GPIO0` to `GND` before booting the devide
2. Power-on or reset the ESP while `GPIO0` is connected to `GND`
3. Start the flash process

The actual procedure to flash the ESP32 depends on the tool used. Click on the tab below that matches your flash tool:

=== "ESPtool.py :material-linux::material-apple::material-microsoft-windows:"
    ```shell
    esptool.py --port COM1 erase_flash
    esptool.py --port COM1 --baud 921600 write_flash 0x0 d1-mini-esp32_ili9341_full_4MB_<version>.bin
    ```

    Change `COM1` to the correct port on your computer. If you get an error at the end of the flash procedure, you can try with a lower the baudrate eg. 460800.

=== "Tasmota-PyFlasher :material-microsoft-windows:"
    [Tasmota-PyFlasher](https://github.com/tasmota/tasmota-pyflasher/releases/tag/1.0) is a simple GUI tool for flashing ESP32 firmware wihout any installation.

    ![Tasmota-PyFlasher](../../assets/images/esp32-pyflasher.png)

    Change `COM7` to the correct port on your computer.

=== "ESP Flash Tools :material-microsoft-windows:"
    Espressif provides their own [Flash Download Tools](https://www.espressif.com/en/support/download/other-tools) for Windows.

    ![Flash Download Tools](../../assets/images/esp32-espressif-flash.png)

    Change `COM90` to the correct port on your computer.

=== "Web Browser :material-google-chrome: :material-microsoft-edge:"
    <div id="flasher">
        The web browser can install openHASP directly onto your device: 
        <ol>
            <li>Plug in your ESP32 to a USB port.</li>
            <li id="coms">Click "Install Firmware" and select the correct COM port. <a onclick="showSerialHelp()">No device found?</a>
            </li>
            <li>Wait a while, the process is a lot faster if you stay on this tab!</li>
        </ol>
        <!-- add new builds here -->
        <p>Choose a device:
        <select id="ver" class="install-menu" onchange="setManifest()">
            <option value="1" data-manifest="../../assets/json/d1-mini-esp32_ili9341_full_4MB_v0.6.0.json" hide-progress erase-first>d1-mini ESP32 TFT Touch Shield (4MB) v0.6.0</option>
            <option value="2" data-manifest="../../assets/json/esp32-touchdown_full_4MB_v0.6.0.json" hide-progress erase-first>ESP32 TouchDown v0.6.0</option>
            <option value="3" data-manifest="../../assets/json/freetouchdeck_full_4MB_v0.6.0.json" hide-progress erase-first>FreeTouchDeck v0.6.0</option>
            <option value="4" data-manifest="../../assets/json/huzzah32-featherwing-24_full_4MB_v0.6.0.json" hide-progress erase-first>Huzzah32 Featherwing 2.4&quot; v0.6.0</option>
            <option value="5" data-manifest="../../assets/json/huzzah32-featherwing-35_full_4MB_v0.6.0.json" hide-progress erase-first>Huzzah32 Featherwing 3.5&quot; v0.6.0</option>
            <option value="6" data-manifest="../../assets/json/lanbon_l8_full_8MB_v0.6.0.json" hide-progress erase-first>Lanbon L8 v0.6.0</option>
            <option value="7" data-manifest="../../assets/json/m5stack-core2_full_16MB_v0.6.0.json" hide-progress erase-first>M5Stack core2 v0.6.0</option>
            <option value="8" data-manifest="../../assets/json/wt32-sc01_full_4MB_v0.6.0.json" hide-progress erase-first>WT32-SC01 (4MB) v0.6.0</option>
        </select>
        </p>
        <div class="inst-button">
            <esp-web-install-button id="inst" manifest="../../assets/json/manifest.json" hide-progress erase-first>
                <button class="md-button md-button--primary" slot="activate">Install Firmware</button>
                <span slot="unsupported">Ah snap, your browser doesn't work!</span>
                <span slot="not-allowed">Ah snap, you are not allowed to use this on HTTP!</span>
            </esp-web-install-button><br>
            <input type="checkbox" id="erase" name="erase" onchange="toggleErase()" checked>
            <label for="erase"> Clean install (deletes presets and settings)</label><br>
        </div>
        <div class="log">
            <span class="info-top" id="state">Initializing...</span>
            <span class="info-top" id="progress"></span><br>
            <div id="bar" class="height: 12px; width: 100%;">
                <div id="bar-inner" class="transform: translate(-50%, -10%); width: 200%; height: 120%; background: linear-gradient(to right, #fff 50%, #444 50%); transition: transform 3s; position: absolute;  left: 0; top: 0;"></div>
            </div>
            <span class="info-bot" id="env">&nbsp;</span>
            <span class="info-bot" id="extra">&nbsp;</span>
        </div>
        <div id="reset-button">
            <button class="md-button md-button--primary" onclick="reset()">&#8635; Start over</button>
        </div>
    </div>


    Powered by [ESP Web Tools](https://esphome.github.io/esp-web-tools/)
