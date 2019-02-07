/*@Author:  Brian Wahinya.
  @Task:    Higher-Order Functions(MAP, REDUCE, FILTER)
  @Version: Version 1
  @Language: Javascript ES6(2015).
  @Date:    February, 7, 2019.
*/

const animals = [{name:"antelope", species:"b"},
{name:"rat", species:"b"},
{name:"bird", species:"c"},
{name:"dog", species:"d"},
{name:"donkey", species:"d"}]


/*********solution one - using a for loop*************/
let dSpecies = [];
for(let i = 0; i < animals.length; i++){
   if (animals[i].species === 'd'){
        dSpecies.push(animals[i])
   }
}
console.log(dSpecies);

console.log(`\n /*********************************/`);





//*********solution two - using a FILTER function*************//

let bSpecies = animals.filter((item) => item.species === "b");
console.log(bSpecies);

//*********solution three - using a FILTER function*************//

let otherSpecies = animals.filter((item) => item.species !== "c");
console.log(otherSpecies);

console.log(`\n /*********************************/`);




//*********solution four - using a MAP function*************//

let allNames = animals.map((item) => item.name);
console.log(allNames);

allNames = animals.map((item) => item.name + ' is in the ' + item.species + ' species');
console.log(allNames);

console.log(`\n /*********************************/`);





//*********solution five - using a REDUCE function*************//

const cars = [{model:"Probox", price: 200},
{model:"Lexus", price:300},
{model:"Merc", price:400},
{model:"Hummer", price:600}]

let priceAll = cars.map((item) => item.price);

let priceSum = priceAll.reduce((acc, val) => acc += val, 0);
console.log("Total cost is " + priceSum);

let costlyCar = priceAll.reduce((acc, val) => acc < val ? acc = val : acc );
console.log("Most costly car is " + costlyCar);

