
function stopDefAction(evt) {
    evt.preventDefault();
};

function InputsValue(let, value){
    let.forEach((item) => {
        item.value = value
    });
};


let inputsBasiIncome = document.querySelectorAll(".inputsBasiIncome");
inputsBasiIncome.forEach((item, i) => {
    item.addEventListener('input',function(){console.log(item.value, i);});
});


let form = document.querySelector(".form_enter-costs");
form.style.display = "none";

let count = 0;
let buttonCosts = document.querySelectorAll(".s2_costs-btn");
buttonCosts.forEach((item, i) => {
        item.addEventListener('click', function() {
        count = i;
        form.style.display = "flex";

        let enter_costname = document.querySelectorAll(".enter_costname"),
            enter_costsum = document.querySelectorAll(".enter_costsum");

        InputsValue(enter_costname, '');
        InputsValue(enter_costsum, '');

   
        let beground = document.querySelector('.bg-form');   
        beground.style.display = 'flex';
  
        beground.addEventListener('click', function() {
            form.style.display = 'none';
            beground.style.display = 'none';
        });
        form.scrollIntoView({
            behavior: 'smooth',
            block: 'center'    
        });
    });
});

let mainCosts = document.querySelector(".mainCosts"),
    additionalCosts = document.querySelector(".additionalCosts");
let counter = 0;

let AddCost = document.querySelectorAll(".add-cost");
AddCost.forEach((item) => {
    item.addEventListener('click', function() {
        let formCosts = document.querySelector(".form_costs"),
            htmlCode = '<div class="form_costs_chiilds"><input class="enter_costname" type="text" name="" id="" placeholder="Стаття витрат" /><input class="enter_costsum" type="number" name="" id="" placeholder="Сума" /> </div>';
        formCosts.insertAdjacentHTML('beforeEnd', htmlCode);

        counter++
    });
});

document.querySelector('.add-cost').addEventListener(
    'click', stopDefAction, false
);


let costsMain = document.querySelector('.costs-main'),
    costsAdditional = document.querySelector('.costs-Additional');

document.querySelector('.send-costs').addEventListener(
    'click', stopDefAction, false
);

let btn = document.querySelector(".send-costs");
btn.addEventListener('click', function() {
    
    let enter_costname = document.querySelectorAll(".enter_costname"),
    enter_costsum = document.querySelectorAll(".enter_costsum");

    enter_costname.forEach((item, i) => {


        let enter
        if(count == 0){
            enter = document.querySelector(".mainCosts-list");
        } else{
            enter = document.querySelector(".additCosts-list");
        };

  
        if(enter_costsum[i].value == ''){
            console.error('item Error'); 
        } else{
            enter.innerHTML += '<li class="costs"><span class="nameCosts">'+ item.value +'</span><span class="forCloseIcon">'+ enter_costsum[i].value +'</span></li>';
        }
    });

    form.style.display = "none";
  
    let nav = document.querySelector('.s2_costs');
    nav.scrollIntoView({
        behavior: 'smooth',
        block: 'center'    
    });

    for(let i=0; i<counter; i++){
        let form_chiild = document.querySelector('.form_costs_chiilds');
        form_chiild.remove();
    };
    counter=0;

  
    let block = document.querySelectorAll('li.costs')
    block.forEach((item, i) => {
        item.addEventListener('click', function() {
        item.remove();
        });
    });

    let beground = document.querySelector('.bg-form');   
    beground.style.display = 'none';
});

let CalculateTheBudget = document.querySelector('.s2_total-btn');
CalculateTheBudget.addEventListener('click', function() {
    let btn_calculation = document.querySelector('.budget_calculation');
    let allCosts = document.querySelectorAll('.forCloseIcon'),
        allIncome = document.querySelectorAll('.Income');
    let spending = 0,
        revenue = 0;
        

    allCosts.forEach((item) => {
        spending+=Number(item.textContent);
    });  

    allIncome.forEach((item) => {
        revenue+=Number(item.value);
    });   
    
    let info = document.querySelectorAll('.info');

    info[1].innerHTML = spending + ' uah';
    info[0].innerHTML = revenue + ' uah';
    info[2].innerHTML = revenue-spending + ' uah';

    btn_calculation.style.display = "flex"; 
});