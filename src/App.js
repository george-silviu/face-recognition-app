import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
function App() {
  return (
    <div className="App">
      <div
        className="topContainer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <Navigation />
      </div>

      {/* 
      <ImageLinkForm />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
