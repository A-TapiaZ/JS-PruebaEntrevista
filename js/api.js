
class API {
  
  constructor(){
  }

  async obtenerMoviesAPI(numberMovie){
 
      const url =`https://swapi.dev/api/films/${numberMovie}`

      const urlObtenerMovies= await fetch(url);

      const movies = await urlObtenerMovies.json();

      return {movies};
  }


  async consultarInfoMovie(url){
 
    const urlData= await fetch(url);

    const data = await urlData.json();

    return data
     
    }

}