let [,, ...name] = process.argv;

let finalName = name.join(' ').toUpperCase();
name = name.join('');


function cheer(letter) {
  let char = 'aeioufhlmnrsx'.includes(letter) ? 'an' : 'a';
  console.log(`Give me ${char} ${letter.toUpperCase()}!`);
}

function final(sentence, i, x) {
  setTimeout(function() {
    console.log(sentence);
  }, (1000 * (i + x)))
}


[...name].forEach( (letter, i) => {
  setTimeout(cheer, (1000 * i), name[i].toLowerCase())

  if (i === (name.length - 1)) {
    final('What does that spell?', i, 1);
    final(`${finalName}!`, i, 2);
  }
})
