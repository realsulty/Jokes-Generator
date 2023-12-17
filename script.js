const box = document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn');

const newJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET','https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    // Do status check .ei status code or range 
    if (this.readyState === 4) {
      if (this.status === 200) {
        box.innerHTML = JSON.parse(this.responseText).value;
      } else {
        box.innerHTML = 'Something went wrong Try again HARDER (Not funny)'
      }
    }
  }
  xhr.send();
}

jokeBtn.addEventListener('click', newJoke);
document.addEventListener('DOMContentLoaded', newJoke);