const rickRoll = () => {
  const image = document.createElement("img");
  image.src = "./rick.jpg";
  image.className = "rick";
  document.body.appendChild(image);
};

const clickMeHandler = () => {
  rickRoll();
};

const getDistance = (x1, y1, x2, y2) => {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
};

$(document).ready(() => {
  $("#click-me").on("click", clickMeHandler);
  const movementSpeed = 10;
  const distanceFromPointerToStop = 110;
  const defaultSize = 40;
  const maxSize = 100;

  let pointerX = 0;
  let pointerY = 0;

  let rickXs = [];
  let rickYs = [];

  let waitCounters = [];

  document.onmousemove = function (event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
  };

  setInterval(() => {
    $(".rick").each((i, image) => {
      const rickX = rickXs[i] ?? 0;
      const rickY = rickYs[i] ?? 0;
      const waitCounter = waitCounters[i] ?? 0;

      const distanceFromPointer = getDistance(rickX, rickY, pointerX, pointerY);
      if (distanceFromPointer < distanceFromPointerToStop) {
        waitCounters[i] = waitCounter + 1;

        let newSize = waitCounters[i] + defaultSize;
        newSize = newSize > 100 ? maxSize : newSize;

        $(image).css("width", `${newSize}px`);
        $(image).css("height", `${newSize}px`);

        return;
      }

      waitCounters[i] = 0;

      const directionX = pointerX - rickX;
      const directionY = pointerY - rickY;

      const directionLength = Math.sqrt(
        directionX * directionX + directionY * directionY
      );
      const directionXNormalized = directionX / directionLength;
      const directionYNormalized = directionY / directionLength;

      rickXs[i] = rickX + directionXNormalized * movementSpeed;
      rickYs[i] = rickY + directionYNormalized * movementSpeed;

      $(image).css("left", rickXs[i]);
      $(image).css("top", rickYs[i]);
      $(image).css("width", `${defaultSize}px`);
      $(image).css("height", `${defaultSize}px`);
    });
  }, 10);
});
