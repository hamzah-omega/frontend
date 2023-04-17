const h1 = document.querySelector('h1');
const text = h1.textContent;
let index = 0;

h1.textContent = '';

function type() {
  if (index < text.length) {
    h1.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50); // kecepatan pengetikan
  }
}

type();
