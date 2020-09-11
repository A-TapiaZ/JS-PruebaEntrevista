
class Interfaz{

  mostrarMensaje(mensaje,clases){
      
      const div =document.createElement('div');
      div.className=clases;
      div.appendChild(document.createTextNode(mensaje));


      const divmensaje= document.getElementsByClassName('mensajes')[0];

      divmensaje.appendChild(div);
      

      setTimeout(() => {
          document.querySelector('.mensajes div').remove();
      }, 3000);    
  
  }


  async mostrarResultado(data){

      const resultadoAnterior= document.querySelector('#resultado > div')
      if (resultadoAnterior) {
          resultadoAnterior.remove();
      }
        
      const {title,planets,characters,starships}=data;
      
      const resultDiv=document.querySelector('#resultado');
      
      
      /**NOMBRE PELICULA */
        resultDiv.innerHTML+= `<h1> NOMBRE PELICULA: ${title} </h1><br>`


      /*********************PLANETAS */
      const promises = planets.map( async (planet) => {
        const response = await starWarsFetch.consultarInfoMovie(planet);

        return response;
      })

      const results= await Promise.all(promises);


      resultDiv.innerHTML+= `<h1> PLANETAS </h1><br>`
      results.forEach(({name,terrain,gravity,diameter,population}) => {
          resultDiv.innerHTML+= `
            <p> Nombre: ${name} </p>
            <p> Terreno: ${terrain} </p>
            <p> Gravedad: ${gravity} </p>
            <p> Diametro: ${diameter} </p>
            <p> Poblacion: ${population} </p><br>
            `;
      });

      /*********************CHARACTERS */
      const promises2 = characters.map( async (character) => {
        const response = await starWarsFetch.consultarInfoMovie(character);

        return response;
      })

      const results2= await Promise.all(promises2);


      resultDiv.innerHTML+= `<h1> Characters </h1><br>`
      results2.forEach(async ({name,gender,hair_color,skin_color,eye_color,height,homeworld}) => {


        const provincia =await starWarsFetch.consultarInfoMovie(homeworld)
        .then((result) => {
            return result
        })

          resultDiv.innerHTML+= `
            <p> name: ${name} </p>
            <p> gender: ${gender} </p>
            <p> hair_color: ${hair_color} </p>
            <p> skin_color: ${skin_color} </p>
            <p> eye_color: ${eye_color} </p>
            <p> height: ${height} </p>
            <p> homeworld: ${JSON.stringify(provincia.name)} </p><br>
            `;
      });

      /*********************STARSHIPS */
      const promises3 = starships.map( async (starship) => {
        const response = await starWarsFetch.consultarInfoMovie(starship);

        return response;
      })

      const results3= await Promise.all(promises3);

      resultDiv.innerHTML+= `<h1> starships </h1><br>`
      results3.forEach(({name,model,manufacturer,passengers}) => {
          resultDiv.innerHTML+= `
            <p> Nombre: ${name} </p>
            <p> model: ${model} </p>
            <p> manufacturer: ${manufacturer} </p>
            <p> passengers: ${passengers} </p><br>
            `;
      });





  }
}