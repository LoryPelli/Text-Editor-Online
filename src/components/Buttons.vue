<script setup>
import { Download, Share, Upload, ArrowLeftBold, ArrowRightBold, QuestionFilled } from "@element-plus/icons-vue"
import "../scripts/save.js"
</script>
<script>
import { ElMessageBox, ElButton } from "element-plus"
import "element-plus/dist/index.css"
export default {
    name: "Buttons",
    components: {
        ElButton
    },
    methods: {
        save() {
            let titlevalue = document.getElementById("title").value
            let textvalue = document.getElementById("text").value
            let file = new File([textvalue], `${titlevalue}.txt`, {
                type: "text/plain"
            })
            let titlebox = document.getElementById("title")
            if (titlevalue.length == 0 && textvalue.length == 0) {
                ElMessageBox.alert("I need a title and a content to be saved", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                titlebox.focus()
                return
            }
            else if (titlevalue.length == 0) {
                ElMessageBox.alert("I need a title to be saved", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                titlebox.focus()
                return
            }
            else if (textvalue.length == 0) {
                ElMessageBox.alert("I need a content to be saved", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                titlebox.focus()
                return
            }
            ElMessageBox.confirm("Are you sure you want to save it?", "Warning", { draggable: true, type: "warning", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                .then(() => {
                    let link = document.createElement("a")
                    let url = URL.createObjectURL(file)
                    link.href = url
                    link.download = file.name
                    link.click()
                    file.save
                    titlebox.focus()
                })
                .catch(() => {
                    titlebox.focus()
                })
        },
        loadFile() {
            let url = new URLSearchParams(window.location.search)
            if (url.has("title") || url.has("content")) {
                return ElMessageBox.alert("You can't use this because of titleparam or textparam", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
            }
            let input = document.createElement("input")
            input.type = "file"
            input.accept = ".txt"
            input.onchange = () => {
                let file = input.files[0]
                document.getElementById("title").focus()
                if (file.type != "text/plain") {
                    return ElMessageBox.alert("Only txt files are supported", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                }
                document.getElementById("title").value = file.name.replace(".txt", "")
                document.getElementById("titlechar").innerHTML = file.name.replace(".txt", "").length
                let content = new FileReader()
                content.onload = () => {
                    document.getElementById("text").value = content.result
                    document.getElementById("textchar").innerHTML = content.result.length
                }
                content.readAsText(file)
            }
            input.click()
        },
        share() {
            let titlevalue = document.getElementById("title").value
            let textvalue = document.getElementById("text").value
            let url = window.location.hostname
            let urlbeginning = window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1") ? "http://" : "https://"
            if (titlevalue.length == 0 && textvalue.length == 0) {
                let copy = `${urlbeginning}${url}/`
                navigator.clipboard.writeText(copy)
                ElMessageBox.alert("Successfully copied link, you can now share it with your friends!", "Success", { draggable: true, type: "success", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                document.getElementById("title").focus()
            }
            else if (titlevalue.length == 0) {
                let copy = `${urlbeginning}${url}?content=${textvalue}`
                navigator.clipboard.writeText(copy)
                ElMessageBox.alert("Successfully copied link, you can now share it with your friends!", "Success", { draggable: true, type: "success", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                document.getElementById("title").focus()
            }
            else if (textvalue.length == 0) {
                let copy = `${urlbeginning}${url}?title=${titlevalue}`
                navigator.clipboard.writeText(copy)
                ElMessageBox.alert("Successfully copied link, you can now share it with your friends!", "Success", { draggable: true, type: "success", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                document.getElementById("title").focus()
            }
            else {
                if (titlevalue == textvalue) {
                    let copy = `${urlbeginning}${url}?title=${titlevalue}&content=$title`
                    navigator.clipboard.writeText(copy)
                    ElMessageBox.alert("Successfully copied link, you can now share it with your friends!", "Success", { draggable: true, type: "success", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                    document.getElementById("title").focus()
                }
                else {
                    let copy = `${urlbeginning}${url}?title=${titlevalue}&content=${textvalue}`
                    navigator.clipboard.writeText(copy)
                    ElMessageBox.alert("Successfully copied link, you can now share it with your friends!", "Success", { draggable: true, type: "success", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                    document.getElementById("title").focus()
                }
            }
        },
        previousSession() {
            let urlParams = new URLSearchParams(window.location.search)
            let session = urlParams.get("session-id")
            if (Number(session)) {
                if (session == 1) {
                    ElMessageBox.alert("Session ID can't be < 1", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                    document.getElementById("title").focus()
                    return
                }
                urlParams.set("session-id", session--)
                location.href = `?session-id=${session}&tab=1`
                document.getElementById("title").focus()
                localStorage.setItem("session-id", session)
            }
            else {
                ElMessageBox.alert("Session ID must be a number", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                document.getElementById("title").focus()
            }
        },
        nextSession() {
            let urlParams = new URLSearchParams(window.location.search)
            let session = urlParams.get("session-id")
            if (Number(session)) {
                if (session == 999999999999999) {
                    ElMessageBox.alert("Session ID can't be > 999999999999999", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                    document.getElementById("title").focus()
                    return
                }
                urlParams.set("session-id", session++)
                location.href = `?session-id=${session}&tab=1`
                document.getElementById("title").focus()
                localStorage.setItem("session-id", session)
            }
            else {
                ElMessageBox.alert("Session ID must be a number", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                document.getElementById("title").focus()
            }
        },
        changeSession() {
            ElMessageBox.prompt("Type Session ID Here", "Custom Session", { inputPlaceholder: "Type Here...", draggable: true, type: "info", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                .then(({ value }) => {
                    switch (true) {
                        case (value == null): {
                            document.getElementById("title").focus()
                        } break
                        case (value <= 0): {
                            ElMessageBox.alert("Session ID not valid", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                            document.getElementById("title").focus()
                        } break
                        case (value > 999999999999999): {
                            ElMessageBox.alert("Session ID not valid", "Error", { draggable: true, type: "error", customStyle: { fontFamily: "'Martian Mono', monospace" }, distinguishCancelAndClose: true })
                            document.getElementById("title").focus()
                        } break
                        default: {
                            location.href = `?session-id=${value}&tab=1`
                            document.getElementById("title").focus()
                            localStorage.setItem("session", value)
                        } break
                    }
                })
        }
    }
}
</script>
<template>
    <div id="buttons">
        <ElButton id="save" v-on:click="save" :icon="Download">Save</ElButton>
        <ElButton id="file" v-on:click="loadFile" :icon="Upload">Load</ElButton>
        <ElButton id="share" v-on:click="share" :icon="Share">Share</ElButton>
        <br>
        <ElButton id="previous_session" v-on:click="previousSession" :icon="ArrowLeftBold" />
        <ElButton id="custom_session" v-on:click="changeSession">...</ElButton>
        <ElButton id="next_session" v-on:click="nextSession" :icon="ArrowRightBold" />
    </div>
    <div id="help-btn">
        <a href="https://github.com/LoryPelli/Text-Editor-Online/blob/main/readme.md" target="_blank">
            <ElButton id="help" :icon="QuestionFilled" />
        </a>
    </div>
</template>