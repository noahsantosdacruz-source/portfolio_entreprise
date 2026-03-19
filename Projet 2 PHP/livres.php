<?php

$host = "localhost";
$user = "root";
$password = "mysql";
$database = "biblio";

$conn = mysqli_connect($host, $user, $password, $database);

// Vérification
if (!$conn) {
    die("Erreur de connexion : " . mysqli_connect_error());
}

// Requête SQL
$sql = "SELECT Reference_livre, Nbre_pages, id_Auteur, Année, Genre,  Disponibilité, Nbre_emprunts, Etat, Nbre_exemplaire FROM livres";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Persoconceptcss2 copy.css">
    <title>Liste des Livres</title>
    

    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 80%; margin: auto; }
        th, td { border: 1px solid #444; padding: 10px; text-align: center; }
        th { background-color: #e4e4e4; }
        h2 { text-align: center; }
    </style>

</head>
<body>

<h2>Liste des Auteurs</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Nbre pages</th>
        <th>ID Auteur</th>
        <th>Année</th>
        <th>Genre</th>
        <th>Disponibilité</th>
        <th>Nombre emprunts</th>
        <th>État</th>
        <th>Nombre exemplaire</th>
    </tr>

    <?php
    if ($result && mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>".$row['Reference_livre']."</td>";
            echo "<td>".$row['Nbre_pages']."</td>";
            echo "<td>".$row['id_Auteur']."</td>";
            echo "<td>".$row['Année']."</td>";
            echo "<td>".$row['Genre']."</td>";
            echo "<td>".$row['Disponibilité']."</td>";
            echo "<td>".$row['Nbre_emprunts']."</td>";
            echo "<td>".$row['Etat']."</td>";
            echo "<td>".$row['Nbre_exemplaire']."</td>";
            echo "</tr>";
        }
    } else {
        echo "<tr><td colspan='6'>Aucun client trouvé.</td></tr>";
    }

    mysqli_close($conn);
    ?>

</table>
<footer>
    <br><br>
    <a href="index.php">Retour à l'accueil</a>
</footer>
</body>

</html>