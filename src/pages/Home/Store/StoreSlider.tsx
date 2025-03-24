import TShirtCard from "./TShirtCard";
import TShirt1 from "../../../assets/images/shop-skull.png";
import TShirt2 from "../../../assets/images/shop-gorilla.png";
import TShirt3 from "../../../assets/images/shop-sharks.png";
import TShirt4 from "../../../assets/images/shop-fire.png";
import TShirt5 from "../../../assets/images/shop-death.png";
import TShirt6 from "../../../assets/images/shop-tour.png";

function StoreSlider() {
  return (
    <article style={{ padding: "12px" }}>
      <div>
        {/* Card 1 */}
        <TShirtCard title="Perennial" price={21.99} img={TShirt1} />
      </div>

      <div>
        {/* Card 2 */}
        <TShirtCard title="Ape" price={18.69} img={TShirt2} />
      </div>

      <div>
        {/* Card 3 */}
        <TShirtCard title="Pisces" price={24.79} img={TShirt3} />
      </div>

      <div>
        {/* Card 4 */}
        <TShirtCard title="Noha" price={23.95} img={TShirt4} />
      </div>
      <div>
        {/* Card 5 */}
        <TShirtCard title="True Believer" price={23.95} img={TShirt5} />
      </div>
      <div>
        {/* Card 6 */}
        <TShirtCard title="Cloud Factory" price={19.99} img={TShirt6} />
      </div>
    </article>
  );
}

export default StoreSlider;
