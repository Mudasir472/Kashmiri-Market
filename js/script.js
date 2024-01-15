addCartButns = document.querySelectorAll('.price-button span button');
butForAddbut = document.querySelectorAll('.butForAdd button');
butForAddP = document.querySelectorAll('.butForAdd p');
calProducrP = document.querySelector('.calProduct p');
cartEmpty = document.querySelector('.cartEmpty');

var boxx=document.querySelector('.boxx');
var bodyTr=document.querySelectorAll('tbody tr'); 
var bodyTrB=document.querySelectorAll('tbody tr b'); 


// toggle inside starts
insideToggle = document.querySelectorAll('.insideToggle');
subTotalb = document.querySelector('.subTotal p');
namePricep = document.querySelectorAll('.namePrice p');
// inside toggle closes


var i = 0;      //for cart count


// listener for card buttons

var total = 0;
var walnutPrice = 25;
var qnty1 = 0;
var OrangePrice = 34;
var qnty2 = 1;
var meatPrice = 50;
var qnty3 = 1;
var candyPrice = 58;
var qnty4 = 1;

// script for add cart button
var m = 0;
var n = 1
addCartButns.forEach(function (ele, index) {
    addCartButns[index].addEventListener("click", () => {
        boxx.style.display="block";
        bodyTr[0].style.display="flex";
        bodyTrB[index].innerHTML="1";
        cartEmpty.style.display = "none";
        butForAddP[index].innerHTML = "1";
        addCartButns[index].style.display = "none";
        if (index == 0) {
            m = 0;
            n = 1;
           
            butForAddbut[m].style.display = "block";
            butForAddbut[n].style.display = "block";
            total += walnutPrice;
            subTotalb.innerHTML = total;
        }
        else if (index == 1) {
            m = 2;
            n = 3
            
            butForAddbut[m].style.display = "block";
            butForAddbut[n].style.display = "block";
            total += OrangePrice;
            subTotalb.innerHTML = total;
        } else if (index == 2) {
            m = 4;
            n = 5;
            butForAddbut[m].style.display = "block";
            butForAddbut[n].style.display = "block";
            total += meatPrice;
            subTotalb.innerHTML = total;
        }
        else if (index == 3) {
            m = 6;
            n = 7;
            butForAddbut[m].style.display = "block";
            butForAddbut[n].style.display = "block";
            total += candyPrice;
            subTotalb.innerHTML = total;

        }
        butForAddP[index].style.display = "flex";
        i++;
        calProducrP.innerHTML = i;
        console.log(calProducrP.innerHTML)
        // toggle
        insideToggle[index].style.display = "flex";
        
        if(i==0){
            cartEmpty.style.display = "flex";
            
        }
        else{
            cartEmpty.style.display = "none";
        }
    });
});
// script closes for add cart button

