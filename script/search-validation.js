function gotoSearchResult() {
  const domain = document.getElementById("domain");
  if (!domain.value) {
    domain.classList.add("input-error");
    return;
  }

  let portValue = document.getElementById("port").value;
  portValue = portValue ? portValue : 10001;
  window.location.href = `./Result.html?domain=${domain.value}&port=${portValue}`;
}