<h1>Waveshare RPi LCD (Rev C)</h1>

This screen comes in 3.5" and 4.0" sizes.

6 GPIOs are required to drive the SPI display. One additional GPIO is needed for the XPT2046 touch sensor and one extra GPIO for backlight dimming.
Including the VCC and GND pins, a total of 13 connections need to be made to the MCU:

## Pin Configuration

Pin	  |Function            |ESP32 Pin  |Config Name|Display Pin |
------|--------------------|-----------|-----------|------------|
1     |Module Power 3.3V   |3.3V       |           |3.3V
2     |Module Power 5v     |5V         |           |5V
3     | Not connected      |           |           |NC
4     |                    |           |           |5V
5-10  | Not connected      |           |           |NC
11    | Touch Interrupt    |NC         |           |TP_IRQ
12 (*)| LED Backlight PWM  |           |TFT_BCKL   |LCD_LED
13    | Not connected      |           |           |NC
14    |Module Ground       |GND        |           |GND
15-16 | Not connected      |           |           |NC
17    |Module Power        |3.3V       |           |3.3V
18    |Data Command control pin|GPIO4  |TFT_DC     |LCD_RS
19    |SPI Master Out Slave In |GPIO23 |TFT_MOSI   |LCD/SI/TP_SI
20    |Not connected       |           |           |NC
21    |Touch Panel Slave Out|GPIO19    |TFT_MISO   |TP_SO
22    |LCD Reset pin       |GPIO32     |TFT_RST    |RST
23    |SPI Clock           |GPIO18     |TFT_SCLK   |LCD_SCK/TP_SCK
24    |Chip select control pin|GPIO15  |TFT_CS     |LCD_CS
25    |Module Ground	   |GND        |           |GND
26    |Touch Chip Select   |GPIO22     |TOUCH_CS   |TP_CS

SPI MISO, MOSI and SCLK are shared between the touch controller and the LCD controller.

!!! warning "Attention (*)"
    Only the WaveShare 4.0" RPi LCD Revision C has a solder jumper on the back to enable PWM backlight dimming. Other revisions of this board do not have this feature.

## LCD Configuration

The `lcd_config.ini` file specifies the different properties of the display, except for the actual pin configuration:

```ini
raspberrypi =
    -D RPI_DISPLAY_TYPE=1
    -D ST7796_DRIVER=1
    -D TFT_WIDTH=320
    -D TFT_HEIGHT=480
    -D TFT_ROTATION=0 ; 0=0, 1=90, 2=180 or 3=270 degree
    -D SPI_FREQUENCY=80000000
    -D SPI_TOUCH_FREQUENCY=2500000
    -D USER_SETUP_LOADED=1
    -D TOUCH_DRIVER=2046 ; XPT2046 Resistive touch panel driver
    -D SUPPORT_TRANSACTIONS
```

## HASP build_flags

Specify the LCD Configuration to use and define the 7 GPIOs in the environment build flags:

```ini
build_flags =
    ${flags.esp32_flags}
; -- TFT_eSPI build options ------------------------
    ${lcd.raspberrypi}
    ${esp32.vspi}        ; Use VSPI hardware SPI bus
    -D TFT_CS=15
    -D TFT_DC=4
    -D TFT_RST=32
    -D TFT_BCKL=-1       ; None, configurable via web UI (e.g. 21)
    -D TOUCH_CS=22
```