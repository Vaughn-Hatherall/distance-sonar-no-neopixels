let distance2 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    distance2 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )
    basic.showString("" + (distance2))
})
