//import array from db
import { getTechPacks, setTechPack } from "./database.js"
//make copy of array available
const techPacks = getTechPacks()

document.addEventListener(
    "change", (event) => {
        if (event.target.name === "techPack") {
            setTechPack(parseInt(event.target.value))
            window.alert(`You have chosen ${techPacks.type}`)
        }
    }
)

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