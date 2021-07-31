import NavBar from "./components/NavBar.jsx"
import ItemList from "./components/ItemList.jsx"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList greeting="¡Bienvenidos a nuestra App!"/>
    </div>
  );
}

export default App;