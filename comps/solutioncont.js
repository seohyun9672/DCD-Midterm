//MUST HAVE - CREATE A TEMPLATE TAG
var template_solutioncont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_solutioncont.innerHTML = `
<div class = "solutioncont">
    <img class = "solution_img" src="imgs/SolutionCont/Bicycle.svg" alt="Bicycle">
    <div class = "contents">
        <div class = "header_text">header text</div>
        <div class = "sub_cont">
            <the-checkbtn></the-checkbtn>
            <div class = "textbox">
                <p class = "subheader_text">sub_text</p>
                <p class = "desc_text">desc_text</p>
                <p class = "sub_desc_text">sub_desc_text</p>
            </div>
        </div>
        <div class = "sub_cont">
            <the-checkbtn></the-checkbtn>
            <div class = "textbox">
                <p class = "subheader_text">sub_text</p>
                <p class = "desc_text">desc_text</p>
                <p class = "sub_desc_text">sub_desc_text</p>
            </div>
        </div>
    </div>
    <the-exit class = "btn_exit"></the-exit>    
</div>
<style>
    .sub_cont:last-of-type{
        display: none;
    }
    .solutioncont {
        width: 600px;
        height: 320px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 8px 20px -4px lightgrey;
        position: absolute;
        background-color: #FFFFFF;
    }
    .solutioncont > img {
        width: 180px;
        height: 180px;
    }
    .contents {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 60%;
        justify-content: center;
    }
    .header_text {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: .7em;
    }
    p{
        margin: 0;
    }
    .sub_cont {
        display: flex;
        padding: .2em;
    }
    .subheader_text {
        font-size: 22px;
    }
    .desc_text {
        font-size: 16px;
    }
    .sub_desc_text {
        font-size: 14px;
        color: grey;
    }
    .btn_exit {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1em;
    }
    the-checkbtn {
        padding-right: 1em;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSolutionCont extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_solutioncont.content.cloneNode(true)); //use the template to make a clone
        this.hideSolutionCont()
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    hideSolutionCont(){
        document.querySelector("the-solutioncont").style.visibility = "hidden";
    }
    openSolutionCont(feeling="Worried") {
        this.shadowRoot.querySelector(".solutioncont").style.visibility = "visible"
        this.emoji_state=feeling;;
        if(feeling==="Worried"){
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Bicycle.svg";
            this.shadowRoot.querySelector(".header_text").innerText = `
            Feeling Worried?
            `
            this.shadowRoot.querySelector(".subheader_text").innerText = `Walk, Bike, or Carpool!`
            this.shadowRoot.querySelector(".desc_text").innerText = `
            Choosing a sustainable commute method (such as walking or biking) just once a week can prevent 158.1kg of CO2 from being produced each year*.
            `
            this.shadowRoot.querySelector(".sub_desc_text").innerText = `
            *20 mins at 50km/hr = ~16km/commute; 190g CO2 per km x 16km = 3.04kg CO2 x 52 weeks = 158.1kg/year.
            `
        }
        if(feeling==="Helpless") {
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Mobile.svg";
            this.shadowRoot.querySelector(".header_text").innerText = `
            Feeling Helpless?
            `
            this.shadowRoot.querySelector(".subheader_text").innerHTML = `
            Make a small change, like cooking!
            `
            this.shadowRoot.querySelector(".desc_text").innerHTML =`
            Reducing your delivery orders and cooking the ingredients in your fridge can reduce food waste and gasoline emissions.
            `
            this.shadowRoot.querySelector(".sub_cont:last-of-type").innerHTML = `
            <the-checkbtn></the-checkbtn>
                <div class = "textbox">
                <p class = "subheader_text">Make the most out of your phone!</p>
                <p class = "desc_text">Instead of upgrading to the latest phone every year, save your money and keep your phone throughout its entire lifespan.</p>
            </div>
            `
            this.shadowRoot.querySelector(".sub_cont:last-of-type").style.display = "flex";
            this.shadowRoot.querySelector(".sub_desc_text").style.display = "none";
        }

        if(feeling==="Inspired") {
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Lightbulb.svg";
            this.shadowRoot.querySelector(".header_text").innerText = `
            Feeling Inspired?
            `
            this.shadowRoot.querySelector(".subheader_text").innerHTML = `Do your research!`
            this.shadowRoot.querySelector(".desc_text").innerText = `
            Greenwashing is prevalent in almost all consumer industries. By staying informed, you can ensure that the sustainable steps you are taking are actually making an impact.
            `
            this.shadowRoot.querySelector(".sub_desc_text").style.display = "none";
        }
        if(feeling==="Embarrassed") {
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Cup.svg";
            this.shadowRoot.querySelector(".header_text").innerText = `
            Feeling Embarrassed?
            `
            this.shadowRoot.querySelector(".subheader_text").innerHTML = `
            Recycle paper cups
            `
            this.shadowRoot.querySelector(".desc_text").innerHTML =`
            Recycled paper cups’ carbon footprint is 40% lower than that of landfilled paper cups.
            `
            this.shadowRoot.querySelector(".sub_cont:last-of-type").innerHTML = `
            <the-checkbtn></the-checkbtn>
                <div class = "textbox">
                <p class = "subheader_text">Make the most out of your phone!</p>
                <p class = "desc_text">Producing reusable cups produces less carbon emissions than disposable paper cups, allowing you to continue enjoying your drinks.</p>
            </div>
            `
            this.shadowRoot.querySelector(".sub_cont:last-of-type").style.display = "flex";
            this.shadowRoot.querySelector(".sub_desc_text").style.display = "none";
        } 

        if(feeling==="Shocked") {
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Bag.svg";
            this.shadowRoot.querySelector(".header_text").innerText = `
            Feeling Shocked?
            `
            this.shadowRoot.querySelector(".subheader_text").innerText = `Reconsider your consumption!`
            this.shadowRoot.querySelector(".desc_text").innerText = `
            Consider your purchases and how you are contributing to excess waste and an increase in the demand for goods. Are there any items you could survive without? Are there items you can repurpose?
            `
            this.shadowRoot.querySelector(".sub_desc_text").style.display = "none"
        }
        
    }
    closeSolutionCont() {
        this.shadowRoot.querySelector(".solutioncont").style.visibility = "hidden";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-solutioncont", TheSolutionCont)