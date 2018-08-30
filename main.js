// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
function populateSelectElem(){
    var i = 0;
    planets.forEach(function(){;
        var node = document.createElement("option");
        var planetName = document.createTextNode(planets[i][0]);
        node.appendChild(planetName); 
        document.getElementById('planets').appendChild(node);
    i++;
    });
}
populateSelectElem();
function calculateWeight(weight, planetName){
    var planetLbs;
    switch (planetName) {
        case 'Pluto':
            planetLbs = planets[0][1];
            console.log(planets[0][1]);
            break;
        case 'Neptune':
            planetLbs = planets[1][1];
            console.log(planets[1][1]);
            break;
        case 'Uranus':
            planetLbs = planets[2][1];
            console.log(planets[2][1]);
            break;
        case 'Saturn':
            planetLbs = planets[3][1];
            console.log(planets[3][1]);
            break;
        case 'Jupiter':
            planetLbs = planets[4][1];
            console.log(planets[4][1]);
            break;
        case 'Mars':
            planetLbs = planets[5][1];
            console.log(planets[5][1]);
            break;
        case 'Moon':
            planetLbs = planets[6][1];
            console.log(planets[6][1]);
            break;
        case 'Earth':
            planetLbs = planets[7][1];
            console.log(planets[7][1]);
            break;
        case 'Venus':
            planetLbs = planets[8][1];
            console.log(planets[8][1]);
            break;
        case 'Mercury':
            planetLbs = planets[9][1];
            console.log(planets[9][1]);
            break;
        case 'Sun':
            planetLbs = planets[10][1];
            console.log(planets[10][1]);
            break;
    }
        weight = document.getElementById('user-weight').value;
        var calculatedWeight = weight * planetLbs;

        return calculatedWeight;
}
function handleClickEvent(e){
    var userWeight = document.getElementById('user-weight').value;
    var planetIndex = document.getElementById('planets').selectedIndex;
    var planetName = document.getElementsByTagName('option')[planetIndex].value;
    var result = calculateWeight(userWeight, planetName);
    
    var weightString = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
    document.getElementById('output').innerHTML = weightString;
    console.log(result);
}
