import { getPaintColors, getInteriors, getTechPacks, getWheels, getOrders } from "./database.js"
console.log("Orders module initialized...")

const paintColors = getPaintColors()
const interiors = getInteriors()
const techPacks = getTechPacks()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundPaintColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        })
    const foundTechPack = techPacks.find(
        (techPack) => {
            return techPack.id === order.techPackId
        }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    let totalCost = foundPaintColor.price + foundInterior.price +
        foundTechPack.price + foundWheel.price

    let costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
Order #${order.id} cost ${costString}, and was placed on ${order.timestamp}</li>`
}

/* 
    Make sure there is a foreign key for each options type on the new object.
Make sure there is a new primary key value that is 1 greater than the current highest one.
Make sure there is a timestamp on the order.
 */
/* 
Make sure you clear out the state that was being used to store the user options once the order state is created.
Trigger the stateChanged custom events and have the main module listen for it and regenerate all of the HTML.
Once regenerated, the new order should appear in the DOM. Example:
Order #1 was placed on 16895837301 
*/

export const Orders = () => {
    console.log("Orders function invoked...")

    const orders = getOrders()
    let totalCost = 0
    const arrayOfHTMLStrings = orders.map(
            (order) => {
                const foundPaintColor = paintColors.find(paintColor => paintColor.id === order.paintColorId)
                totalCost += foundPaintColor.price
                const foundInterior = interiors.find(interior => interior.id === order.interiorId)
                totalCost += foundInterior.price
                const foundTechPack = techPacks.find(techPack => techPack.id === order.techPackId)
                totalCost += foundTechPack.price
                const foundWheel = wheels.find(wheel => wheel.id === order.wheelId)
                totalCost += foundWheel.price

            })
        /* 
         
            const foundPaintColor = paintColors.find(
                (paintColorObj) => {
                    if (paintColorObj.id === paintColor.id) {
                        return true
                    }
                }
            ) */



    let html = "<ul>"
    const arrayOfHTML = orders.map((orderObj) => {
        const singularListItemHtml = buildOrderListItem(orderObj)
        return singularListItemHtml
    })
    html += arrayOfHTMLStrings.join("")
    html += "</ul>"

    return html
}