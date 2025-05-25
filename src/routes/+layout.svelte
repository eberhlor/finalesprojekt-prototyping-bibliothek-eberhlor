<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Bibliothek eberhlor</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/books">Books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/genres">Genres</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/authors">Authors</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="body" class="container mt-3">
  {@render children()}
</div>
<footer id= "footer" class="bg-dark text-white pt-4 pb-3 mt-5">
  <div class="container text-center text-md-start">
    <div class="row">
      <div class="col-md-6 mb-3">
        <h5>Mein Einzelprojekt</h5>
        <p>Dies ist ein Beispiel für einen einfachen Footer mit Bootstrap.</p>
      </div>
      <div class="col-md-3 mb-3">
        <h6>Links</h6>
        <ul class="list-unstyled">
          <li><a href="/" class="text-white text-decoration-none">Startseite</a></li>
          <li><a href="/contact" class="text-white text-decoration-none">Impressum</a></li>
        </ul>
      </div>
    </div>
    <hr class="bg-white">
    <div class="text-center">
      <p class="mb-0">&copy; 2025 Mein Einzelprojekt. Alle Rechte vorbehalten.</p>
    </div>
  </div>
</footer>