let GME = result.GME
let MSFT = result.MSFT
let DIS = result.DIS
let BTNX = result.BTNX



// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array
async function main(cc6d2bf51ae14971a2282b1bc411dbad) {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch ()

    const result = await response.json ()

    const {GME, MSFT, DIS, BNTX} = result;

   const stocks = [GME, MSFT, DIS, BNTX];

   stocks.forEach (stock => stock.values.reverse())


}




