basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Y % 2 == 0) {
                led.plot(4 - X, 4 - Y)
            } else if (Y == 1) {
                led.plot(X, 4 - Y)
            }
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
