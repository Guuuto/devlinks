function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  
  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/original-light.jpeg")
    img.setAttribute(
      "alt",
      "foto "
    )
  } else {
    img.setAttribute("src", "./assets/original.jpeg")
    img.setAttribute(
      "alt",
      "foto da grandioza"
    )
  }
}