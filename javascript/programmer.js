const onboar = document.querySelector("#onboar");
const remote = document.querySelector("#remote");
const engage = document.querySelector("#engage");
const sustain = document.querySelector("#sustain");
const manage = document.querySelector("#manage");
const sales = document.querySelector("#sales");
const culture = document.querySelector("#culture");
const your = document.querySelector("#your");

const ons = document.querySelector("#onboar-s");
const ens = document.querySelector("#engage-s");
const res = document.querySelector("#remote-s");
const sus = document.querySelector("#sustain-s");
const mas = document.querySelector("#manage-s");
const sas = document.querySelector("#sales-s");
const cus = document.querySelector("#culture-s");
const yos = document.querySelector("#your-s");

const information = (evt) => {
    event.preventDefault();

    if(evt.target===onboar){
        onboar.innerHTML = `<div class='program-div'><h3 class='grey'>Onboarding</h3><br><div class='program-text'><p>Having a structure and welcoming onboarding, even before the first day of new employees are crucial for them to be efficient as soon as possible. Just choose witch onboarding program the new employee will participate in and assign their leader and you are good to go. Leaders will have an efficient and easy tool to manage and welcome their new employees and at the same time it feels warm and welcoming for the new employees</p></div></div>`

        engage.innerHTML =`<h3 class='grey'>Engagement</h3><p>Read more</p>`
        sustain.innerHTML =`<h3 class='grey'>Sustainability</h3><p>Read more</p>`
        manage.innerHTML =`<h3 class='grey'>Management</h3><p>Read more</p>`
        sales.innerHTML =`<h3 class='grey'>Sales</h3><p>Read more</p>`
        culture.innerHTML =`<h3 class='grey'>Culture</h3><p>Read more</p>`
        your.innerHTML =`<h3 class='grey'>Your own</h3><p>Read more</p>`
        remote.innerHTML =`<h3 class='grey'>Remote work</h3><p>Read more</p>`

    } else if(evt.target==remote){
        remote.innerHTML = `<div class='program-div'><h3 class='grey'>Remote work</h3><br><div class='program-text'><p>After Covid-19 hit a lot of companies are struggling how to engage and build a community when most people are remote working or just part time in the office. Using our program the employees will get in touch with each other and keep on growing the good parts of the culture that you had when you where all at the same office</p></div></div>`

        engage.innerHTML =`<h3 class='grey'>Engagement</h3><p>Read more</p>`
        onboar.innerHTML =`<h3 class='grey'>Onboarding</h3><p>Read more</p>`
        sustain.innerHTML =`<h3 class='grey'>Sustainability</h3><p>Read more</p>`
        manage.innerHTML =`<h3 class='grey'>Management</h3><p>Read more</p>`
        sales.innerHTML =`<h3 class='grey'>Sales</h3><p>Read more</p>`
        culture.innerHTML =`<h3 class='grey'>Culture</h3><p>Read more</p>`
        your.innerHTML =`<h3 class='grey'>Your own</h3><p>Read more</p>`

    } else if(evt.target==engage){
        engage.innerHTML = `<div class='program-div'><h3 class='grey'>Engagement</h3><br><div class='program-text'><p>Having an engaged workers makes both the environment and economic results better. There are many factors to what drives a high level of engagement, but somethings are always relevant and that is to include and listen to the workers</p></div></div>`

        onboar.innerHTML =`<h3 class='grey'>Onboarding</h3><p>Read more</p>`
        sustain.innerHTML =`<h3 class='grey'>Sustainability</h3><p>Read more</p>`
        manage.innerHTML =`<h3 class='grey'>Management</h3><p>Read more</p>`
        sales.innerHTML =`<h3 class='grey'>Sales</h3><p>Read more</p>`
        culture.innerHTML =`<h3 class='grey'>Culture</h3><p>Read more</p>`
        your.innerHTML =`<h3 class='grey'>Your own</h3><p>Read more</p>`
        remote.innerHTML =`<h3 class='grey'>Remote work</h3><p>Read more</p>`

    }else if(evt.target==sustain){
        sustain.innerHTML = `<div class='program-div'><h3 class='grey'>Sustainability</h3><br><div class='program-text'><p>Our sustainability program is focuses on what the employee as individuals are able to do. The program touches into several of the UN sustainability goals and its a fun way to actively see how you participate to make the world a little better.</p></div></div>`

        onboar.innerHTML =`<h3 class='grey'>Onboarding</h3><p>Read more</p>`
        engage.innerHTML =`<h3 class='grey'>Engagement</h3><p>Read more</p>`
        manage.innerHTML =`<h3 class='grey'>Management</h3><p>Read more</p>`
        sales.innerHTML =`<h3 class='grey'>Sales</h3><p>Read more</p>`
        culture.innerHTML =`<h3 class='grey'>Culture</h3><p>Read more</p>`
        your.innerHTML =`<h3 class='grey'>Your own</h3><p>Read more</p>`
        remote.innerHTML =`<h3 class='grey'>Remote work</h3><p>Read more</p>`

    } else if(evt.target==manage){
        manage.innerHTML = `<div class='program-div'><h3 class='grey'>Management</h3><br><div class='program-text'><p>All businesses will be affected by good or poor management and those that feel the most pressure are team leaders. With our program you can help them feel empowered in the position and install a unified management culture across the company.</p></div></div>`

        onboar.innerHTML =`<h3 class='grey'>Onboarding</h3><p>Read more</p>`
        engage.innerHTML =`<h3 class='grey'>Engagement</h3><p>Read more</p>`
        sustain.innerHTML =`<h3 class='grey'>Sustainability</h3><p>Read more</p>`
        sales.innerHTML =`<h3 class='grey'>Sales</h3><p>Read more</p>`
        culture.innerHTML =`<h3 class='grey'>Culture</h3><p>Read more</p>`
        your.innerHTML =`<h3 class='grey'>Your own</h3><p>Read more</p>`
        remote.innerHTML =`<h3 class='grey'>Remote work</h3><p>Read more</p>`

    } else if(evt.target==sales){
        sales.innerHTML = `<div class='program-div'><h3 class='grey'>Sales</h3><br><div class='program-text'><p>With our sales program we have put our long experience into good exercises so your whole team can learn from the best.</p></div></div>`

        onboar.innerHTML =`<h3 class='grey'>Onboarding</h3><p>Read more</p>`
        engage.innerHTML =`<h3 class='grey'>Engagement</h3><p>Read more</p>`
        sustain.innerHTML =`<h3 class='grey'>Sustainability</h3><p>Read more</p>`
        manage.innerHTML =`<h3 class='grey'>Management</h3><p>Read more</p>`
        culture.innerHTML =`<h3 class='grey'>Culture</h3><p>Read more</p>`
        your.innerHTML =`<h3 class='grey'>Your own</h3><p>Read more</p>`
        remote.innerHTML =`<h3 class='grey'>Remote work</h3><p>Read more</p>`

    } else if(evt.target==culture){
        culture.innerHTML = `<div class='program-div'><h3 class='grey'>Culture</h3><br><div class='program-text'><p>Culture eats strategy for breakfast said Peter Drucker at one point. If the culture is bad you can forget about implementing a strategy. The people in your organisation is the most important asset you got. With our culture program you can focus on those values that reflect your company and build your wanted culture.</p></div></div>`
        

        onboar.innerHTML =`<h3 class='grey'>Onboarding</h3><p>Read more</p>`
        engage.innerHTML =`<h3 class='grey'>Engagement</h3><p>Read more</p>`
        sustain.innerHTML =`<h3 class='grey'>Sustainability</h3><p>Read more</p>`
        manage.innerHTML =`<h3 class='grey'>Management</h3><p>Read more</p>`
        sales.innerHTML =`<h3 class='grey'>Sales</h3><p>Read more</p>`
        your.innerHTML =`<h3 class='grey'>Your own</h3><p>Read more</p>`
        remote.innerHTML =`<h3 class='grey'>Remote work</h3><p>Read more</p>`

    } else if(evt.target==your){
        your.innerHTML = `<div class='program-div'><h3 class='grey'>Your own</h3><br><div class='program-text'><p>If you cant find a program suited for your needs our platform and we are flexible. Reach out to us and we can help you build your own training program.</p></div></div>`

        onboar.innerHTML =`<h3 class='grey'>Onboarding</h3><p>Read more</p>`
        engage.innerHTML =`<h3 class='grey'>Engagement</h3><p>Read more</p>`
        sustain.innerHTML =`<h3 class='grey'>Sustainability</h3><p>Read more</p>`
        manage.innerHTML =`<h3 class='grey'>Management</h3><p>Read more</p>`
        sales.innerHTML =`<h3 class='grey'>Sales</h3><p>Read more</p>`
        culture.innerHTML =`<h3 class='grey'>Culture</h3><p>Read more</p>`
        remote.innerHTML =`<h3 class='grey'>Remote work</h3><p>Read more</p>`
    } 
    information()
}

// click evnt.
engage.addEventListener("click", information);
remote.addEventListener("click", information);
onboar.addEventListener("click", information);
sustain.addEventListener("click", information);
manage.addEventListener("click", information);
sales.addEventListener("click", information);
culture.addEventListener("click", information);
your.addEventListener("click", information);


