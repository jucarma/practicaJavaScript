
# Práctica del módulo de JavaScript 

## Partimos de un fichero con una serie de valores.
Después de leer el fichero y separar cada uno de ellos, comprobamos si son números arábigos, romanos o ninguna da ambas
Convertimos los números al sistema contrario al que vienen
Grabamos el resultado en un nuevo fichero.
Sólo se contemplan números entre el 1 y el 3999

- Los símbolos I, X, C y M se pueden repetir hasta tres veces.
- Los símbolos V, L y D no pueden repetirse.
- Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual
- Los símbolos I, X y C se restan si están a la izquierda de otro mayor y 
solamente pueden anteponerse a los dos símbolos que les siguen en la sucesión
- I se resta de V y X
- X se resta de L y C
- C se resta de D y M
- Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.

## En entradaDatos.json podemos insertar distintos valores, para ejecutarlo, solo debemos poner
node index.mjs en el terminal, los datos quedan guardados en sus respectivos directorios según sean
romanos o arábicos.