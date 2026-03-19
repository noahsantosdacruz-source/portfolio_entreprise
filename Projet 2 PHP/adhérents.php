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
$sql = "SELECT Id_Adherent, Nom, Prenom, Date_naissance, Date_adhesion, Adresse, Num_tel, mail FROM adherents";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Persoconceptcss2 copy.css">
    <title>Liste des adhérents</title>
    

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
        <th>Date d'adhésion</th>
        <th>Adresse</th>
        <th>Numéro de téléphone</th>
        <th>Email</th>
    </tr>

    <?php
    if ($result && mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>".$row['Id_Adherent']."</td>";
            echo "<td>".$row['Nom']."</td>";
            echo "<td>".$row['Prenom']."</td>";
            echo "<td>".$row['Date_naissance']."</td>";
            echo "<td>".$row['Date_adhesion']."</td>";
            echo "<td>".$row['Adresse']."</td>";
            echo "<td>".$row['Num_tel']."</td>";
            echo "<td>".$row['mail']."</td>";
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