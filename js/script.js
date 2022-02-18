const incomeExpensBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');
const totalExpensesField = document.getElementById('total-expense-field');
const balanceField = document.getElementById('balance-field');
const savingsField = document.getElementById('savings-field');
const remainingMoneyField = document.getElementById('Remaining-balance-field');

// get value frome input box by dynamically.
function getIncomeValue(boxId) {
    let inputBox = document.getElementById(boxId);
    let inputIncome = parseFloat(inputBox);
    if (isNaN(inputIncome) || inputIncome < 0) {
        inputBox.value = '';
        return alert('Please input valid amount of money in number and positive format');

    };
    inputBox.value = '';
    return inputIncome;

}

//update Balance
incomeExpensBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let balanceAmount = parseFloat(balanceField.innerText);
    let inputIncome = getIncomeValue('income-box');
    console.log(inputIncome);




    // balanceField.innerText = inputIncome + balance;
    // remainingMoneyField.innerText = inputIncome + remainingBalance;
    // incomeBox.value = '';


});

// incomeExpensBtn.addEventListener('click', function (event) {
//     event.preventDefault();
// let incomeBox = document.getElementById('income-box');
// let balance = parseFloat(balanceField.innerText);
// let inputIncome = parseFloat(incomeBox.value);
// let remainingBalance = parseFloat(remainingMoneyField.innerText);
// // console.log(incomeBox.value);
// if (isNaN(inputIncome) || inputIncome < 0) {
//     incomeBox.value = '';
//     return alert('Please input valid amount of money in number and positive format');
// };



saveBtn.addEventListener('click', function (event) {
    event.preventDefault();

});