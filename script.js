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

  let pointerX = 0;
  let pointerY = 0;

  let rickX = 0;
  let rickY = 0;

  document.onmousemove = function (event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
  };

  function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
  }

  setInterval(() => {
    $(".rick").each((i, image) => {
      const directionX = pointerX - rickX;
      const directionY = pointerY - rickY;

      const directionLength = Math.sqrt(
        directionX * directionX + directionY * directionY
      );
      const directionXNormalized = directionX / directionLength;
      const directionYNormalized = directionY / directionLength;

      const movementSpeed = 10;

      const newRickX = rickX + directionXNormalized * movementSpeed;
      const newRickY = rickY + directionYNormalized * movementSpeed;

      const newDistanceFromPointer = getDistance(
        newRickX,
        newRickY,
        pointerX,
        pointerY
      );

      if (newDistanceFromPointer > movementSpeed) {
        rickX = newRickX;
        rickY = newRickY;
      }

      $(image).css("left", rickX);
      $(image).css("top", rickY);
    });
  }, 10);
});
