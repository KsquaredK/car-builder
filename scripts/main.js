// module renders dynamic content as html to DOM
import { CarBuilder } from "./CarBuilder.js"
// assigns variable to targeted element that will receive generated html
const mainContainer = document.querySelector("#container")
    // function to invoke dynamic content from user-interface module and assigns it to targeted element
const renderHTML = () => {
        mainContainer.innerHTML = CarBuilder()
    }
    // calling previous function
renderHTML()

document.addEventListener("stateChanged", event => {
    window.alert("State of data has changed. Regenerating HTML...")
    renderHTML()
})