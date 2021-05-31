const keysArr = [...document.querySelectorAll(".key")];

const getKey = (event) => {
  const parsedKey = event.key.toLowerCase().replace("\\", "\\\\");
  const parsedCode = event.code.toLowerCase();
  const element =
    document.querySelector(`[data-key="${parsedCode}"]`) ||
    document.querySelector(`[data-key="${parsedKey}"]`);

  return element;
};

document.addEventListener("keydown", (event) => {
  const key = getKey(event);
  if (key) {
    key.classList.add("active");
  }
});

document.addEventListener("keyup", (event) => {
  const key = getKey(event);
  if (key) {
    key.classList.remove("active");
  }
});
