basic.pause(2000)
pins.setEvents(DigitalPin.P14, PinEventType.Touch)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
})
