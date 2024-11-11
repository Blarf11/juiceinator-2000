input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    record.startRecording(record.BlockingState.Nonblocking)
})
record.setMicGain(record.AudioLevels.Low)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
