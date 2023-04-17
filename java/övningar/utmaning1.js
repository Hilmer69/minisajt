window.addEventListener("mousemove", (event) => {
    console.log(
      `Musen är nu på koordinaterna (${event.clientX},${event.clientY})`
    )
    visualViewport
    document.body.style.backgroundColor = `rgb(${event.clientX*(255/visualViewport.width)},${event.clientY*(255/visualViewport.height)},0)`
  })


