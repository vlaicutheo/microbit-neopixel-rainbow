input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
let ring = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
ring.clear()
ring.range(0, 9).showRainbow(0, 255)
ring.setBrightness(100)
basic.forever(function () {
    ring.rotate(1)
    ring.show()
    basic.pause(50)
})
