import { getInteriors, setInterior } from "./database.js"
const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "interior") {
            const interiorId = changeEvent.target.value
            setInterior(interiorId)
            for (const interior of interiors) {
                if (parseInt(interiorId) === interior.id)
                    window.alert(`You have selected ${interior.colorType}`)
            }
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

/* 
if (itemClicked.id.startsWith("celebrity")) { // if the target clicked has an id that starts with..
                
                const [, itemClickedId] = itemClicked.id.split("--") //split out all but the value I want

                for (const celebrity of celebrities) { //loop thru celebrity array
                    
                    if (celebrity.id === parseInt(itemClickedId)) //if celebrity primary key matches click target id
                        window.alert(`${celebrity.name} is ${celebrity.sport} star`) 
*/