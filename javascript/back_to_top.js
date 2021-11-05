const scrollTopBtn = document.querySelector("#scrollTopBtn");

// When the user scrolls down 500px from the top of the document, show the button
/*
document.onscroll = function() {
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
        scrollTopBtn.style.display = "none";
    }else{
        scrollTopBtn.style.display = "block";
    }
}
*/

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    scrollTopBtn.style.display = "none";
    document.querySelector('#call-to-wrap').scrollIntoView({ 
        behavior: 'smooth' 
      }); 
}