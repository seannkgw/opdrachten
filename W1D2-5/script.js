const yourAge = 34;
const isFemale = true;
const driverStatus = 'Bob';
const age = 22;
const name = 'Bram';
const totalAmount = 7500;


if (yourAge >= 18){

    console.log("Jij mag naar binnen")

} else{

    console.log("Jij bent helaas te jong en wordt vriendelijk verzocht buiten te blijven")

}
if (isFemale){

    console.log("Jij mag naar Ladies Night")

} else{

    console.log("Jij mag helaas niet naar Ladies Night")

}
if (driverStatus == 'Bob'){

    console.log("Jij bent de Bob en mag rijden 🚘")

} else{

    console.log("Jij bent niet de Bob en mag niet rijden 🚘")

}
if (age >= 18 && age <= 25){

    console.log("Je krijgt 25% korting!")

} else{

    console.log("Helaas jij krijgt geen korting...")

}
if (name == 'Bram' || name == 'Sarah'){

    console.log("Jij krijgt een gratis biertje!")

} else{

    console.log("Jij krijgt helaas geen gratis biertje")

}
if (totalAmount < 25){

    console.log("Helaas jij krijgt geen cadeau")
}
else if (totalAmount > 25 && totalAmount < 50 ){

    console.log("Jij krijgt gratis (vega) bitterbalen 🥘")
} else if (totalAmount >= 50 && totalAmount < 100 ){ 

    console.log("Jij krijg gratis een gratis portie nachos 🌮")

} else {

    console.log("Jij krijgt een gratis flesje champagne 🍾")

}