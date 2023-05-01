input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showNumber(counter)
})
input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onGesture(Gesture.Shake, function () {
    counter = 0
    basic.showNumber(counter)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    counter = 0
    basic.showNumber(counter)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    if (counter > 0) {
        counter += -1
        basic.showNumber(counter)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
let counter = 0
basic.showNumber(counter)
