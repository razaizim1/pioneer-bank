document.getElementById('login').addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// Deposit button event handler
const depositBtn = document.getElementById('deposit-btn')
depositBtn.addEventListener('click', function () {
    const depositAmount = getInputNumber('deposit-amount');
    updateSpanText('current-deposit', depositAmount);
    updateSpanText('current-blance', depositAmount);
    document.getElementById('deposit-amount').value = '';
})

// function 2
function updateSpanText(id, addedAmount) {
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const totalDeposit = addedAmount + currentAmount;
    document.getElementById(id).innerText = totalDeposit;
}

// function
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmountNumber = getInputNumber("withdraw-amount");
    updateSpanText('current-withdraw', withdrawAmountNumber);
    updateSpanText('current-blance', -1 * withdrawAmountNumber);
    document.getElementById('withdraw-amount').value = '';
})