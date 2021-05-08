import { addCustomerOrder } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) = () => {
        if (clickEvent.target.id === "orderButton") {
            const completeCustomerOrder = addCustomerOrder()

            if (!completeCustomerOrder) {
                window.alert("Please select one option each from all four categories for your car.")
            }
        }
    }
)

export const OrderButton = () => {
    return `
    <button id="orderButton">Submit Order</button>
    `
}


/*  import { addCustomerOrder } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "submitOrderButton"){
            const customerOrderSuccess = addNewCustomerOrder()

            if(!customerOrderSuccess){
                window.alert("Your order is incomplete! Please choose from all options.")
            }
        }
    }
)

export const SubmitOrderButton = () => {
    return `
        <button id="submitOrderButton">Submit Order</button>
    `
} */