import { PaintColors } from "./PaintColors.js"
import { Interiors } from "./Interiors.js"
import { TechPacks } from "./TechPacks.js"
import { Wheels } from "./Wheels.js"
import { addCustomerOrder } from "./database.js"
import { Orders } from "./Orders.js"



document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            //orderButton is the id given to the button below
            addCustomerOrder()
        }
    }
)

export const CarBuilder = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paint_colors">
                <h2>Paint Colors</h2>
                ${ PaintColors() }
            </section>
            <section class="choices__interiors">
                <h2>Interiors</h2>
                ${ Interiors() }
            </section>
            <section class="choices__techpacks">
                <h2>Technology Packages</h2>
                ${ TechPacks() }
            </section>
            <section class="choices__wheels">
                <h2>Wheel Styles</h2>
                ${ Wheels() }
            </section>
        </article>

            <button id="orderButton">Build Your Car</button>


        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ Orders() }
        </article>
    `
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