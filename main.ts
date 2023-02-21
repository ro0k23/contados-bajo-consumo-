input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(3000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0
