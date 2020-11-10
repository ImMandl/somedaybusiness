const dynamic = document.querySelector("#hero-dynamic");

// Words that it changes to
let arr = ['Onboarding','Remote work','Engagement','Sustainability','Management','Sales','Culture','Your own'];

let length = arr.length;

let count = 0

// changes the inner HTML 
const changer = () => {
    dynamic.innerHTML=`<h3><b>Check out our programs: <a href='#programs' class='a' >${arr[count]}</a></b></h3>`
    
    if(count >= length-1){
        count= 0;
    } else{
        count++
    }
    setTimeout(changer,3000);
};

changer();
