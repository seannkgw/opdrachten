const makeCheeseSandwich = () => {
    //"slice of bread"
    //"slice of cheese"
    //"slice of bread"
}

const makeSandwichWith = (filling) => {
    console.log("Add a slice of bread.");
    console.log("Add a slice of " + filling + ".");
    console.log("Add a slice of bread.")
}
makeSandwichWith("cheese");



// Declare
const makeSandwich = (topping) => {
    console.log("There you go, a sandwich with " + topping + "!");
}
// Call
makeSandwich("cheese");
makeSandwich("ham");




const calculatedDiscountPrice = (totalAmount, discount) => {
    return totalAmount - discount;
}
console.log(Math.round(calculatedDiscountPrice(134, 14)));



const calculatedDiscount = (totalAmount, discount) => {
    if (totalAmount > 25) {
        return totalAmount - discount;
    } else {
        return totalAmount;
    }

}
console.log(Math.round(calculatedDiscount(24.9, 4)));