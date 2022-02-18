const movementSpeed = 10;
const distanceFromPointerToStop = 110;
const defaultSize = 40;
const maxSize = 100;
const intervalTimeout = 10;

let pointerX = 0;
let pointerY = 0;

let rickXs = [];
let rickYs = [];

let increasedSizes = [];

const rickRoll = () => {
  const image = document.createElement("img");
  image.src = "./rick.jpg";
  image.className = "rick";
  document.body.appendChild(image);
};

$(document).ready(() => {
  $("#click-me").on("click", rickRoll);

  document.onmousemove = function (event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
  };

  setInterval(() => {
    $(".rick").each((i, image) => {
      if (isRickAtPointer(i)) {
        growRick(i, image);
        return;
      }

      moveRick(i, image);
      resetRickSize(i, image);
    });
  }, intervalTimeout);
});

const getDistance = (x1, y1, x2, y2) => {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
};

const getRickInfo = (i) => {
  return {
    rickX: rickXs[i] ?? 0,
    rickY: rickYs[i] ?? 0,
    increasedSize: increasedSizes[i] ?? 0,
  };
};

const isRickAtPointer = (i) => {
  const { rickX, rickY } = getRickInfo(i);

  const distanceFromPointer = getDistance(rickX, rickY, pointerX, pointerY);
  return distanceFromPointer < distanceFromPointerToStop;
};

const growRick = (i, image) => {
  const { increasedSize } = getRickInfo(i);
  let newSize = increasedSize + defaultSize;
  newSize = newSize > 100 ? maxSize : newSize;

  increasedSizes[i] = increasedSize + 1;

  $(image).css("width", `${newSize}px`);
  $(image).css("height", `${newSize}px`);
};

const resetRickSize = (i, image) => {
  increasedSizes[i] = 0;

  $(image).css("width", `${defaultSize}px`);
  $(image).css("height", `${defaultSize}px`);
};

const moveRick = (i, image) => {
  const { rickX, rickY } = getRickInfo(i);
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
};
