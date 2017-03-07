<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <title>Spara uppgifter i en textfil</title>
    <link rel="stylesheet" href="">
</head>
<body>
    <h1>Spara uppgifter</h1>
    <?php
    // Här tar vi emot data från formuläret
    $fnamn = $_POST['fnamn'];
    $enamn = $_POST['enamn'];

    // Nu skriver vi ut innehållet i variablerna
    echo "<p>$fnamn</p>";
    echo "<p>$enamn</p>";

    // Öppna en textfil
    $handtag = fopen('data.txt', 'a');

    // Skriva en rad i textfilen
    $rad = "$fnamn:$enamn\n";
    fwrite($handtag, $rad);

    // Stäng textfilen när vi är klara
    fclose($handtag);
    ?>
</body>
</html>
