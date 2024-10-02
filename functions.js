function berekenInhoud(lengte, hoogte, diepte) {
    return lengte * hoogte * diepte;
}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);

function berekenCylinderInhoud(diameter, hoogte) {
    let radius = diameter / 2;
    return Math.PI * Math.pow(radius, 2) * hoogte;
}

let cylinderInhoud = berekenCylinderInhoud(10, 5);
console.log(cylinderInhoud);

function berekenLangeZijde(lengte, hoogte) {
    return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}

let langeZijde = berekenLangeZijde(3, 4);
console.log(langeZijde);

function berekenGemiddelde(a, b, c, d, e, f, g) {
    return (a + b + c + d + e + f + g) / 7;
}

let gemiddelde = berekenGemiddelde(4, 6, 8, 2, 5, 9, 7);
console.log(gemiddelde);
