//rgb(133, 69, 133)
//rgb(226, 192, 209)
var quant = document.querySelectorAll('.Quant')
var prices = document.querySelectorAll('.price')
//selecting the like icons
var likes = document.querySelectorAll('.fa')
console.log(likes)
for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function(){
        if ( likes[i].style.color === "rgb(133, 69, 133)" ) {
            likes[i].style.color = "rgb(226, 192, 209)"
        } else{
            likes[i].style.color = "rgb(133, 69, 133)"
        }
    })
}

// selcting our plus buttons
var plusBtns = document.querySelectorAll('.plus-btn')
console.log(plusBtns)
// console.log(quant)
for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener('click', function(){
        // quant[i].value++
        plusBtns[i].previousElementSibling.value++ 
        totalPrice()  
    })
}

//selecting minus buttons

var minusBtns = document.querySelectorAll('.minus-btn')
console.log(minusBtns)
for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener('click', function(){
        if ( minusBtns[i].nextElementSibling.value > 1 ) {
            // quant[i].value--
            minusBtns[i].nextElementSibling.value--
            totalPrice()
        }
    })
}

//selecting delete buttons

var deleteBtns = document.querySelectorAll('.delete')
console.log(deleteBtns)
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function(){
        deleteBtns[i].parentNode.remove()
        totalPrice();
    })
}


// console.log(prices)
function totalPrice() {
    var sum = 0;
    var quant = document.querySelectorAll('.Quant')
    var prices = document.querySelectorAll('.price')
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i].innerHTML * quant[i].value
    }
    document.getElementById('finalPrice').value = sum
}


