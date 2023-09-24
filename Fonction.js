/**         Fonction
 * 
 * 
 * Declarer trois variables a="lucas" et b="gabriel" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */

let aQ="lucas";
let bBis="gabriel";
let result=checkName(a,b)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);