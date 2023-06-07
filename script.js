const age = 14;
let score = 20;

document.querySelector(".btn-again").addEventListener("click", function () {
  location.replace(location.href);
});

document.querySelector(".btn-check").addEventListener("click", function () {
  const guessedNumber = Number(document.getElementById("guess").value);
  if (!guessedNumber) {
    const Vnumber = "Number"
    document.querySelector(".InfoText").textContent = `Enter a valid ${Vnumber}`;
    score--;
  } else if (guessedNumber > age) {
    document.querySelector(".InfoText").textContent =
      "You'r guess is higher than my age";
    score--;
  } else if (guessedNumber < age) {
    document.querySelector(".InfoText").textContent =
      "You'r guess is lower than my age";
    score--;
  } else if (guessedNumber === age) {
    document.querySelector(".InfoText").textContent =
      "CONGRATTSS!! You Finally Won";
    document.querySelector(".InfoText").style.color = "#F3F9A7";
  }
  document.querySelector(".p-score").textContent = "🔴 Your score : " + score;
  document.querySelector(".p-score").style.fontWeight = "bold";
  if (score === 0) {
    window.location.assign("../photoshop/img.htm");
  }
});

// Responsive changes
window.addEventListener('resize', function() {
  const width = window.innerWidth;
  
  if (width <= 768) {
    document.querySelector('h1').style.left = '30%';
    document.querySelector('h1').style.top = '5%';
    document.querySelector('.btn-again').style.fontSize = '14px';
    document.querySelector('.Qmark').style.fontSize = '50px';
    document.querySelector('.div-border').style.top = '45%';
    document.querySelector('.mn-footer').style.top = '90%';
    document.querySelector('.mn-footer').style.left = '16%';
    document.querySelector('.InfoText').style.fontSize = '16px';
    document.querySelector('.p-score').style.left = '35%';
    document.querySelector('.p-score').style.marginLeft = '0';
  } else {
    document.querySelector('h1').style.left = '39%';
    document.querySelector('h1').style.top = '10%';
    document.querySelector('.btn-again').style.fontSize = '15px';
    document.querySelector('.Qmark').style.fontSize = '69px';
    document.querySelector('.div-border').style.top = '41%';
    document.querySelector('.mn-footer').style.top = '78%';
    document.querySelector('.mn-footer').style.left = '24%';
    document.querySelector('.InfoText').style.fontSize = '20px';
    document.querySelector('.p-score').style.left = '40%';
    document.querySelector('.p-score').style.marginLeft = '2px';
  }
});