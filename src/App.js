import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemList from "./components/ItemList.jsx"
import ItemCount from "./components/ItemCount.jsx"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
        <ItemList greeting="Item list en mantenimiento">
          <ItemCount/>
        </ItemList>
      </ItemListContainer>
    </div>
  );
}

export default App;

/* TO DO:
pasar componente itemlist a function
crear item list container
entregar desafio
crear y meter item.jsx en itemlist
cambiar brand por una imagen
styling navbar
*/