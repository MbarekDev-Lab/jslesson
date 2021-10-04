function Cylinder(hoogte, diameter) {
    this.hoogte = hoogte;
    this.diameter = diameter;
}

Cylinder.prototype.volume = function () {
    var radius =  this.diameter / 2;
    var hoogte = this.hoogte;

    var berekening = Math.PI * radius * radius * hoogte;
    return berekening;
}


function bereken() {
    var diameter = document.getElementById("diameter").value;
    var hoogte = document.getElementById("hoogte").value;
    var myCylinder = new Cylinder(diameter, hoogte);
    var result = myCylinder.volume();
    document.getElementById("uitkomst").value = result;
}
bereken() 