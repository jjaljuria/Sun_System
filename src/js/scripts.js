const planets = document.querySelectorAll('.orbit');
const informationModal = document.getElementById('information');
const closeButton = document.getElementsByClassName('close')[0];
const planetNameElement = document.getElementById('planet-name');
const planetDescriptionElement = document.getElementById('planet-description');
const planetImage = document.getElementById('planet-image');

const planetData = [
    {
        name: 'Mercurio',
        description: 'Mercurio es el planeta más pequeño del sistema solar y el más cercano al Sol. Es un planeta rocoso con una superficie llena de cráteres, similar a la Luna. No tiene lunas propias.',
        image: './src/img/Mercurio.png' // Suponiendo que tienes una imagen para Mercurio
    },
    {
        name: 'Venus',
        description: 'Venus es el segundo planeta desde el Sol y es conocido por su atmósfera densa y tóxica, compuesta principalmente de dióxido de carbono. Es el planeta más caliente del sistema solar debido a un efecto invernadero descontrolado.',
        image: './src/img/Venus.png'
    },
    {
        name: 'Tierra',
        description: 'La Tierra es el tercer planeta desde el Sol y el único conocido por albergar vida. Se caracteriza por sus océanos de agua líquida, su atmósfera rica en oxígeno y su biodiversidad.',
        image: './src/img/Tierra.png'
    },
    {
        name: 'Marte',
        description: 'Marte es el cuarto planeta desde el Sol y es a menudo llamado el "Planeta Rojo" debido a su superficie rica en óxido de hierro. Tiene una atmósfera delgada y dos lunas pequeñas, Fobos y Deimos.',
        image: './src/img/Marte.png' // Suponiendo que tienes una imagen para Marte
    },
    {
        name: 'Júpiter',
        description: 'Júpiter es el planeta más grande del sistema solar, un gigante gaseoso con una masa dos veces y media la de todos los demás planetas juntos. Es famoso por su Gran Mancha Roja, una tormenta gigante que ha durado siglos.',
        image: './src/img/Jupiter.png'
    },
    {
        name: 'Saturno',
        description: 'Saturno es el sexto planeta desde el Sol y es el segundo más grande del sistema solar. Es conocido por su impresionante sistema de anillos, que están compuestos principalmente de hielo y rocas.',
        image: './src/img/Saturno.png'
    },
    {
        name: 'Urano',
        description: 'Urano es el séptimo planeta desde el Sol y es un gigante de hielo. Tiene una inclinación axial extrema, lo que significa que rota de lado. Su atmósfera está compuesta principalmente de hidrógeno, helio y metano.',
        image: './src/img/Urano.png'
    },
    {
        name: 'Neptuno',
        description: 'Neptuno es el octavo y más distante planeta conocido del sistema solar. Es otro gigante de hielo con vientos supersónicos y un clima extremadamente dinámico. Tiene 14 lunas conocidas, siendo Tritón la más grande.',
        image: './src/img/Neptuno.png' // Suponiendo que tienes una imagen para Neptuno
    }
];

planets.forEach((planet, index) => {
    planet.onclick = () => {
        const planetInfo = planetData[index];
        planetNameElement.textContent = planetInfo.name;
        planetDescriptionElement.textContent = planetInfo.description;
        planetImage.src = planetInfo.image
        informationModal.classList.add('is-active');
    };
});

closeButton.onclick = () => {
    informationModal.classList.remove('is-active');
};

window.onclick = (e) => {
    if (e.target == informationModal) {
        informationModal.classList.remove('is-active');
    }
};
