function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "Foto de Lucas Holz sorrindo, usando óculos escuros e casaco preta, barba e no fundo o céu azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    img.setAttribute(
      "alt",
      "Foto de Lucas Holz sorrindo, usando óculos e camisa preta, barba e fundo branco"
    )
  }
}
