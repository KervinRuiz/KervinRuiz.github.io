
// traigo los elementos HTML
const skillContainers = document.querySelectorAll('.my-Skills__Container');
const progressValues = document.querySelectorAll('.my-Skills__Circular-Bar__Progress-value');

// Defino los porcentajes de cada habilidad
const percentages = {
  'HTML': 90,
  'CSS': 80,
  'Javascript': 50,
  'Git': 80,
  'SFPC': 80,
  'Node JS': 30,
  'Windows': 90,
  'SQLServer': 90,
  'Java': 50,
  'ASP.NET': 80,
  'C#': 90,
  'Python': 60,
  'MySql': 60,
  'React-Native' : 50,
  'TypeScript' : 40,
  'Xamarin-Forms' :70,
  'Paquetes-Office': 90,
  'Desarrollo-de-appis': 50,
  'Ajax': 50,
  'Azure': 80,
  'CiberSeguridad': 50,
};

//El bucle recorre cada contenedor de habilidades y para cada uno trae el ID de habilidad
skillContainers.forEach(container => {
  const skillId = container.getAttribute('id');
  //la barra de progreso 
  const progressBar = container.querySelector('.my-Skills__Circular-Bar');
  //y el valor de progreso.
  const progressValue = container.querySelector('.my-Skills__Circular-Bar__Progress-value');
  //el ID de habilidad para obtener el porcentaje correspondiente
  const percentage = percentages[skillId];
  let currentProgress = 0;

  // Animo el circular bar progress
  const animateProgress = setInterval(() => {
    currentProgress++;
    progressBar.style.background = `conic-gradient(rgb(47, 255, 144) ${currentProgress}%, #c7c7c7 ${currentProgress}% 100%)`;
    progressValue.textContent = `${currentProgress}%`;
    if (currentProgress === percentage) clearInterval(animateProgress);
  }, 200);
});












/*
let htmlProgress = document.getElementById("HTML").querySelector(".my-Skills__Circular-Bar"),
htmlValue = document.getElementById("HTML").querySelector(".my-Skills__Circular-Bar__Progress-value");

let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlSpeed = 150;

let htmlProgressInterval = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`
    htmlProgress.style.background = `conic-gradient(rgb(47, 255, 144)
                        ${htmlStartValue * 3.6}deg, #ededed 0deg)`
        if(htmlStartValue == htmlEndValue){
            clearInterval(htmlProgressInterval);
        }
}, htmlSpeed);


let cssProgress = document.getElementById("CSS").querySelector(".my-Skills__Circular-Bar"),
cssValue = document.getElementById("CSS").querySelector(".my-Skills__Circular-Bar__Progress-value");

let cssStartValue = 0,
    cssEndValue = 80,
    cssSpeed = 100;

let cssProgressInterval = setInterval(() => {
    cssStartValue++;
    cssValue.textContent = `${cssStartValue}%`
    cssProgress.style.background = `conic-gradient(rgb(47, 255, 144)
                        ${cssStartValue * 3.6}deg, #ededed 0deg)`
        if(cssStartValue == cssEndValue){
            clearInterval(cssProgressInterval);
        }
}, cssSpeed);








/*
let circularProgress = document.querySelector(".my-Skills__Circular-Bar"),
progressValue = document.querySelector(".my-Skills__Circular-Bar__Progress-value");

let progressStartValue = 0,
progressEndValue = 90,
speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(rgb(47, 255, 144)
                    ${progressStartValue * 3.6}deg, #ededed 0deg)`
        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
}, speed);
*/