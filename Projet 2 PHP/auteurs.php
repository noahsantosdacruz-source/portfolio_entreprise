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
$sql = "SELECT id_Auteur, Nom, Prenom, Date_naissance FROM auteurs";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Persoconceptcss2 copy.css">
    <title>Liste des auteurs</title>
    

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
        <th>Nom</th>
        <th>Prénom</th>
        <th>Date de naissance</th>
    </tr>

    <?php
    if ($result && mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>".$row['id_Auteur']."</td>";
            echo "<td>".$row['Nom']."</td>";
            echo "<td>".$row['Prenom']."</td>";
            echo "<td>".$row['Date_naissance']."</td>";
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