function tarkista() {
  const cb1 = document.querySelector('#kurssi1');
  const cb2 = document.querySelector('#kurssi2');
  const cb3 = document.querySelector('#kurssi3');
  const rb1 = document.querySelector('#paiva1');
  const rb2 = document.querySelector('#paiva2');
  const rb3 = document.querySelector('#paiva3');
  if (cb1.checked == false && cb2.checked == false && cb3.checked == false) {
    window.alert("Valitse kurssi(t).")
  }
  if (rb1.checked == false && rb2.checked == false && rb3.checked == false) {
    window.alert("Valitse päivämäärä.")
  }
  if (val.value == "") {
    window.alert("Valitse kieli.");
  }
  if (teksti.value == "") {
    window.alert("Syötä jotain palautetta.")
  }
}
