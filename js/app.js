const starWarsFetch = new API();
const ui=new Interfaz();


const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const movieNumber= document.getElementById('movie');
  const movieNumberSelect= movieNumber.options[movieNumber.selectedIndex].value;


  starWarsFetch.obtenerMoviesAPI(movieNumberSelect)
    .then((data) => {
      ui.mostrarResultado(data.movies);  
      console.log(data.movies);
    })
    .catch((err) => {
      console.log(err);
    }
    )

})