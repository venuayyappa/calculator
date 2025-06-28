// layout.js
function loadNavbar() {
  document.getElementById("navbarContainer").innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
      <div class="container-fluid">
        <a class="nav-link px-3" href="../index.html">
          <i class="fa-solid fa-house"></i>
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Other Calculators</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="Calculator.html">Calculator</a></li>
              <li><a class="dropdown-item" href="AgeCalculator.html">Age Calculator</a></li>
              <li><a class="dropdown-item" href="ConversionCalculator.html">Conversion Calculator</a></li>
              <li><a class="dropdown-item" href="RandomNumberGenerator.html">Random Number Generator</a></li>
              <li><a class="dropdown-item" href="RandomPasswordGenerator.html">Random Password Generator</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>`;
}
window.addEventListener("DOMContentLoaded", loadNavbar);
