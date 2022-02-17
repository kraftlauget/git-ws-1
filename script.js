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

  let rickXs = [];
  let rickYs = [];

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
      const rickX = rickXs[i] ?? 0;
      const rickY = rickYs[i] ?? 0;

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

      if (newDistanceFromPointer > movementSpeed * 10) {
        rickXs[i] = newRickX;
        rickYs[i] = newRickY;
      }

      $(image).css("left", newRickX);
      $(image).css("top", newRickY);
    });
  }, 10);
});
