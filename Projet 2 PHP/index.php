<?php
// Page d'accueil avec menu simple
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Accueil - Biblio des bibis</title>
    <link rel="stylesheet" href="Persoconceptcss2 copy.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="Persoconceptjs.js" defer></script>
    <style>
        body { font-family: Arial, sans-serif; }
        .menu {
            background-color: #333;
            padding: 10px;
            text-align: center;
        }
        .menu a {
            color: white;
            padding: 12px 20px;
            text-decoration: none;
            display: inline-block;
        }
        .menu a:hover {
            background-color: #555;
        }
        .content {
            text-align: center;
            margin-top: 40px;
        }
    </style>
</head>
<body>


<div class="menu">
    <a href="index.php">Accueil</a>
    <a href="emprunts.php">emprunts</a>
    <a href="livres.php">Livres</a>
    <a href="auteurs.php">Auteurs</a>
    <a href="adhérents.php">Adhérents</a>
    <a href="achat.php">Achat</a>
</div>

<div class="content">
    <h1>Bienvenue dans la Biblio des bibis</h1>
    <p>Utilisez le menu pour naviguer.</p>
</div>
<!-- Top Navigation Menu -->
 <nav class="navbar navbar-expand-lg-xl navbar-dark bg-dark" id ="topNav">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Menu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
            
        </button>
        
         <div  id="Menu" class="collapse navbar-collapse" >
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#search_bar">Accueil</a></li>
                <li class="nav-item"><a class="nav-link" href="#projects">Projets</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
</div>


<div class="container">
    <div class="search-bar">
      <input type="text" id="search" placeholder="Rechercher...">
    </div>

    <div class="tags" id="tags"></div>

    <div class="grid" id="projects"></div>
  </div>

  <div class="modal" id="modal">
    <div class="modal-content">
      <button class="close" onclick="closeModal()">x</button>
      <h2 id="modal-title"></h2>
      <p id="modal-tags"></p>
      <img id="modal-img" src="NOIR onduler.jpg" alt="">
      <a href="" id="modal-link">Voir le projet</a>
      <p id="modal-details"></p>
    </div>
  </div>

  <section class="d-flex align-items-center text-center text-white test">
  <div class="container-fluid">
 </div>
 </section>

  <footer>
    <br><br>
    <a href="index.php">Retour à l'accueil</a>
  </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</body>
</html>