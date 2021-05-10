const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 20.99 },
        { id: 2, color: "Midnight Blue", price: 20.99 },
        { id: 3, color: "Firebrick Red", price: 99.99 },
        { id: 4, color: "Spring Green", price: 20.99 }
    ],
    interiors: [
        { id: 1, colorType: "Beige Fabric", price: 10.99 },
        { id: 2, colorType: "Charcoal Fabric", price: 10.99 },
        { id: 3, colorType: "White Leather", price: 249.99 },
        { id: 4, colorType: "Black Leather", price: 219.99 }
    ],
    techPacks: [
        { id: 1, type: "Basic", price: 299.99 },
        { id: 2, type: "Navigation Package (includes integrated navigation controls)", price: 699.99 },
        { id: 3, type: "Visibility Package (includes side and rear cameras)", price: 699.99 },
        { id: 4, type: "Ultra Package (includes navigation and visibility packages)", price: 999.99 }
    ],
    wheels: [
        { id: 1, sizeType: "17-inch Pair Radial", price: 199.99 },
        { id: 2, sizeType: "17-inch Pair Radial Black", price: 269.99 },
        { id: 3, sizeType: "18-inch Pair Spoke Silver", price: 349.99 },
        { id: 4, sizeType: "18-inch Pair Spoke Black", price: 379.99 },
    ],
    customOrders: [{
        id: 1,
        paintColorId: 3,
        interiorId: 2,
        techPackId: 3,
        wheelId: 4,
        timestamp: 1620059468223,
    }],
    //object that holds transient state (current user's input)
    orderBuilder: {}

}

// set
export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = parseInt(id)
}
export const setTechPack = (id) => {
    database.orderBuilder.techPackId = id
}
export const setWheel = (id) => {
        database.orderBuilder.wheelId = id
    }
    // get
export const getPaintColors = () => {
    return [...database.paintColors]
}
export const getInteriors = () => {
    return [...database.interiors]
}
export const getTechPacks = () => {
    return [...database.techPacks]
}
export const getWheels = () => {
    return [...database.wheels]
}
export const getOrders = () => {
    return [...database.customOrders]
}

export const addCustomerOrder = () => {
    // make a copy of current state of user choices
    const newOrder = {...database.orderBuilder }
        // assign new primary key, one higher than the last one in the array
    newOrder.id = [...database.customOrders].pop().id + 1
        //assign value of current date to timestamp property
    newOrder.timestamp = Date.now()
        //push this newly defined object into orders array
    database.customOrders.push(newOrder)
        // clear the orderBuilder object of temp data for next state (data from user input)
    database.orderBuilder = {}
        //notify other modules of change of state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}