function gotoSearchResult() {
  let portValue = document.getElementById("port").value;
  portValue = portValue ? portValue : 10001;
  window.location.href = `./Result.html?searchKey=${domain.value}&port=${portValue}`;
}