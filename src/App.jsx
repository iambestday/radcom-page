import "./App.scss";
import data from "./lib/data.json";
import { windows, wordpress, domain } from "./lib";

function App() {
  return (
    <div className="main-wrapper">
      <header className="header">
        <h1>خدمات رادکام</h1>
        <h2>محصولات ارائه شده توسط رادکام</h2>
      </header>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="div-with-border">
            <h2>{item.title}</h2>
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
            <p>{item.description}</p>
            <button>{item.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
