function populateSelect(id, start, end, labels = null) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  for (let i = start; i <= end; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = labels ? labels[i - start] : i;
    select.appendChild(opt);
  }
}
