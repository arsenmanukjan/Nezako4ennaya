let planets = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
planets.push("Pluto");
console.log(planets);
console.log(planets[0]);
console.log(planets[8]);
console.log(planets[planets.length-1]);
let output = '';

for(let i = 0; i < planets.length; i++ ){
    let message = `${i+1}. ${planets[i]}`;
    console.log(i+1, planets[i]);
    output += `<li>${planets[i]}</li`;
}

document.querySelector(".list").innerHTML = output;
   
    <li>Mercury</li>;
    <li>Venus</li>;
    <li>Earth</li>;
    <li>Mars</li>;
    <li>Jupiter</li>;
    <li>Saturn</li>;
    <li>Uranus</li>;
    <li>Neptune</li>;

//FOR Loop
for(let i = 0; i < 7; i++ ){
    let message = `${i+1}. ${planets[i]}`;
    console.log(message);
}



