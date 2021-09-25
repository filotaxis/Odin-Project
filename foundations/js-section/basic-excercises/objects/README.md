Notas de methodos 
# Objects and arrays

## Filter

`Array.filter()` crea un nuevo array con los elementos que cumplan la condición por la función dada.

> Usar *filter* cuando queremos seleccionar un **subconjunto** del array

```javascript
const method1 = ["hola", "bola", "holabola", "holitaBolita"];

// con filter
const method1 = words.filter(word => word.length > 4);

// con forEach
let method2 = [];
words.forEach(word => {
    if (word.length > 4) { 
        method2.push(word) 
    };
});

//ciclo tradicional
let method3 = [];
for (let i = 0; i < words.length; i++){
    if (words[i].length > 4) {
        method3.push(words[i]);
    };
};

```

## Map

`Array.map()` crea un nuevo array con los resultados de la función indicada aplicada a cada uno de los elementos.

> Usar *map* cuando queremos **transformar** los elementos de un array

