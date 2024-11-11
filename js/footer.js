// Funcion para crear y agregar el footer a la página

function createFooter() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
  <div class="footer_container">
  <div class="footer_left">

  <ul class="footer_nav">
  <li><a href="index.html">Inicio</a></li>
  <li><a href="Esports.html">Esports</a></li>
  <li><a href="Catalogo.html">Catálogo</a></li>
  <li><a href="Contacto.html">Contacto</a></li>
  </ul>
  </div>
  <div class="footer_right">
  <a href="#"><i class="fa-regular fa-envelope"></i></a>
  <a href="#"><i class="fa-brands fa-facebook"></i></a>
  <a href="#"><i class="fa-brands fa-instagram"></i></a>
  </div>
  </div>
<div class="footer_bottom">© 2024 <b>Talento Tech</b>. Todos los derechos reservados</div>`;

  footer.classList.add("custom-footer");

  return footer;
}

function addFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  const footer = createFooter();
  footerPlaceholder.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", addFooter);
