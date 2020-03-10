// Click to Remove Cart

const cartRemove = document.getElementById("remove-phn");
cartRemove.addEventListener("click",function(){
    remove("cartRemove");
});

const caseRemove = document.getElementById("remove-case");
caseRemove.addEventListener("click",function(){
    remove("caseRemove");
});


function remove(id) {
    const caseRemove = document.getElementById(id)
    caseRemove.style.display = "none";
}

const phonePrice = parseFloat(document.getElementById("phonePrice").innerText);
const casePrice = parseFloat(document.getElementById("casePrice").innerText);

// Click to increment Phone
const phoneItemInc = document.getElementById("phonePlusBtn");
phoneItemInc.addEventListener("click", function () {
    var item = parseInt(document.getElementById("phoneItem").value);
    item++;
    document.getElementById("phoneItem").value = item;
    var phoneSum = phonePrice*item;
    document.getElementById("phonePrice").innerText = phoneSum;
    
    subTotalTaxTotal();
});

// Click to increment Case
const caseItemInc = document.getElementById("casePlusBtn");
caseItemInc.addEventListener("click", function () {
    var item = parseInt(document.getElementById("caseItem").value);
    item++;
    document.getElementById("caseItem").value = item;
    var caseSum = casePrice * item;
    document.getElementById("casePrice").innerText = caseSum;

    subTotalTaxTotal();
})

// Click to decrement Phone

const phoneItemDec = document.getElementById("phoneMinusBtn");
phoneItemDec.addEventListener("click",function () {
    var item = parseInt(document.getElementById("phoneItem").value);
    if (item !=1) {
        item--;
    }
    document.getElementById("phoneItem").value = item;
    var phoneSum = phonePrice * item;
    document.getElementById("phonePrice").innerText = phoneSum; 

    subTotalTaxTotal();
})

// Click to decrement Case
const caseItemDec = document.getElementById("caseMinusBtn");
caseItemDec.addEventListener("click",function(){
    var item = parseInt(document.getElementById("caseItem").value);
    if (item !=1) {
        item--;
    }
    document.getElementById("caseItem").value = item;
    var caseSum = casePrice * item;
    document.getElementById("casePrice").innerText = caseSum;

    subTotalTaxTotal();
})

// SubTotal,Tax,Total

function subTotalTaxTotal() {
    var subTotal = parseFloat(document.getElementById("phonePrice").innerText) + parseFloat(document.getElementById("casePrice").innerText);
    document.getElementById("subTotal").innerText = subTotal;

    var tax = Math.round(subTotal * .10);
    document.getElementById("tax").innerText = tax;

    var Total = subTotal + tax;
    document.getElementById("total").innerText = Total;
}


// Checkout
function checkOut() {
    alert("Your Check Out has been completed")
}




