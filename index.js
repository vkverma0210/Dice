var randomNumber1 = Math.ceil(Math.random() * 6);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.ceil(Math.random() * 6);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Palyer 1 Wins";
}

else if (randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Palyer 2 Wins";
}

else
{
  document.querySelector("h1").innerHTML = "Match Draw";
}
