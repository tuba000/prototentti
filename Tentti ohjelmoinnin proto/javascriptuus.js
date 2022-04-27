function luo() {
  let etunimi = etu.value;
  let sukunimi = suku.value;
  let etuosa = etunimi.slice(0, 3)
  let sukuosa = sukunimi.slice(0, 5);
  let ukayt = etuosa + sukuosa;

  if (uuss.value != uusst.value) {
    window.alert("Salasanat ei täsmää!");
  }
  if (etu.value == "" || suku.value == "" || uuss.value == "" || uusst.value == "" || ika.value == "") {
    window.alert("Syötä oikeat tiedot.");
  }
  if (sposti.value == "") {
    window.alert("Anna oikea sähköposti.");
  }
  window.alert("Käyttäjä on " + ukayt);
}
