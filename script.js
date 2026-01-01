function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const level = document.getElementById("level").value;
  const subject = document.getElementById("subject").value;
  const schedule = document.getElementById("schedule").value;

  const phone = "34621312350";

  const message = `
Hola, soy ${name}.
Nivel de estudios: ${level}
Asignaturas: ${subject}
Horario de interés: ${schedule}
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}