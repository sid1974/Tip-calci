const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipamount = document.getElementById('tip-amount');


calculate = () => {
    const tip = ((amount.value * quality.value)/(guests.value)).toFixed(2);
    amount.value='';
    guests.value ='';
    quality.value ='';
    if(tip === null){
        tipamount.innerHTML = 'Tip $0 each';
        showtipamount();

    }
    else{
        tipamount.innerHTML = 'Tip $'  + tip +' each';
        showtipamount();
    }
}

showtipamount=()=>{
    var x =tipamount;
    x.className ='show';
    setTimeout(function(){
        x.className =x.className.replace('show','');
    },3000);
}