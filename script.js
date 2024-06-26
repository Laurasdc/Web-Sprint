window.onload = function() {
  alert("Bem-vindo a SustenRace!");
  var nome = prompt("Por favor, insira seu nome:");
  if(nome) {
    alert("Olá, " + nome + "! Obrigado por visitar nosso site.");
  }
};

var imageURLs = ['assets/imagem carro.svg', 'assets/imagem carro 2.jpg', 'assets/imagem carro 3.png'];

var carroCarrosel = document.getElementById('carroCarrosel');

imageURLs.forEach(function(imageURL, index) {
  var img = document.createElement('img');
  img.src = imageURL;
  img.style.width = '295.18px';
  img.style.height = '172.03px';
  img.style.display = index === 0 ? 'block' : 'none';
  carroCarrosel.appendChild(img);
});

var currentIndex = 0;
setInterval(function() {
  carroCarrosel.children[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % imageURLs.length;
  carroCarrosel.children[currentIndex].style.display = 'block';
}, 3000);

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.nav-menu a'); 
  links.forEach(function(link) {
    link.onmouseover = function() {
      this.style.opacity = '0.5'; 
    };
    link.onmouseout = function() {
      this.style.opacity = '1';
    };
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});