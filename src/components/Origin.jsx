import { useState } from "react";
import { flavors } from "../constants";

import botvector from "../assets/bottom-vector.png"; 
import milk from "../assets/milk.png"; 

export default function Origin() {
  const [activeFlavor, setActiveFlavor] = useState(flavors[0]);

  return (
    <section className="origin-section">

        <div className="origin-container">

            <div className="origin-info">
                <h2>Flavor's <br/> Origin</h2>
                <p>
                    We use only the freshest dairy, sun-ripened fruits, and premium chocolates, sourced for their 
                    quality and taste. Every ingredient is carefully selected to create ice cream that’s naturally 
                    flavorful, irresistibly creamy, and free from anything artificial.
                </p>
            </div>

            <div className="milk">

                <div className="milk-photo">
                    <img src={ milk } alt="red background" className="absolute h-auto lg:w-96 z-0"/>
                </div>

            </div>

        </div>

        <img src={ botvector } alt="bottom"/>

    </section>
  );
}
