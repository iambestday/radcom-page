import "./App.scss";
import data from "./lib/data.json";
import { windows, wordpress, domain, arrow } from "./lib";

function App() {
  return (
    <div className="main-wrapper">
      <header className="header">
        <h1>خدمات رادکام</h1>
        <h2>محصولات ارائه شده توسط رادکام</h2>
      </header>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="items">
            <div className="overlay-rectangle-left"/>
            <img
              src={
                item.image === "windows"
                  ? windows
                  : item.image === "wordpress"
                  ? wordpress
                  : domain
              }
              alt={item.alt}
            />
            <h2>{item.title}</h2>
            <p className="description">{item.description}</p>
            <button>
              <div>
              {item.buttonText}</div>
              <img src={arrow} alt={"arrow"} />
            </button>
            <div className="overlay-rectangle-right"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;