//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function() {
    let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    return days;
}

//Exercice 2 : Retouner le 3ème élément du tableau days', function() {
let returnThirdElement = function(array) {
    return array[2];
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function(array) {
    return array[3];
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function(array) {
    array[1] = "php"
    return array;
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function(array) {
    array.push('ruby', 'python');
    return array;

}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function(array) {
    array.unshift('html', 'css');
    return array;
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function(array) {
    array.shift();
    return array;
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function(array) {
    array.pop();
    return array;
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function() {
    // On peut le créer en assignant un littéral à une variable.
    // Contrairement au tableau simple, on utilise des accolades plutôt que des crochets.
    person = { name: 'Jean', age: 45, city: 'Paris' };
    return person;
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function(array) {
    // La propriété function.name est une propriété en lecture seule qui renvoie le nom de la fonction courante ou "anonymous" si celle-ci a été créée de façon anonyme.
    return array.name;
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function(array) {
    let name = array.name;
    let age = array.age;
    let city = array.city;

    return 'Bonjour, je suis ' + name + '.' + ' J\'ai ' + age + ' ans et j\'habite ' + city + '.';
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function(string) {
    // Séparateur : Paramètre optionnel qui définit le ou les caractères à utiliser pour scinder la chaîne. Le séparateur est considéré comme une chaîne ou une expression rationnelle. Si le séparateur est omis ou qu'il n'apparaît pas dans la chaîne, le tableau retourné contiendra un unique élément contenant la chaîne entière. Si le séparateur est une chaîne vide, la chaîne str sera convertie en un tableau dont les éléments seront les caractères de la chaîne. Si le séparateur contient un ou plusieurs caractères, la chaîne de caractères entière doit être trouvée pour effectuer une césure.
    // Ici le séparateur est la virgule
    return string.split(',');
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function(array) {
    // La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.
    array.sort();
    return array;
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function(array) {
    // La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
    return array.join();
}