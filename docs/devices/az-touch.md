# AZ-Touch MOD

<div class="row justify-content-center">
        <a href="https://cdn.shopify.com/s/files/1/1509/1638/products/Web04_600x.jpg" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[vacation]" data-title="Assembled AZ-Touch PCB" data-footer="Copyright az-delivery.de">
            <img src="https://cdn.shopify.com/s/files/1/1509/1638/products/Web04_600x.jpg" class="img-fluid">
        </a>
        <a href="https://cdn.shopify.com/s/files/1/1509/1638/products/1.main_600x.jpg" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-6" data-title="AZ-Touch wall enclosure set with 2.8&quot; touchscreen" data-footer="Copyright az-delivery.de">
            <img src="https://cdn.shopify.com/s/files/1/1509/1638/products/1.main_600x.jpg" class="img-fluid">
        </a>
</div>
<div>
        <a href="https://cdn.shopify.com/s/files/1/1509/1638/products/1.Main_ArduiTouch_1x_5a91fd6e-d707-48a1-bbae-31d001aaf76a_600x.jpg" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-6" data-title="AZ-Touch wall enclosure set with 2.4&quot; touchscreen" data-footer="Copyright az-delivery.de"></a>
        <a href="https://cdn.shopify.com/s/files/1/1509/1638/files/PXL_20201030_154855590_600x600.jpg" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[work]" data-title="AZ-Touch Top PCB with headers" data-footer="Copyright az-delivery.de">more images...</a>
        <a href="https://cdn.shopify.com/s/files/1/1509/1638/files/PXL_20201030_155709352_600x600.jpg" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[vacation]" data-title="AZ-Touch Bottom PCB with MCU" data-footer="Copyright az-delivery.de"></a>
        <a href="https://cdn.shopify.com/s/files/1/1509/1638/files/PXL_20201030_155641315_600x600.jpg" data-toggle="lightbox" data-gallery="example-gallery" rel="lightbox[vacation]" data-title="AZ-Touch PCB Side View" data-footer="Copyright az-delivery.de"></a>
</div>

The AZ-Touch wall enclosure includes a 2.4" or 2.8" ILI9341 display with a XPT2046 resistive touchscreen controller.
The kit comes with a pre-soldered PCB, but with loose headers. Some soldering is required.
There are 2 ESP32 footprint options for soldering headers onto the PCB:

1. ESP32-DevKitC footprint with 2x19 pins
2. Wemos D1 mini footprint with 2x8 pins

The ESP32-DevKitC option is prefered because you can use more pins from the ESP32.

| Pros                         | Cons
|:-----                        |:----
| Versatile PCB options        | Bulky enclosure
| Limited soldering required   | Resistive touchpanel
| Choice of several ESP32 MCUs
| 9 to 35V DC-DC power input
| Integrated piezo beeper
| Breadboard area


## ESP32 dev boards

The AZ-Touch MOD PCB kit does *not* come with an MCU and needs to be purchased seperately.
The PCB is designed to be compatible with these development boards:

| Board                   | [ESP32-DevKitC-V4][3] | [ESP32-DevKitC-VE][4]
|-------------------------||:----------:|:----------:
| MCU                     | ESP32-WROOM | ESP32-WROVER
| Flash                   | 4 MB | 8 MB
| PSram                   | No      | 8 MB
| | [:material-cart-variant: Buy][3]{ .md-button .md-button--primary } | [:material-cart-variant: Buy][4]{ .md-button .md-button--primary }


## Product Video

![YOUTUBE](JvdXCSyFyOA)


## Backlight Control

GPIO15 of the ESP32 is used for PWM dimming off the AZ-Touch display.


## Enclosure

The AZ-Touch MOD kit comes with a nice wall mounting enclosure for the 2.4&quot; or 2.8&quot; touchscreen.
It enables you to mount your project permanently in your living room, corridor or other exposed places. 

<div class="row justify-content-center">
        <a href="../../assets/images/devices/arduitouch-contents.jpg" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-6" data-title="AZ-Touch MOD Contents" data-footer="Copyright az-delivery.de, All Rights Reserved">
            <img src="../../assets/images/devices/arduitouch-contents.jpg" class="img-fluid">
        </a>
</div>

The wall mounted enclosure measures 120mm x 80mm x 35mm (W x H x D).


## Flashing

The ESP32 can be flashed over USB like any ESP32 development board.


## Documentation

[:fontawesome-solid-file-pdf: Schematics][6]{ .md-button .md-button } &nbsp;
[:fontawesome-regular-file-pdf: Datasheet][7]{ .md-button .md-button }



[3]: https://www.az-delivery.de/nl/products/esp-32-dev-kit-c-v4
[4]: https://www.amazon.com/Espressif-ESP32-DevKitC-VE-Development-Board/dp/B087TNPQCV
[6]: https://www.hwhardsoft.de/app/download/11868165697/AZ-Touch+MOD+schematic+V01-03-01.pdf
[7]: https://www.hwhardsoft.de/app/download/11868164297/Datasheet+AZ-Touch+MOD+Rev+B.pdf