import { getWheels, setWheel } from "./database.js"
const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "wheel") {
            const wheelId = changeEvent.target.value
            setWheel(parseInt(wheelId))
                // for (const wheel of wheels) {
                // if (parseInt(wheelId) === wheel.id)

            //window.alert(`You have selected ${wheel.sizeType}`)
        }
    }
    // }
)


export const Wheels = () => {
    let html = "<ul>"



    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.sizeType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}