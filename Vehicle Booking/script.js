let historyStack = [];

function nextPage(pageId) {
  let current = document.querySelector(".page.active");

  if (current) {
    historyStack.push(current.id);
    current.classList.remove("active");
  }

  document.getElementById(pageId).classList.add("active");
}

function goBack() {
  if (historyStack.length === 0) return;

  let current = document.querySelector(".page.active");
  current.classList.remove("active");

  let prev = historyStack.pop();
  document.getElementById(prev).classList.add("active");
}