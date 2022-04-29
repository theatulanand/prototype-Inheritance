

//by object.create();
var oldModel = {
    name: "Tata V1",
    wheels: 4,
    seats: 5,
    type: "Diesel",
    companyName: "Tata",

}

var newModel = Object.create(oldModel);

console.log(newModel);

function Create(name,wheels,seats,type,companyName){
    this.name = name,
    this.wheels = wheels,
    this.seats = seats,
    this.type = type,
    this.companyName = companyName
}


var newModel = new Create("Tata V2" , 4 , 8 , "Electric" , "Tata");

console.log(newModel);