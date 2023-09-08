
var metros2 = 200;

var kilometro = metros2 / 1000 ;
var centimetro = metros2 * 100; 

console.log(kilometro)
console.log(centimetro)


function conversorUnidades(metros) {
  var kilometro = metros / 1000 ;
  var centimetro = metros * 100; 
  var pulgada = metros * 39.3701; 
  var pie = metros * 3.28 ; 
  var decametro = metros / 10; 
  
  return{
    metros: metros,
    kilometros: kilometro,
    decametros: decametro,
    centimetros: centimetro,
    pulgadas: pulgada,
    pies: pie
    
  };
}

var resultados = conversorUnidades(metros2);

console.log("Valor en Kilometros: " + resultados.kilometros)
console.log("Valor en Metros: " + resultados.metros)
console.log("Valor en Decametros: " + resultados.decametros)
console.log("Valor en Centimetros: " + resultados.centimetros)
console.log("Valor en Pies: " + resultados.pies)
console.log("Valor en Pulgadas: " + resultados.pulgadas)


function conversor2(valor, unidadDesde, unidadHacia) {
    const factores = {
      metros: 1,
      kilometros: 0.001
    };
    if (factores.hasOwnProperty(unidadDesde) && factores.hasOwnProperty(unidadHacia)) {
      const factorConversion = factores[unidadHacia] / factores[unidadDesde];
      const resultado = valor * factorConversion;
      return resultado;
    } else {
      return "Unidades no validas"
    }
  }
  
  let valorConvertir = 5; 
  let unidadDesde = "kilometros";
  let unidadHacia = "metros";
  
  const resultado = conversor2(valorConvertir, unidadDesde, unidadHacia);
  console.log(valorConvertir + " " + unidadDesde + " son equivalentes a " + resultado + " " + unidadHacia)