input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallSquare)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # . # .
        . # . # .
        `)
})
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
basic.showString("PREJ AKILIT")
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showIcon(IconNames.SmallHeart)
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
