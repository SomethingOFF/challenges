function updatePreview() {
  const topLeft = document.getElementById("topLeft").value;
  const topRight = document.getElementById("topRight").value;
  const bottomRight = document.getElementById("bottomRight").value;
  const bottomLeft = document.getElementById("bottomLeft").value;

  const preview = document.getElementById("preview");
  preview.style.borderTopLeftRadius = `${topLeft}%`;
  preview.style.borderTopRightRadius = `${topRight}%`;
  preview.style.borderBottomRightRadius = `${bottomRight}%`;
  preview.style.borderBottomLeftRadius = `${bottomLeft}%`;
  preview.textContent =` border-radius: ${topLeft}%  ${topRight}%  ${bottomRight}%  ${bottomLeft}%;`
}
