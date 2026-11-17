document.getElementById("envoyer").addEventListener("click", function () {
  var nom = document.getElementById("nom").value.trim();
  var mail = document.getElementById("mail").value.trim();
  var msg = document.getElementById("msg").value.trim();
  var corps = msg + "\n\n" + nom + (mail ? " (" + mail + ")" : "");
  window.location.href = "mailto:camille@exemple.fr?subject=" +
    encodeURIComponent("Message depuis votre portfolio") + "&body=" + encodeURIComponent(corps);
});