// document.querySelector("#size").onchange = changeEventHandler;

// let pizzaSize = function changeEventHandler(event) {
//   //   if (changeEventHandler === "small") {
//   const span = document.querySelector(".sizeOutput");
//   if (!event.target.value) span.innerHTML = "Please Select One";
//   else span.innerHTML = event.target.value;
//   //   }
// };

// let size = document.getElementById("size");

// let value = size.value;
// let text = size.options[size.selectedIndex].text;
// console.log(value, text);
// if (value === "small") {
//   document.querySelector(".sizeOuput").innerHTML = "Small";
// }
// console.log(value);

const selectElement = document.querySelector("#size");
const result = document.querySelector(".sizeOutput");

selectElement.addEventListener("change", (event) => {
  result.textContent = event.target.value;
});

if (selectElement.value === 15) {
  let priceSmall = 15;
  console.log(priceSmall);
  document.querySelector(".sizeOutput").value = "Small";
} else if (selectElement.value === 20) {
  let priceMedium = 20;
  console.log(priceMedium);
  document.querySelector(".sizeOutput").innerHTML = "Medium";
} else if (selectElement.value === 25) {
  let priceLarge = 25;
  document.querySelector(".sizeOutput").innerHTML = "Large";
  document.getElementById("priceOutput").innerHTML = "25";
}
