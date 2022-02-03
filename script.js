const rickRoll = () => {
  const image = document.createElement("img");
  image.src = "./rick.jpg";
  image.className = "rick";
  document.body.appendChild(image);
};

const clickMeHandler = () => {
  rickRoll();
};

$(document).ready(() => {
  $("#click-me").on("click", clickMeHandler);

  setInterval(() => {
    $(".rick").each((i, image) => {
      const directionX = Math.random() * 2 - 1;
      const directionY = Math.random() * 2 - 1;
      const speedX = Math.random() * 100;
      const speedY = Math.random() * 100;

      console.log(image.style);

      const previousX = image.style.left ? parseInt(image.style.left) : 0;
      const previousY = image.style.top ? parseInt(image.style.top) : 0;

      image.style.left = `${previousX + directionX * speedX}px;`;
      image.style.top = `${previousY + directionY * speedY}px;`;

      $(image).css("left", previousX + directionX * speedX);
      $(image).css("top", previousY + directionY * speedY);
    });
  }, 10);
});
