# ESP32 Lolin TFT 2.4 Touch Shield

<div class="row justify-content-center">
        <a href="https://raw.githubusercontent.com/HASwitchPlate/openHASP-docs/master/docs/assets/images/devices/esp32-touchdown.jpg" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-6" data-title="ESP32 TouchDown" data-footer="Original image by Dustin Watts - Used with permission">
            <img src="../../assets/images/devices/esp32-touchdown.jpg" class="img-fluid">
        </a>

        <a href="https://raw.githubusercontent.com/HASwitchPlate/openHASP-docs/master/docs/assets/images/devices/esp32-touchdown-color_wheel.png" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-6" data-title="ESP32 TouchDown" data-footer="Original image by Dustin Watts - Used with permission">
            <img src="../../assets/images/devices/esp32-touchdown-color_wheel.png" class="img-fluid">
        </a>
</div>
<div>
        <a href="https://raw.githubusercontent.com/HASwitchPlate/openHASP-docs/master/docs/assets/images/devices/esp32-touchdown-usbc.jpg" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[work]" data-title="ESP32 TouchDown" data-footer="Original image by Dustin Watts - Used with permission">more images...</a>
        <a href="https://raw.githubusercontent.com/HASwitchPlate/openHASP-docs/master/docs/assets/images/devices/esp32-touchdown-speaker.jpg" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[vacation]" data-title="ESP32 TouchDown" data-footer="Original image by Dustin Watts - Used with permission"></a>
        <a href="https://raw.githubusercontent.com/HASwitchPlate/openHASP-docs/master/docs/assets/images/devices/esp32-touchdown-sdcard.jpg" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[vacation]" data-title="ESP32 TouchDown" data-footer="Original image by Dustin Watts - Used with permission"></a>
        <a href="https://raw.githubusercontent.com/HASwitchPlate/openHASP-docs/master/docs/assets/images/devices/esp32-touchdown-features.png" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[vacation]" data-title="ESP32 TouchDown" data-footer="Original image by Dustin Watts - Used with permission"></a>
</div>

This Lolin TFT has a 2.4" touchscreen with XPT2046 resistive touch controller.
There are 3 ways to connect an ESP32:

1. Plug an ESP into the female headers on the back
2. Attach an ESP using the 10-pin TFT connector and cable.
3. Solder headers onto the bottom pinholes for pluggin into a breadboard or jumper cables.

| Pros                       | Cons
|:-----                      |:----
| Plug-and-play              | Resistive touchscreen
| Limited soldering required | Availability
| Choice of several ESP32 MCUs |
| Price |


## ESP32

The Lolin TFT 2.4" header is plug-and-play compatible with these development boards, no need to use any jumper cables:

- Wemos D1 Mini ESP32 (only solder the inner row of pin headers)
- TTGO T7 V1.5 MINI32 ESP32 (only solder the inner row of pin headers)
- LOLIN D32 Pro V2.0.0 using an additional TFT cable

| Model                   | 3.2" Resistive | 3.5" Resistive | 3.5" Capacitive
|-------------------------|:-------:|:-------:|:--------:
| SKU                     | [Wemos D1 Mini ESP32][1] | [TTGO T7 V1.5 MINI32 ESP32][2] | [LOLIN D32 Pro V2.0.0][3]
| MCU                     | ESP32-WROOM | ESP32-WROVER | ESP32-WROVER
| Flash                   | 4 MB    | 16 MB   | 16 MB
| PSram                   | No      | 8 MB    | 8 MB
| Connection              | 2x8 Pinheader | 2x8 Pinheader | [10-pin TFT cable][5]
| SD Card                 | no | no | :white_check_mark: yes
| Battery charging        | no | yes | yes
| PWM Screen dimming      | :question_mark: tbd    | :question_mark: tbd    | :question_mark: tbd   
| | [:material-cart-variant: Buy][1]{ .md-button .md-button--primary } | [:material-cart-variant: Buy][2]{ .md-button .md-button--primary } | [:material-cart-variant: Buy][3]{ .md-button .md-button--primary }



   - ESP32-WROOM-32D
   - ILI9488 3.5" (480*320) TFT screen in 4-wire SPI mode
   - FT62x6 Capacitive Touch Controller
   - APK2112 3.3V regulator
   - MCP73831 battery management IC
   - CP2102 USB-to-UART IC
   - USB-C connector
   - Piezo Speaker
   - microSD card holder
   - Battery voltage divider connected to GPIO35
   - Stemma / JST-PH I2C connector
   - Compact size: 100x57x15mm

## TFT 2.4 Touch Shield

[:material-cart-variant: Buy][4]{ .md-button .md-button--primary }

Available on
[![Tindie](../assets/images/tindie-logo.png)](https://www.tindie.com/products/dustinwattsnl/esp32-touchdown/)

## Product Video

![YOUTUBE](sdVtHU2Gz7Y)

## Backlight Control

To enable backlight control, make sure the solder jumper pad is in position 2-1:

![Backlight Control](../assets/images/devices/esp32-touchdown-backlight.png)

## 3D Printed Cases

You can find several different [3D printable cases](https://github.com/DustinWatts/esp32-touchdown/tree/main/Case) in the [ESP32 TouchDown repository](https://github.com/DustinWatts/esp32-touchdown/):

## Flashing

The ESP32 TouchDown can easily be flashed over USB like any ESP32 development board.

## GPIO Settings

These pins can be used freely as GPIOs:

## PCB Blueprint

The ESP32 TouchDown is fully [Open Source Hardware](https://github.com/DustinWatts/esp32-touchdown/tree/main/Hardware):

- Schematics
- Bill of materials
- PCB layout
- Datasheets

![PCB Dimensions](../assets/images/devices/esp32-touchdown-dimensions.png)

## HASP build_flags

Specify the LCD Configuration to use and define the GPIOs in the environment build flags:

```ini
build_flags =
    ${env.build_flags}
    ${esp32.build_flags}
    ${esp32.vspi}        ; Use VSPI hardware SPI bus

;region -- TFT_eSPI build options ------------------------
    -D USER_SETUP_LOADED=1
    -D ILI9488_DRIVER=1
    -D TFT_ROTATION=0 ; 0=0, 1=90, 2=180 or 3=270 degree
    -D TFT_WIDTH=320
    -D TFT_HEIGHT=480
    -D TFT_CS=15  ;// Chip select control pin
    -D TFT_DC=2  ;// Data Command control pin
    -D TFT_RST=4 ;// Reset pin (could connect to RST pin)
    -D TFT_BCKL=5  ;None, configurable via web UI (e.g. 2 for D4)
    -D SUPPORT_TRANSACTIONS
    -D TOUCH_DRIVER=6336 ; XPT2606 Resistive touch panel driver 
    -D TOUCH_SDA=21
    -D TOUCH_SCL=22
    -D TOUCH_IRQ=27   ; not connected
    -D TOUCH_RST=-1   ; not used, connected to 3.3V
    -D TOUCH_FREQUENCY=400000
    -D SPI_FREQUENCY=27000000
    -D SPI_READ_FREQUENCY=16000000
;endregion
```

[1]: https://www.aliexpress.com/item/32815530502.html
[2]: https://www.aliexpress.com/item/32977375539.html
[3]: https://www.aliexpress.com/item/32883116057.html
[4]: https://www.aliexpress.com/item/32919729730.html
[5]: https://www.aliexpress.com/item/32848833474.html