console.log('Hello stack DS world in ES6+\n')

let a = [] // Se crea un array vacío llamado 'a'

a.push('a') // Se agrega el elemento 'a' al array 'a'
console.log(a) // Se imprime el array: ['a']

a.push('b') // Se agrega el elemento 'b' al array 'a'
console.log(a) // Se imprime el array: ['a', 'b']

a.push('d') // Se agrega el elemento 'd' al array 'a'
console.log(a) // Se imprime el array: ['a', 'b', 'd']

a.forEach(k => console.log(k)) // Se realiza un ciclo forEach para imprimir cada elemento del array en líneas separadas

a.pop() // Se remueve el último elemento del array 'a' ('d')
console.log(a) // Se imprime el array después de la operación de pop: ['a', 'b']

a.pop() // Se remueve el último elemento del array 'a' ('b')
console.log(a) // Se imprime el array después de la operación de pop: ['a']
console.log(a.length) // Se imprime la longitud actual del array 'a' (1)

a.pop() // Se remueve el último elemento del array 'a' ('a')
console.log(a) // Se imprime el array después de la operación de pop: []
console.log(a.length) // Se imprime la longitud actual del array 'a' (0)
