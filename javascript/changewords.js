const dynamic = document.querySelector("#hero-dynamic");

// Words that it changes to
let arr = ['Onboarding','HMS','Engagement','Sustainability','Management'];

let length = arr.length;

let count = 0

// changes the inner HTML 
const changer = () => {
    dynamic.innerHTML=`<h3><b>What are you trying to change: <a href='#programs' class='a' >${arr[count]}</a></b></h3>`
    
    if(count >= length-1){
        count= 0;
    } else{
        count++
    }
    setTimeout(changer,3000);
};

changer();
