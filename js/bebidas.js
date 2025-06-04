const productos = [
'Agua',
'Café',
'Té',
'Zumo Natural',
'Refresco',
'Cerveza',
'Sidra',
'Sake',
'Whisky',
'Vodka',
'Ron',
'Ginebra',
'Tequila',
'Brandy',
'Cachaça',
'Licores',
'Limoncello',
'Amaretto',
'Baileys',
'Kahlúa',
'Cointreau',
'Pacharán',
'Anís',
'Oporto',
'Jerez',
'Madeira',
'Marsala',
'Cócteles',
'Mojito',
'Cosmopolitan',
'Margarita',
'Martini',
'Negroni',
'Daiquiri',
'Piña Colada',
'Vermouth',
'Hidromiel',
] 


 function verificarBebida() {
      
  let bebidaSeleccionada = document.querySelector('input[name="bebida"]:checked');
      SELECCION.innerHTML = bebidaSeleccionada
        ? `Usted ha seleccionado: ${bebidaSeleccionada.value}`
        : "No ha seleccionado ninguna bebida.";


    }
