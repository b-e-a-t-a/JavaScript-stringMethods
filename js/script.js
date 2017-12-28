
/*var txt = 'Lorem ipsum dolor sit amet';
console.log(txt.length);

var txt ='Example';
console.log( txt.charAt(4) );


var txt = 'Lorem ipsum dolor sit amet';
var indexDolor = txt.indexOf('dolor');
if (indexDolor == -1) {
  console.log('Dolor does not appear in the txt');
} else {
  console.log(txt[indexDolor]);
}


var motto = 'Good friends are loyal people';
var partOfMotto = motto.slice(5,11);
console.log(partOfMotto);

var motto = 'Good friends are loyal people';
partOfMotto = motto.slice(-12,-7);
console.log(partOfMotto);

var motto = 'The rest is silence';
var mottoCharsAfter = motto.substr(11, 8);
console.log(mottoCharsAfter);

var motto = 'Never give up on what you really want to do';
var mottoCharsAfter = motto.replace('do', 'have');
console.log(mottoCharsAfter);

var name = 'John Doe';
var nameUpperCased = name.toUpperCase();
console.log(nameUpperCased);

var text = 'BeTTer lATe THAN neveR';
if ( text.toLowerCase().indexOf('late') != -1 ) {
    console.log('Sentence contains word - late')
}

var keywords = 'red, green, blue, yellow, pink, orange, white';
var keywordsArray = keywords.split(', ');
keywordsArray.map( function(element) {
console.log('#tag-' + element);

} );*/

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textChanged = text.replace('Velociraptor', dinosaurUpperCased);
var halfOfText = textChanged.slice(0,72);

//console.log(text);
//console.log(dinosaurUpperCased);
//console.log(textChanged);
//console.log(textChanged.length/2);
console.log(halfOfText);