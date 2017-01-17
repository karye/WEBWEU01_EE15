function rakna() {
    // Fråga efter födelsedatum
    //var fDatum = prompt("När är du född? (år-månad-dag)");
    var fDatum = document.getElementById("input").value;

    // Skriv ut innehållet av variabeln fDatum
    console.log(fDatum);

    // Skapa ett datum-objekt
    var födelseDatum = new Date(fDatum);

    // Skapa datum-objekt för idag
    var idagDatum = new Date();

    // Skillnad mellan de två datum
    var skillnadDatum = idagDatum - födelseDatum;

    // Skriv ut skillnaden
    console.log(skillnadDatum);

    // Omvandla millisekunder till antal år
    var ålder = skillnadDatum / (1000 * 3600 * 24 * 365);

    // Plocka ut heltalsdelen
    var år = Math.floor(ålder);

    //alert("Din ålder = " + år);
    document.getElementById("svar").innerHTML = "Din ålder = " + år;


}
