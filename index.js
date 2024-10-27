
//Create an object to keep count of how many orders there are of each flavor.
function flavorCount(flavors) {     
    const count = {};
    flavors.forEach((flavor) => {   
        count[flavor] = count[flavor] + 1 || 1;
    });
    return count;
}


function logNames(items) {
    // TODO: use `forEach`
    items.forEach(items => console.log(items));
  }

const INVENTORY = [
    { id: 1, name: "vanilla"},
    { id: 2, name: "strawberry"},
    { id: 3, name: "coffee"},
    { id: 4, name: "mint"},
    { id: 6, name: "chocolate"},
    { id: 7, name: "pistachio"},
    { id: 8, name: "cherry"},
  ];
  
  console.log("Welcome! We carry the following flavors:");
  logNames(INVENTORY);

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some flavors, like this", "vanilla,strawberry,coffee");
const flavors = str.split(",");
console.log(flavorCount(flavors));

