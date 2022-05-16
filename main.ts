input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 - - G A F G E ", 120)
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
