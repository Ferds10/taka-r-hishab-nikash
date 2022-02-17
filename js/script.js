const incomeExpensBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');
const totalExpensesField = document.getElementById('total-expense-field');
const balanceField = document.getElementById('balance-field');
const savingsField = document.getElementById('savings-field');
const remainingMoneyField = document.getElementById('Remaining-balance-field');

incomeExpensBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let incomeBox = document.getElementById('income-box');
    let balance = parseFloat(balanceField.innerText);
    let remainingBalance = parseFloat(remainingMoneyField.innerText);
    // console.log(incomeBox.value);
    balanceField.innerText = parseFloat(incomeBox.value) + balance;
    remainingMoneyField.innerText = parseFloat(incomeBox.value) + remainingBalance;
    incomeBox.value = '';


});

saveBtn.addEventListener('click', function (event) {
    event.preventDefault();

});