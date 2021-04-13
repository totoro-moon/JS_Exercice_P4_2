// fonction du tableau + affichage dans le texte
var tableau = ['PHP', 'JavaScript', 'HTML', 'CSS', 'JAVA', 'Bootstrap'];
document.getElementById('text').innerHTML = tableau;
// fonction qui rajoute la nouvelle donnée au début du tableau (unshift) et affiche une alerte de l'ajout
function addValue() {
   var inputValue = document.getElementById('valeur').value;
   var addTableau = tableau.unshift(inputValue);
   alert(inputValue + ' ' + 'ajouté au tableau');
   console.log(tableau);
};
// fonction qui affiche la nouvelle valeur du tableau et qui l'affiche dans l'alerte et dans le texte
function showArray() {
   var displayTableau = document.getElementById('valeur').value;
   document.getElementById('text').innerHTML = tableau;
   alert(tableau);
}







