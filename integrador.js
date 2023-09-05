alert("Bienvenidos al Chifa Madam Tusan")
var dinero=parseInt(prompt ("Con cuanto dinero cuenta?"))
var entrada=parseInt(prompt("Ingrese el monto de la entrada"))
console.log("La entrada cuesta", entrada)
var segundo=parseInt(prompt("Ingrese lo que cuesta el segundo"))
console.log("El segundo cuesta", segundo)
var postre=parseInt(prompt("Ingrese el costo del postre"))
console.log("El postre cuesta", postre)
var total=(postre+segundo+entrada)
console.log("El costo total es", total)
var fino=(total*18/100);
console.log("El costo total con IGV es",fino)
var vuelto= dinero-fino
console.log("EL vuelto es", vuelto)