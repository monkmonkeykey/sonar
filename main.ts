input.onButtonPressed(Button.A, function () {
    music.setVolume(127)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
})
function servo2 () {
    pins.servoWritePin(AnalogPin.P2, servo)
}
let servo = 0
let contador = 0
servo = 0
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P0)
loops.everyInterval(20, function () {
    led.plotBarGraph(
    servo,
    180
    )
    if (contador < 180) {
        contador += 1
        servo += 1
    } else if (contador >= 179 && contador < 360) {
        contador += 1
        servo += -1
    } else {
        contador = 0
    }
})
basic.forever(function () {
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 10 && makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 20) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        servo2()
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 21 && makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 30) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        servo2()
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 31 && makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 40) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        servo2()
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 41 && makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 50) {
        servo2()
    } else {
        servo2()
    }
})
