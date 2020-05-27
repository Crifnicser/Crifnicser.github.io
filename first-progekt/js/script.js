
//елементи розрахунку бюджету
let totalBtn = document.querySelector(".s2_total-btn"),
    budgetCalc = document.querySelector(".budget_calculation"),
    extraIncomes = document.querySelector(".incomes-addit"),
    mainIncomes = document.querySelector(".incomes-main"),
    totalIncomes = document.querySelector(".total-incomes"),
    totalCosts = document.querySelector(".total-costs"),
    remains = document.querySelector(".remains");


let detailedCosts = document.querySelector(".detailed-costs"),
    costsBlock = document.getElementById("costs"),
    detailedIncomes = document.querySelector(".detailed-incomes"),
    incomesBlock = document.getElementById("incomes");


let addCost = document.querySelectorAll(".s2_costs-btn"),
    formBack = document.querySelector(".form-back"),
    formEnter = document.querySelector(".form_enter-costs");


let addOneMoreCost = document.querySelector(".add-cost"),
    sendCosts = document.querySelector(".send-costs");


let li,
    target;


let newEnterCostName = document.createElement("input"),
    newEnterCostSum = document.createElement("input"),
    formInputs = document.querySelector(".form-inputs"),
    enterCostBlock = document.querySelector(".cost-block"),
    countOfNewInputs = 1;


let currencyItems = document.querySelectorAll(".currency-item"),
    currency = document.querySelectorAll(".currency");


currencyItems.forEach(function (item) {
    item.addEventListener("click", function () {
        let action = event.target.dataset.action;
        for (let i = 0; i < currency.length; i++) {
            currency[i].innerText = action;
        }
    });
});

let enterIncomes = document.querySelectorAll(".number");
enterIncomes.forEach(function (item) {
    item.addEventListener('input', function () {
        if (item.value > 999999999) {
            item.value = 999999999;
        }
    });
});


addCost.forEach(function (item) {
    item.addEventListener("click", function () {
        formInputs.innerHTML = '<div class="cost-block"><input required maxlength="20" class="enter_costname" type="text" placeholder="Витрата"/><input required class="enter_costsum" type="number" placeholder="Сума" /><span><img class="close-img" src="./img/close.png"></img></span></div>';
        formBack.style.display = "flex";
        target = event.target;
        maxValue();
    });
});


function maxValue() {
    let enterCostSum = document.querySelectorAll(".enter_costsum");
    enterCostSum.forEach(function (item) {
        item.addEventListener('input', function () {
            if (item.value > 999999999) {
                item.value = 999999999;
            }
        });
    });
    event.preventDefault();    
}


addOneMoreCost.addEventListener("click", function (event) {
    countOfNewInputs++;
    formInputs.insertAdjacentHTML("beforeend", '<div class="cost-block"><input required maxlength="20" class="enter_costname" type="text" placeholder="Витрата"/><input required class="enter_costsum" type="number" placeholder="Сума" /><span><img class="close-img" src="./img/close.png"></img></span></div>');
    formInputs.addEventListener("click", function (event) {
        let target = event.target;
        if (target.classList.contains("close-img")) {
            let parent = target.parentNode;
            parent.parentNode.remove();
            countOfNewInputs--;
        } else {
            return;
        }
    });
    maxValue();

});


sendCosts.addEventListener("click", function (event) {
    let enterCostName = document.querySelectorAll(".enter_costname"),
        enterCostSum = document.querySelectorAll(".enter_costsum");

    
    for (let i = 0; i < countOfNewInputs; i++) {
        if (enterCostSum[i].value === '' || enterCostName[i].value === '') {
            return;
        }
    }

    enterCostSum.forEach(function (item, i) {
        if (target.classList.contains("main")) {
            li = document.querySelector(".mainCosts-list");
        } else {
            li = document.querySelector(".additCosts-list");
        }
        li.innerHTML += '<li class="inner-li"><span>' + enterCostName[i].value + '</span><span class="number">' + item.value + '</span><span><img class="close-img" src="./img/close.png"></img></span><br></li>';
    });
    formInputs.innerHTML = '<div class="cost-block"><input required maxlength="20" class="enter_costname" type="text" placeholder="Витрата"/><input required class="enter_costsum" type="number" placeholder="Сума" /><span><img class="close-img" src="./img/close.png"></img></span></div>';
    countOfNewInputs = 1;
    formBack.style.display = "none";
    event.preventDefault();
});


formBack.addEventListener("click", function () {
    countOfNewInputs = 1;
    formInputs.innerHTML = '<div class="cost-block"><input required maxlength="20" class="enter_costname" type="text" placeholder="Витрата"/><input required class="enter_costsum" type="number" placeholder="Сума" /><span><img class="close-img" src="./img/close.png"></img></span></div>';
    formBack.style.display = "none";
});


formEnter.addEventListener("click", function (e) {
    e.stopPropagation();
});


costsBlock.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("close-img")) {
        let parent = target.parentNode;
        parent.parentNode.remove();
    } else {
        return;
    }
});


function arraySum() {
    let sum = 0,
        costsSum = document.querySelectorAll(".number");
    if (costsSum.length === 0) {
        totalCosts.innerHTML = 0;
    }
    costsSum.forEach(function (item) {
        sum += Number(item.innerText);
        totalCosts.innerHTML = sum;
    });
}

totalBtn.addEventListener("click", function () {
    totalIncomes.innerHTML = Number(mainIncomes.value) + Number(extraIncomes.value);
    arraySum();
    remains.innerHTML = Number(totalIncomes.innerText) - Number(totalCosts.innerText);
    budgetCalc.style.display = "flex";
});


detailedCosts.addEventListener("click", function () {
    costsBlock.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

detailedIncomes.addEventListener("click", function () {
    incomesBlock.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});