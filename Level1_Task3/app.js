let FahrenheitInput = document.querySelector("#Fahrenheit>input");
let KelvinInput = document.querySelector("#Kelvin>input ");
let CelciusInput = document.querySelector("#Celcius>input");

let btn = document.querySelector(".button button");
function roundnumber(number) {
  return Math.round(number * 100) / 100;
}
CelciusInput.addEventListener("input", function () {
  let ctemp = parseFloat(CelciusInput.value);
  let ftemp = ctemp * (9 / 5) + 32;
  let ktemp = ctemp + 273.15;

  FahrenheitInput.value = roundnumber(ftemp);
  KelvinInput.value = roundnumber(ktemp);
});

FahrenheitInput.addEventListener("input", function () {
  let ftemp = parseFloat(FahrenheitInput.value);
  let ctemp = (ftemp - 32) * (5 / 9);
  let ktemp = (ftemp - 32) * (5 / 9) + 273.15;

  CelciusInput.value = roundnumber(ctemp);
  KelvinInput.value = roundnumber(ktemp);
});
KelvinInput.addEventListener("input", () => {
  let ktemp = parseFloat(KelvinInput.value);
  let ctemp = ktemp - 273.15;
  let ftemp = (ktemp - 273.15) * (9 / 5) + 32;

  FahrenheitInput.value = roundnumber(ftemp);
  CelciusInput.value = roundnumber(ctemp);
});

btn.addEventListener("click", function () {
  CelciusInput.value = " ";
  FahrenheitInput.value = " ";
  KelvinInput.value = " ";
});
