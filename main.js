// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
//const notes = [];
//keys.forEach(function(key){
  //notes.push(document.getElementById(key));
  //eval(`const ${key.substring(0,1)}_key = document.getElementById(key)`);
//})
const c_key = document.getElementById('c-key');
const d_key = document.getElementById('d-key');
const e_key = document.getElementById('e-key');
const f_key = document.getElementById('f-key');
const g_key = document.getElementById('g-key');
const a_key = document.getElementById('a-key');
const b_key = document.getElementById('b-key');
const high_c_key = document.getElementById('high-c-key');
const c_sharp_key = document.getElementById('c-sharp-key');
const d_sharp_key = document.getElementById('d-sharp-key');
const f_sharp_key = document.getElementById('f-sharp-key');
const g_sharp_key = document.getElementById('g-sharp-key');
const a_sharp_key = document.getElementById('a-sharp-key');
//console.log(`The notes are ${notes}`);
//const c_key = document.getElementById('c-key');

//Write named functions that change the color of the keys below
function keyPlay() {
    event.target.style.backgroundColor = 'blue';
    //note.style.backgroundColor = 'blue';
} 

function keyReturn () {
    event.target.style.backgroundColor = '';
    //note.style.backgroundColor = '';
}

// Write a named function with event handler properties
// function handleKey() {
//     event.target.addEventListener('mousedown',keyPlay);
//     event.target.addEventListener('mouseup',keyReturn);
// //    console.log(`${note.getAttribute('id')} has ${getEventListeners(document.getElementById(note))}`);
// }

// Write a loop that runs the array elements through the function
// notes.forEach((note) => {
//    note.addEventListener('mousedown', event => keyPlay(event));
//    note.addEventListener('mouseup', event => keyReturn(event));
//    //console.log(`${note.getAttribute('id')} has ${getEventListeners(document.getElementById(note))}`);
//     //note.onmousedown = () => keyPlay(note);
//     //note.onmouseup = () => keyReturn(note);
// });
//for (i = 0; i < notes.length; i++ ) {
//    notes[i].addEventListener('mousedown', event => event.target.style.backgroundColor = 'blue');
//    notes[i].addEventListener('mouseup', event => event.target.style.backgroundColor = '');
//   notes[i].onmousedown(event => event.target.style.backgroundColor = 'blue');
//   notes[i].onmouseup(event => event.target.style.backgroundColor = '');
//    console.log(notes[i]);
//}

// c_key.onmousedown = () => {
//     c_key.style.backgroundColor = 'blue';
//     console.log('Mousedown event fired');
// }
// c_key.onclick = () => {
//     c_key.style.backgroundColor = '';
//     console.log('Mouseup event fired');
// }
//document.getElementById("c-key").addEventListener('mouseover', keyPlay);
// c_key.addEventListener('mouseover', keyPlay);
// c_key.addEventListener('mouseout', keyReturn);
c_key.addEventListener('mousedown', keyPlay);
c_key.addEventListener('mouseup', keyReturn);
d_key.addEventListener('mousedown', keyPlay);
d_key.addEventListener('mouseup', keyReturn);
e_key.addEventListener('mousedown', keyPlay);
e_key.addEventListener('mouseup', keyReturn);
f_key.addEventListener('mousedown', keyPlay);
f_key.addEventListener('mouseup', keyReturn);
g_key.addEventListener('mousedown', keyPlay);
g_key.addEventListener('mouseup', keyReturn);
a_key.addEventListener('mousedown', keyPlay);
a_key.addEventListener('mouseup', keyReturn);
b_key.addEventListener('mousedown', keyPlay);
b_key.addEventListener('mouseup', keyReturn);
high_c_key.addEventListener('mousedown', keyPlay);
high_c_key.addEventListener('mouseup', keyReturn);
c_sharp_key.addEventListener('mousedown', keyPlay);
c_sharp_key.addEventListener('mouseup', keyReturn);
d_sharp_key.addEventListener('mousedown', keyPlay);
d_sharp_key.addEventListener('mouseup', keyReturn);
f_sharp_key.addEventListener('mousedown', keyPlay);
f_sharp_key.addEventListener('mouseup', keyReturn);
g_sharp_key.addEventListener('mousedown', keyPlay);
g_sharp_key.addEventListener('mouseup', keyReturn);
a_sharp_key.addEventListener('mousedown', keyPlay);
a_sharp_key.addEventListener('mouseup', keyReturn);

//c_key.addEventListener('mousedown',() => c_key.style.backgroundColor = 'blue');
//c_key.addEventListener('mousedown', () => keyPlay(c_key));
//c_key.addEventListener('mousedown', () => c_key.style.backgroundColor = 'blue');
//c_key.addEventListener('mouseup', keyReturn);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}