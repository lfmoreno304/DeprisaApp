import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Logo from "./Assets/Logo.png";
import './App.css';

function App() {
  var mensaje = "BIENVENIDOS A LA MEJOR OPCION DE MENSAJERIA"
  return (
    <div className="App">
      <Header />
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <h1 className="text-center text-warning pt-5">{mensaje}</h1>
          </div>
          <div className="col">
            <img src={Logo} className="rounded mx-auto d-block" alt="Logo" width="300" height="300" />
          </div>
        </div>
        <div className="container mx-auto pt-3">
          <h2 className="text-center text-primary">Conectando personas a través de la confianza</h2>
          <hr className="mx-5"></hr>
          <p className="text-center">Creemos que un mundo conectado es
            un mundo mejor, y esa creencia guia cualquier cosa que hacemos</p>
        </div>
        <div class="d-grid gap-2 col-2 mx-auto pb-3 pt-4">
        <input className="btn btn-primary btn-lg" type="button" value="Rastrear tu envio"></input>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
