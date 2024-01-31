import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent label="Click Here!" />
        <ImageComponent
          imageSrc="https://www.placekitten.com/300/300"
          altText="kitten"
        />
        <ImageComponent
          imageSrc="http://placekitten.com/300/300"
          altText="cute kitten image"
        />
        <ButtonComponent label="Prova second button" />
      </header>
    </div>
  );
}

export default App;
