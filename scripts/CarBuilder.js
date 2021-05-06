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