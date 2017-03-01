let [,, ...name] = process.argv;

let finalName = name.join(' ').toUpperCase();
name = name.join('');


function cheer(letter) {
  let char = 'aeioufhlmnrsx'.includes(letter) ? 'an' : 'a';
  console.log(`Give me ${char} ${letter.toUpperCase()}!`);
}


[...name].forEach( (letter, i) => {
  setTimeout(cheer, (1000 * i), name[i].toLowerCase())

  if (i === (name.length - 1)) {
    setTimeout(function() {
      console.log('What does that spell?');
    }, (1000 * (i + 1)))
    setTimeout(function() {
      console.log(`${finalName}!`);
    }, (1000 * (i + 2)))
  }
})
