const angletoradian = (angle) => {
    return angle * (Math.PI / 180);
};

const radius = 100;
const diametr = radius*2;

const circle = document.querySelector('#circle-text');
circle.style.width = `${diametr}px`;
circle.style.height = `${diametr}px`;

const text = circle.innerHTML;
const character = text.split('');
circle.innerHTML = null

let angle = -90;
const deltaangle = 360/character.length;

character.forEach((char, index) => {
    const charelement = document.createElement('span');
    charelement.innerText = char;
    const xpos = radius * Math.cos(angletoradian(angle));
    const ypos = radius * Math.sin(angletoradian(angle));

    const transform = `translate(${xpos}px, ${ypos}px)`;
    const rotate = `rotate(${index * deltaangle}deg)`;
    charelement.style.transform = `${transform} ${rotate}`;

    angle += deltaangle;
    circle.appendChild(charelement);

});