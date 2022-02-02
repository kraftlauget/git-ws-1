const clickMeHandler = () => {
alert("test");
};

$(document).ready(() => {
$("#click-me").on("click", clickMeHandler);
});
