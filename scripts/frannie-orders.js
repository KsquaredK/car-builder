/*import { getBreads, getOrders, getProteins, getToppings, getVeggies, getOrderToppings } from "./database.js"

//indicates state at time of pageload (empty) in devtools
console.log("Orders module initialized...")

//arrays of order items
const proteins = getProteins()
const breads = getBreads()
const toppings = getToppings()
const veggies = getVeggies()

//find total cost of order
export const Orders = () => {
    //indicates function is generating an updated state in response to input
    console.log("Orders function invoked...")
    //invoking arrays whose properties are needed to define new order object
    const orderToppings = getOrderToppings()
    const orders = getOrders()

    //match order foreign keys w/ ingredient primary keys, convert (.map)
    const arrayOfOrderHTMLStrings = orders.map(
        (order) => {
            //to sum totalCost in this function, start at 0
            let totalCost = 0

            // Foreign/primary key match: protein
            //.find iterates array for a single value
            const foundProtein = proteins.find(
                //.find method takes a single object for its parameter
                (proteinObject) => {
                    //cf. foreign/primary keys
                    if (proteinObject.id === order.proteinId) {
                        return true
                    }
                }
            )
            //if above is true, add the found property's value of .price to totalCost
            totalCost += foundProtein.price

            //Foreign/primary key match: bread
            const foundBread = breads.find(b => b.id === order.breadId)
            totalCost += foundBread.price

            //Foreign/primary key match: veggies
            const foundVeggie = veggies.find(v => v.id === order.veggieId)
            totalCost += foundVeggie.price

            //Foreign/primary key match: toppings NOTE: .filter to arrive at one or more matches
            //this function will return the id integers of any matches
            const foundOrderToppings = orderToppings.filter(orderTopping => {
                return orderTopping.orderId === order.id
            })
            //this function will take the returned ids and match them to values returned as a string
            //I don't understand how this nested function returns multiple items
            const foundToppings = foundOrderToppings.map(foundOrderTopping => {
                //iterate through toppings
                const foundTopping = toppings.find(topping => {
                    //return matches
                    return topping.id === foundOrderTopping.toppingId
                })
                //this is the property value found through matching ids
                return foundTopping
            })


            // Return the HTML representation of the order
            return `
                <div class="order">
                    Order #${order.id} placed at
                    ${new Date(order.timestamp).toLocaleString()},
                    has the protein of ${foundProtein.type}
                    on a ${foundBread.type} bread
                    for a cost of ${totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })} with the toppings
                    ${foundToppings.map(foundTopping => {
                return `${foundTopping.type}`
            }).join(", ")}
                </div>
            `
        }
    )

    const html = arrayOfOrderHTMLStrings.join("")


    return html
} */