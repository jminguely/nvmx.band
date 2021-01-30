document.addEventListener("DOMContentLoaded", function () {
  var permArr = [],
    usedChars = [];
  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr
  };

  [...document.querySelectorAll('.fliptext')].forEach((fliptext) => {
    const words = fliptext.dataset.words.split(",");
    let i = 0;
    setInterval(() => {
      i++;
      if (i >= words.length) i = 0;
      fliptext.textContent = words[i];
    }, 100);
  });

  [...document.querySelectorAll('.flipchars')].forEach((flipchars) => {
    const letters = flipchars.dataset.letters.split("");
    const permuation = permute(letters);
    console.log(permuation);
    let i = 0;
    setInterval(() => {
      flipchars.textContent = permuation[Math.floor(Math.random() * Math.floor(permuation.length-1))].join("");
    }, 200);
  });
});
