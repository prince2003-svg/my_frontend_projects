const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
  tile.addEventListener("mousemove", (e) => {
    const rect = tile.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // tilt strength
    const rotateX = ((y - midY) / midY) * 20;
    const rotateY = ((midX - x) / midX) * 20;

    tile.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  tile.addEventListener("mouseleave", () => {
    tile.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});