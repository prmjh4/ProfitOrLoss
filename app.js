var initialPrice= document.querySelector('#initial-price');
var numberOfStocks= document.querySelector('#number-of-stocks');
var currentPrice= document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');


submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip= Number(initialPrice.value);
    var qty= Number(numberOfStocks.value);
    var curr= Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
}
function calculateProfitAndLoss(initial, quant, current){
    if(initial>current){
        var loss= (initial-current)*quant;
        var lossPert= (loss/initial)*100;
        console.log('Loss is ${loss} and percetage is ${lossPert}');
        // showOutput('Loss is ${loss} and perctage is ${lossPert}');
    }else if(initial<current){
        var profit= (current-initial)*quant;
        var profitPercentage= (profit/initial)*100;
        console.log('Profit is ${profit} and percentage is ${profitPercentage}%');
        // showOutput('Profit is ${profit} and percentage profit is ${profitPercentage}%');
    }else{
        showOutput('No Pain No Gain');
    }
}

function showOutput(msg){
    outputBox.innerHTML=msg;
}