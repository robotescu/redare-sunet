basic.pause(2000)
pins.setEvents(DigitalPin.P8, PinEventType.None)
pins.digitalWritePin(DigitalPin.P8, 1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
