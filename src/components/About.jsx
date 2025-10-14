import { features } from "../constants";
import milk from "../assets/milk.png"

const About = () => {
  return (
     <section className="about-section">
      
      <div className="text-center">
        <h2>Happiness, one scoop at a time.</h2>
      </div>

      <div className="about-container">
        <div className="comment-card-left">
          <span>“</span>
          <p>
            “Zcoop Ice Cream is unbelievably creamy and full of flavor! Every
            scoop feels like a premium treat — my new favorite dessert.”
          </p>
        </div>

        <img src={milk} alt="Ice Cream"/>

        <div className="comment-card-right">
          <span>“</span>
          <p>
            “I wasn’t expecting it to be this good — the flavors are rich, the
            texture is smooth, and it tastes just like homemade but better!”
          </p>
        </div>
      </div>

      <div className="features-card">

        {features.map((feature, index) => (
          <div key={index} className="features">
            <div className="text-3xl mb-3">{ feature.icon }</div>
            <p>{ feature.description }</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default About;