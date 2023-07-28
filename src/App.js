import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="lines" bg={true} num={2000} />
      <div
        className="topContainer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <Navigation />
      </div>
      <Rank />
      <ImageLinkForm />
      {/* 
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
