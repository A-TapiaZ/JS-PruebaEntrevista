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


  mostrarResultado(data){

      const resultadoAnterior= document.querySelector('#resultado > div')
      if (resultadoAnterior) {
          resultadoAnterior.remove();
      }
            
  
      let templateHTML=`
          <div class="card bg-warning">    
              <div class="card-body text light">
                  <h2 class="card-tittle">Resultado</h2>
                  <p> Pelicula ${JSON.stringify(data.title)} 
                  <p> Planetas ${JSON.stringify(data.planets)} 
                  <p> Actores ${JSON.stringify(data.characters)} 
                  <p> Naves estelares ${JSON.stringify(data.starships)} 
      </div>
      `;


      document.querySelector('#resultado').innerHTML=templateHTML;
  }
}