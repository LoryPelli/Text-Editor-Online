function keys() {
    let titlebox = document.getElementById("title")
    let textbox = document.getElementById("text")
    document.addEventListener("keydown", e => {
        if (e.altKey) {
            switch (e.keyCode) {
                case 49: {
                    location.href = "?session-id=1&tab=1"
                } break
                case 50: {
                    location.href = "?session-id=1&tab=2"
                } break
                case 51: {
                    location.href = "?session-id=1&tab=3"
                } break
                case 52: {
                    location.href = "?session-id=1&tab=4"
                } break
                case 53: {
                    location.href = "?session-id=1&tab=5"
                } break
                case 54: {
                    location.href = "?session-id=1&tab=6"
                } break
                case 55: {
                    location.href = "?session-id=1&tab=7"
                } break
                case 56: {
                    location.href = "?session-id=1&tab=8"
                } break
                case 57: {
                    location.href = "?session-id=1&tab=9"
                } break
            }
        }
    })
    titlebox.addEventListener("keydown", e => {
        switch (true) {
            case e.keyCode == 9 || e.keyCode == 13 || e.keyCode == 38 && titlebox.value.length == 0 || e.keyCode == 39 && titlebox.value.length == 0 || e.keyCode == 40 && titlebox.value.length == 0: {
                e.preventDefault()
                textbox.focus()
            } break
        }
    })
    textbox.addEventListener("keydown", e => {
        switch (true) {
            case e.keyCode == 8 && textbox.value.length == 0 || e.keyCode == 9 || e.keyCode == 37 && textbox.value.length == 0 || e.keyCode == 38 && textbox.value.length == 0 || e.keyCode == 40 && textbox.value.length == 0: {
                e.preventDefault()
                titlebox.focus()
            } break
        }
    })
}
export default keys