import { features } from "../constants";
import icecream from "../assets/icecream.png"
import stars from "../assets/stars.png"

const About = () => {
  return (
    <section id="about">
      <section className="about-section">
        <div className="about-container">
          <div className="comment-card-left">
            <div className="comment-card">
              <span>“</span>
              <p>
                “Zcoop Ice Cream is unbelievably creamy and full of flavor! Every
                scoop feels like a premium treat — my new favorite dessert.”
              </p>
            </div>
            <div className="stars">
              <img src={stars} alt="Ice Cream"/>
            </div>
          </div>

          <img className="visual" src={icecream} alt="Ice Cream"/>

            
          <div className="comment-card-right">
            <div className="about-tag">
              <h2>Happiness, one <br/>scoop at a time.</h2>
            </div>
            <div className="comment-card">
              <span>“</span>
              <p>
                “I wasn’t expecting it to be this good — the flavors are rich, the
                texture is smooth, and it tastes just like homemade but better!”
              </p>
            </div>
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
    </section>
  )
}

export default About;