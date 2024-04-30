import "./App.scss";
import data from "./lib/data.json";
import { windows, wordpress, domain, arrow } from "./lib";

function App() {
  return (
    <div className="main-wrapper">
      <header className="header">
        <h1 className="header__title">خدمات رادکام</h1>
        <h2 className="header__subtitle">محصولات ارائه شده توسط رادکام</h2>
      </header>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="items">
            <div className="overlay-rectangle-left"></div>
            <img
              src={
                item.image === "windows"
                  ? windows
                  : item.image === "wordpress"
                  ? wordpress
                  : domain
              }
              alt={item.alt}
              className="items__image"
            />
            <h2 className="items__title">{item.title}</h2>
            <p className="items__description">{item.description}</p>
            <button className="items__button">
              <div>{item.buttonText}</div>
              <img src={arrow} alt="arrow" className="items__button-icon" />
            </button>
            <div className="overlay-rectangle-right"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
