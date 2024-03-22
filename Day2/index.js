const preview = document.getElementById("preview");
function updatePreview() {
  const topLeft = document.getElementById("topLeft").value;
  const topRight = document.getElementById("topRight").value;
  const bottomRight = document.getElementById("bottomRight").value;
  const bottomLeft = document.getElementById("bottomLeft").value;

  preview.style.borderTopLeftRadius = `${topLeft}%`;
  preview.style.borderTopRightRadius = `${topRight}%`;
  preview.style.borderBottomRightRadius = `${bottomRight}%`;
  preview.style.borderBottomLeftRadius = `${bottomLeft}%`;
  preview.textContent = ` border-radius: ${topLeft}%  ${topRight}%  ${bottomRight}%  ${bottomLeft}%;`;
}

preview.addEventListener("click", function () {
  const textToCopy = this.textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert(`Text copied to clipboard: ${textToCopy}`);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
