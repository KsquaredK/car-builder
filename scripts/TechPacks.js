//import array from db
import { getTechPacks, setTechPack } from "./database.js"
//make copy of array available
const techPacks = getTechPacks()

document.addEventListener(
        "change",
        (changeEvent) => {
            if (changeEvent.target.name === "techPack") {
                const techPackId = changeEvent.target.value
                setTechPack(parseInt(techPackId))
                    // for (const techPack of techPacks) {
                    // if (parseInt(techPackId) === techPack.id)
                    //window.alert(`You have chosen ${techPack.type}`)
            }
        }
        // }

    )
    /* document.addEventListener(
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

    ) */

//make rendered html available for import
export const TechPacks = () => {
    //html will be a list item
    let html = "<ul>"

    //define listItems 
    // Use .map() for converting objects to <li> elements
    const listItems = techPacks.map(techPack => {
        return `<li>
            <input type="radio" name="techPack" value="${techPack.id}" /> ${techPack.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}