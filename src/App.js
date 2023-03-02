import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./Router.js";


function App() {
  return (
    <div className="home">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
