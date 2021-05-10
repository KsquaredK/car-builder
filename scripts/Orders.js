import { getPaintColors, getInteriors, getTechPacks, getWheels, getOrders } from "./database.js"
console.log("Orders module initialized...")

const paintColors = getPaintColors()
const interiors = getInteriors()
const techPacks = getTechPacks()
const wheels = getWheels()


//iterate arrays of features to define custom order and render html of cost and date
const buildOrderListItem = (order) => {
    //locates object from order using keys
    const foundPaintColor = paintColors.find(
            (paintColor) => {
                return paintColor.id === order.paintColorId
            }
        )
        //locates object from order using keys
    const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            })
        //locates object from order using keys
    const foundTechPack = techPacks.find(
            (techPack) => {
                return techPack.id === order.techPackId
            }
        )
        //locates object from order using keys
    const foundWheel = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelId
            }
        )
        //new variable sums .price values of above objects
    let totalCost = foundPaintColor.price + foundInterior.price +
        foundTechPack.price + foundWheel.price
        //new variable holds total cost converted to string (currency expression based on location)
    let costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        //after executing the above code block, return the result rendered as html 
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

    let html = "<ul>"
    const listFeatures = orders.map(buildOrderListItem)
    html += listFeatures.join("")
    html += "</ul>"

    return html
}

/*  export const Orders = () => {
    console.log("Orders function invoked...")

    const orders = getOrders()
    const arrayOfOptionsHTMLStrings = orders.map(
        (order) => {
            let totalCost = 0

            const foundPaintColor = paintColors.find(paintColor => paintColor.id === order.paintColorId)
            totalCost += foundPaintColor.price
            const foundInterior = interiors.find(interior => interior.id === order.interiorId)
            totalCost += foundInterior.price
            const foundTechPack = techPacks.find(techPack => techPack.id === order.techPackId)
            totalCost += foundTechPack.price
            const foundWheel = wheels.find(wheel => wheel.id === order.wheelId)
            totalCost += foundWheel.price

        }) */


/* ++++++++++++
     SAME OUTPUT, TWO APPROACHES. 
     1.)
        const foundPaintColor = paintColors.find(
            (paintColorObj) => {
                if (paintColorObj.id === paintColor.id) {
                    return true
                }
            }
        ) 
        
        OR 2.) 
        const foundPaintColor = paintColors.find(paintColor => paintColor.id === order.paintColorId)
            totalCost += foundPaintColor.price */