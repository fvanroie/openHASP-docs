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

## TFT 2.4" Touch Shield

This Lolin TFT has a 2.4" touchscreen with XPT2046 resistive touch controller.
There are 3 ways to connect an ESP32:

1. Plug a compatible ESP32 onto the female headers on the back
2. Attach a [LOLIN D32 Pro V2.0][3] using the 10-pin TFT connector and cable
3. Solder headers onto the bottom pinholes for pluging into a breadboard or jumper cables for any other ESP

| Pros                       | Cons
|:-----                      |:----
| Plug-and-play              | Resistive touchscreen
| Limited soldering required | Availability
| Choice of several ESP32 MCUs |
| Price |

[:material-cart-variant: Buy][4]{ .md-button .md-button--primary }


## ESP32 dev board

The Lolin TFT 2.4" headers are plug-and-play compatible with these development boards, no need to use any jumper cables:

- Wemos D1 Mini ESP32 (only solder the inner row of pin headers)
- TTGO T7 V1.5 MINI32 ESP32 (only solder the inner row of pin headers)
- LOLIN D32 Pro V2.0.0 using an additional TFT cable

| Model                   | 3.2" Resistive | 3.5" Resistive | 3.5" Capacitive
|-------------------------|:-------:|:-------:|:--------:
| SKU                     | [D1 Mini ESP32][1] | [TTGO T7 V1.5 MINI32 ESP32][2] | [LOLIN D32 Pro V2.0][3]
| MCU                     | ESP32-WROOM | ESP32-WROVER | ESP32-WROVER
| Flash                   | 4 MB    | 4 MB   | 4 or 16 MB
| PSram                   | No      | 8 MB    | 8 MB
| Connection              | 2 1x8 Pinheader(*) | 2 1x8 Pinheader(*) | [10-pin TFT cable][5]
| SD Card                 | no | no | :white_check_mark: yes
| Battery charging        | no | yes | yes
| USB Chip                | | CH9102F | CH340C
| PWM Screen dimming      | :question_mark: tbd    | :question_mark: tbd    | :question_mark: tbd   
| | [:material-cart-variant: Buy][1]{ .md-button .md-button--primary } | [:material-cart-variant: Buy][2]{ .md-button .md-button--primary } | [:material-cart-variant: Buy][3]{ .md-button .md-button--primary }

!!! warning
    The D1 Mini ESP32 board may suffer from brown-out reboots if not powered adequately.

!!! note
    (*) Because the board is developed for the D1-mini, you must *only* solder a row of 1x8 male pins to pads `TXD-5V` and `RST-3V3` each.




## Product Video

![YOUTUBE](bNdo3G_vKTY)

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


[1]: https://www.aliexpress.com/item/32815530502.html
[2]: https://www.aliexpress.com/item/32977375539.html
[3]: https://www.aliexpress.com/item/32883116057.html
[4]: https://www.aliexpress.com/item/32919729730.html
[5]: https://www.aliexpress.com/item/32848833474.html