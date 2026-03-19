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
$sql = "SELECT id_emprunts, Date_emprunt,  Duree , id_Adherent, Reference_livre FROM emprunts";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des emprunts</title>
    

    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 80%; margin: auto; }
        th, td { border: 1px solid #444; padding: 10px; text-align: center; }
        th { background-color: #e4e4e4; }
        h2 { text-align: center; }
    </style>

</head>
<body>

<h2>Liste des emprunts</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Date d'emprunt</th>
        <th>Durée</th>
        <th>ID Adhérent</th>
        <th>Référence livre</th>
    </tr>

    <?php
    if ($result && mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>".$row['id_emprunts']."</td>";
            echo "<td>".$row['Date_emprunt']."</td>";
            echo "<td>".$row['Duree']."</td>";
            echo "<td>".$row['id_Adherent']."</td>";
            echo "<td>".$row['Reference_livre']."</td>";
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