import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigationbar";
import Banner from "./image/1.png";
import BodyContent from "./components/bodycontent";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
  
      <NavigationBar img={Banner}></NavigationBar>
      <BodyContent></BodyContent>
      <Footer></Footer>
    </div>
  );
}

export default App;