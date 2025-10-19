import { useState } from "react";
import { flavors } from "../constants";
import { ShoppingBasket } from "lucide-react"

import topvector from "../assets/top-vector.png"; 
import redbox from "../assets/red-box.png"; 
import tag from "../assets/tag.png"; 

export default function Discover({ onAddToCart }) {
  const [activeFlavor, setActiveFlavor] = useState(flavors[0]);

  return (
    <section id="discover">
        <section className="discover-section">

            <img src={ topvector } alt="top"/>

            <div className="discover-container">

                <div className="flavor-list">
                    <h2>Discover</h2>
                    {flavors.map((flavor, index) => (
                        <button key={ index } onClick={() => setActiveFlavor(flavor)}
                            className={`text-start cursor-pointer transition hover:text-[#A20100] ${
                                activeFlavor.name === flavor.name
                                ? "text-[#A20100]"
                                : "text-"
                            }`}>
                            { flavor.name }
                        </button>
                    ))}
                </div>

                <div className="flavor">

                    <img src={ redbox } alt="red background" className="absolute w-72 lg:w-96 z-0"/>
                    <img src={ activeFlavor.image } alt={ activeFlavor.name } className="relative z-10 w-64 lg:w-80"/>

                    <div className="add-btn cursor-pointer" onClick={() => onAddToCart(activeFlavor)}>
                        <span className="text-[#241C1C] text-2xl"><ShoppingBasket /></span>
                    </div>

                </div>

                <div className="details-container">

                    <h2>Details</h2>
                    <p>{ activeFlavor.description }</p>

                    <div className="tag-card">
                        <img src={ tag } alt="tag" className="w-full" />
                        <div className="tag-content">
                            <span>{ activeFlavor.nutrition.calories }</span>
                            <span>{ activeFlavor.nutrition.fat }</span>
                            <span>{ activeFlavor.nutrition.protein }</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </section>
  );
}
