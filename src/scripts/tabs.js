function tabs() {
    let tab1 = document.getElementsByClassName("tab")[0]
    let tab2 = document.getElementsByClassName("tab")[1]
    let tab3 = document.getElementsByClassName("tab")[2]
    let tab4 = document.getElementsByClassName("tab")[3]
    let tab5 = document.getElementsByClassName("tab")[4]
    let tab6 = document.getElementsByClassName("tab")[5]
    let tab7 = document.getElementsByClassName("tab")[6]
    let tab8 = document.getElementsByClassName("tab")[7]
    let tab9 = document.getElementsByClassName("tab")[8]
    tab1.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=1`
        document.getElementById("title").focus()
        tab1.style.borderColor = "orange"
        tab2.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab2.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=2`
        document.getElementById("title").focus()
        tab2.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab3.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=3`
        document.getElementById("title").focus()
        tab3.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab2.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab4.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=4`
        document.getElementById("title").focus()
        tab4.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab2.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab5.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=5`
        document.getElementById("title").focus()
        tab5.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab2.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab6.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=6`
        document.getElementById("title").focus()
        tab6.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab2.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab7.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=7`
        document.getElementById("title").focus()
        tab7.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab2.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab8.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=8`
        document.getElementById("title").focus()
        tab8.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab2.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab9.style.borderColor = "blueviolet"
    })
    tab9.addEventListener("click", () => {
        location.href = `?session-id=${localStorage.getItem("session-id")}&tab=9`
        document.getElementById("title").focus()
        tab9.style.borderColor = "orange"
        tab1.style.borderColor = "blueviolet"
        tab2.style.borderColor = "blueviolet"
        tab3.style.borderColor = "blueviolet"
        tab4.style.borderColor = "blueviolet"
        tab5.style.borderColor = "blueviolet"
        tab6.style.borderColor = "blueviolet"
        tab7.style.borderColor = "blueviolet"
        tab8.style.borderColor = "blueviolet"
    })
}
export default tabs