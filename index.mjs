import * as fs from 'fs'

function convertirRomano(n) {
    var
        resultado = [],
        valores = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		numero, insertar, letra, valores, posicion
    if (n <= 0 || n >= 3999) {
        console.log ('Numero no valido')
        return n;
    } else {
	 for(var i = 6; numero = valores[i], letra = letras[i]; i--) {
		if(n >= numero) {
			var r = Math.floor(n / numero);
			n -= r * numero; 
			if(r < 4){
				while(r--){
					resultado.push(letra);
				}
			} else {
				valores = resultado.pop(); 
				posicion = (valores ? letras.indexOf(valores) : i) + 1; 
				insertar = letra + (letras[posicion] || 'M'); 
				resultado.push(insertar);
			}
		} else {
			resultado.push('');
	 	}
	 }
    return resultado.join('');
    }
}

function convertirArabigo(roman) {
    var letras = [' ','I','V','X','L','C','D','M']
    var valores = [0,1,5,10,50,100,500,1000]
    var anterior = 0;
    var suma = 0;
    var letra = ' ';
    if (/DD|LL|CCC|MMM|VV|XXX|III|[^IVXLCDM]|V[XLCDM]|L[CDM]|DM/.test(roman)){
     console.log ('Romano no valido')
     return roman; 
    } else {
     for( var i = 0; i < roman.length; i++) {
      letra = roman.charAt(i);
     
      for(var j = 0; j < letras.length; j++){
        if(letra == letras[j]){                
            suma = suma + valores [j]; 
            
            if( anterior < valores[j]){ 
                suma = suma - anterior*2 ; 
                anterior = valores[j]; 
               
            }else {
                anterior = valores[j];
            }
        
        }              
    
      }
     }
    }
    return suma;
}
var data = fs.readFileSync('entradaDatos.json', 'utf-8');
var num = JSON.parse(data).numero;
console.log (`Convertimos ${num}`)
for(let i=0; i<num.length; i++){
  if (isNaN (num[i])){
    console.log (num [i]);
    var arabico  = convertirArabigo(num[i]);
    console.log (arabico);
    fs.writeFileSync("./salidaArab.json", JSON.stringify ({ numero : [arabico]}));
    console.log("Ok");
        
  } else{
    console.log (num [i]);
    var romano = convertirRomano(num[i]);
    console.log (romano);
    fs.writeFileSync("./salidaRoman.json", JSON.stringify ({numero: [romano]}));
    console.log("Ok");
     
  }
}
