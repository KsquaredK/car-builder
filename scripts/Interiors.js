import { getInteriors, setInterior } from "./database.js"
const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "interior") {
            const interiorId = changeEvent.target.value
            setInterior(parseInt(interiorId))
                //for (const interior of interiors) {
                //if (parseInt(interiorId) === interior.id)
                //window.alert(`You have selected ${interior.colorType}`)
                // }
                // }
        }
    }

)

export const Interiors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.colorType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}