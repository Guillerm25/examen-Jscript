function buscar() {
  var input, filter, section, div, h1, i;
  input = document.getElementById("buscador");
  filter = input.value.toUpperCase();
  section = document.getElementById("tasks");
  div = section.getElementsByTagName("div");



  for (i = 0; i < div.length; i++) {
    h1 = div[i].getElementsByTagName("h1")[0];
    if (h1) {
      var palabrasEnFiltro = filter.split(' ');
      var hallado = 0;
      for (var filtro of palabrasEnFiltro) {
        if (h1.innerHTML.toUpperCase().indexOf(filtro) > -1) {
          hallado++;
        }
      }

      if (hallado === palabrasEnFiltro.length) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }

    }
  }

}