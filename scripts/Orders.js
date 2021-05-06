import { getPaintColors, getInteriors, getTechPacks, getWheels, getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    const paintColors = getPaintColors()
    const interiors = getInteriors()
    const techPacks = getTechPacks()
    const wheels = getWheels()


    const foundPaintColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
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

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
Order #${order.id} cost ${costString}, and was placed on ${order.timestamp}</li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const ArrayoflistItems = orders.map((orderObj) => {
        const singularListItemHtml = buildOrderListItem(orderObj)
        return singularListItemHtml
    })
    html += ArrayoflistItems.join("")
    html += "</ul>"

    return html
}