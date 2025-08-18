import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71a9EhFOjZL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={"123456789"}
            title="Nintendo Switch 2 Console"
            image="https://m.media-amazon.com/images/I/71Z6INg6htL._AC_SX450_.jpg"
            price={430}
            rating={5}
          />
          <Product
            id={"124532123"}
            title="Oral-B Pro Cross Action Original Electric Toothbrush Head, X-Shape and Angled Bristles for Deeper Plaque Removal, Pack of 12 Toothbrush Heads, Suitable for Mailbox, White"
            image="https://m.media-amazon.com/images/I/81LTENIOzoL._AC_SX425_.jpg"
            price={99.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={"987654321"}
            title="Lay-Z-Spa 60025 Helsinki Hot Tub, 180 AirJet Wood Effect Inflatable Spa with Freeze Shield Year Round Technology and Rapid Heating, 5-7 Person"
            image="https://m.media-amazon.com/images/I/61R3t-8rJjL._AC_SY450_.jpg"
            price={529.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={"123123123"}
            title="Philips Dual Basket Airfryer 3000 Series, 9L, 2 Drawer Air Fryer, with Breakfast Kit, Rapid Air Technology, Versatile Large Air Fryer for Family, 99% Less fat and Energy Saving, HomeID App (NA350/03)"
            image="https://m.media-amazon.com/images/I/61+231b6jbL._AC_SY450_.jpg"
            price={129}
            rating={4}
          />
          <Product
            id={"456456456"}
            title="Oral-B iO 3 Matt Black Ultimate Clean Electric Toothbrush, 1 Refill Holder, 1 Charger Pouch, 1 Travel Case, Designed by Braun, Packaging May Vary"
            image="https://m.media-amazon.com/images/I/81hTqOqisQL._AC_SY450_.jpg"
            price={19.99}
            rating={3}
          />
          <Product
            id={"789789789"}
            title="Wreckfest - PlayStation 5"
            image="https://m.media-amazon.com/images/I/81JMHZGy9CL._AC_SX466_.jpg"
            price={39.99}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
