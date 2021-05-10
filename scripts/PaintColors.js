import { getPaintColors, setPaintColor } from "./database.js"
const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "paintColor") {
            const paintColorId = changeEvent.target.value
            setPaintColor(parseInt(paintColorId))
                // for (const paintColor of paintColors) {
                // if (parseInt(paintColorId) === paintColor.id)

            //window.alert(`You have selected ${paintColor.color}`)
            // }

        }
    }
)


export const PaintColors = () => {
    let html = "<ul>"
        // Use .map() for converting objects to <li> elements
    const listItems = paintColors.map(paintColor => {
        return `<li>
            <input type="radio" name="paintColor" value="${paintColor.id}" checked="checked"/> ${paintColor.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}