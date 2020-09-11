
class API {
  
  constructor(){
  }

  async obtenerMoviesAPI(numberMovie){
 
      const url =`https://swapi.dev/api/films/${numberMovie}`

      const urlObtenerMovies= await fetch(url);

      const movies = await urlObtenerMovies.json();
      return {movies};
  }

  async obtenerValores(URL){
      
      const urlFetch= await fetch(URL);

      const resultado = await urlFetch.json();

      return {resultado}
  }
}