// script for + and - buttons
var w = 1;
var x = 1;
var y = 1;
var z = 1;
butForAddbut.forEach(function (ele, index) {
    butForAddbut[index].addEventListener("click", () => {
        // for + button

        if (index == 1) {
            total += walnutPrice;
            subTotalb.innerHTML = total;
            w++;
            butForAddP[0].innerHTML = w;
            namePricep[0].innerHTML = "x " + w;
            i++
            calProducrP.innerHTML = i;
        }
        if (index == 3) {
            total += OrangePrice;
            subTotalb.innerHTML = total;
            x++;
            butForAddP[1].innerHTML = x;
            namePricep[1].innerHTML = "x " + x;
            i++
            calProducrP.innerHTML = i;
        }
        if (index == 5) {
            total += meatPrice;
            subTotalb.innerHTML = total;
            qnty3++;
            y++;
            namePricep[2].innerHTML = "x " + y;
            butForAddP[2].innerHTML = y;
            i++
            calProducrP.innerHTML = i;
        }
        if (index == 7) {
            total += candyPrice;
            subTotalb.innerHTML = total;
            qnty4++;
            z++;
            butForAddP[3].innerHTML = z;
            namePricep[3].innerHTML = "x " + z;
            i++
            calProducrP.innerHTML = i;
        }
        // for - button

        if (index == 0) {
            total -= walnutPrice;
            subTotalb.innerHTML = total;
            w--;
            butForAddP[0].innerHTML = w;
            namePricep[0].innerHTML = "x " + w;
            i--;
            calProducrP.innerHTML = i;
            if (butForAddP[0].innerHTML <= 0) {
                w = 1;
                qnty1 = 0;
                addCartButns[0].style.display = "flex";
                butForAddbut[0].style.display = "none";
                butForAddbut[1].style.display = "none";
                butForAddP[0].style.display = "none";
                if(calProducrP.innerHTML==0){
                    cartEmpty.style.display = "flex";
                }
                insideToggle[0].style.display = "none";
            }
        }
        if (index == 2) {
            total -= OrangePrice;
            subTotalb.innerHTML = total;
            x--;
            butForAddP[1].innerHTML = x;
            namePricep[1].innerHTML = "x " + x;
            i--;
            calProducrP.innerHTML = i;
            if (butForAddP[1].innerHTML <= 0) {
                x = 1;
                qnty2 = 1;
                addCartButns[1].style.display = "flex";
                butForAddbut[2].style.display = "none";
                butForAddbut[3].style.display = "none";
                butForAddP[1].style.display = "none";
                if(calProducrP.innerHTML==0){
                    cartEmpty.style.display = "flex";
                }
                
                insideToggle[1].style.display = "none";

            }
        }
        if(index==4){
            total -= meatPrice;
            subTotalb.innerHTML = total;
            y--;
            butForAddP[2].innerHTML = y;
            namePricep[2].innerHTML = "x " + y;
            i--;
            calProducrP.innerHTML = i;
            if (butForAddP[2].innerHTML <= 0) {
                y = 1;
                qnty3 = 1;
                addCartButns[2].style.display = "flex";
                butForAddbut[4].style.display = "none";
                butForAddbut[5].style.display = "none";
                butForAddP[2].style.display = "none";
                if(calProducrP.innerHTML==0){
                    cartEmpty.style.display = "flex";
                }
                insideToggle[2].style.display = "none";
            }
        }
        if(index==6){
            total -= candyPrice;
            subTotalb.innerHTML = total;
            z--;
            butForAddP[3].innerHTML = z;
            namePricep[3].innerHTML = "x " + z;
            i--;
            calProducrP.innerHTML = i;
            if (butForAddP[3].innerHTML <= 0) {
                z = 1;
                qnty4 = 1;
                addCartButns[3].style.display = "flex";
                butForAddbut[6].style.display = "none";
                butForAddbut[7].style.display = "none";
                butForAddP[3].style.display = "none";
                if(calProducrP.innerHTML==0){
                    cartEmpty.style.display = "flex";
                }
                insideToggle[3].style.display = "none";
            }
        }
    })

});
// script end for + and - buttons

// lets work for filtering


cardRow1 = document.querySelector('.cardRow1');
card = document.querySelectorAll('.card');
FrozenFood = document.querySelectorAll('.FrozenFood');
MeatFish = document.querySelectorAll('.MeatFish');
All = document.querySelectorAll('.All');    //for all

notAvail=document.querySelector('.notAvail');

Filter = document.querySelectorAll('.rightHeading p');
Filter.forEach(function(ele,index){
    Filter[index].addEventListener("click",()=>{
        if(index==0)
        {
        for (var i = 0; i < 4; i++) {
            All[i].style.display = "block";
            // card[i].classList.add("margin-12");
        }
            notAvail.style.display="none"
            Filter[0].classList.add("text-decoration-underline");
            for (var i = 1; i < 4; i++) {
                console.log("Hi Muddu")
                Filter[i].classList.remove("text-decoration-underline");
            }                     
        }
        if(index==1){
            for (var z = 0; z < 2; z++) {
                    MeatFish[z].style.display = "none";
                    notAvail.style.display="none"
                    FrozenFood[z].style.display = "block";
                }
            
                // cardRow1.style.justifyContent = "start";
                // card[0].classList.add("margin-12");
                Filter[1].classList.add("text-decoration-underline")
                for (var i = 0; i < 4 && i != 1; i++) {
                    Filter[i].classList.remove("text-decoration-underline");
                }
                Filter[2].classList.remove("text-decoration-underline");

        }
        if(index==2){
            for (var z = 0; z < 2; z++) {
                        FrozenFood[z].style.display = "none";
                        notAvail.style.display="none"
                        MeatFish[z].style.display = "block";
                    }
                
                    // cardRow1.style.justifyContent = "start";
                    // card[2].classList.add("margin-12");
                    Filter[2].classList.add("text-decoration-underline")
                    for (var i = 0; i < 4 && i != 2; i++) {
                        Filter[i].classList.remove("text-decoration-underline");
                    }
                    Filter[3].classList.remove("text-decoration-underline");
        }
        if(index==3){
            for (var z = 0; z < 4; z++) {
                card[z].style.display = "none";
            }
            notAvail.style.display="flex"
            
            Filter[3].classList.add("text-decoration-underline")
            for (var i = 0; i < 4 && i != 3; i++) {
                Filter[i].classList.remove("text-decoration-underline");
            }
        }
    });
});

// for login
var loginBut=document.querySelector('.loginBut');
var mainBody=document.querySelector('main');

loginBut.addEventListener("click", ()=>{
mainBody.style.display="none";
var login=document.querySelector('.login').style.display="flex";
});

// for login


