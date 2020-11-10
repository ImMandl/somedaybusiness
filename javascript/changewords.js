const dynamic = document.querySelector("#hero-dynamic");

let arr = ['Onboarding','Remote work','Engagement','Sustainability','Management','Sales','Culture','Your own'];

let length = arr.length;

let count = 0

const changer = () => {
    dynamic.innerHTML=`<p><b>Check out our programs: <a href='#programs' class='a' >${arr[count]}</a></b></p>`
    
    if(count >= length-1){
        count= 0;
    } else{
        count++
    }
    setTimeout(changer,3000);
};

changer();
