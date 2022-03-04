//MUST HAVE - CREATE A TEMPLATE TAG
var template_solutioncont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_solutioncont.innerHTML = `
<div class="solutioncont">
    <img class="solution_img" src="imgs/SolutionCont/Bicycle.svg" alt="Bicycle">
    <div class="textbox">
        <the-exit></the-exit>
        <div class="header_text">Feeling Worried?</div>
        <div class="subheader_cont">
        <the-checkbtn></the-checkbtn>
        <div class="subheader_text">Walk, Bike, or Carpool!</div>
        </div>
        <p class="desc_text">Choosing a sustainable commute method (such as walking or biking) just once a week can prevent 158.1kg of CO2 from being
            produced each year*.</p>
        <p class ="sub_desc_text">*20 mins at 50km/hr = ~16km/commute; 190g CO2 per km x 16km = 3.04kg CO2 x 52 weeks = 158.1kg/year.</p>
    </div>
</div>
    <style>
    .solutioncont{
            width: 600px;
            height: 320px;
            display: none;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            box-shadow: 0 8px 20px -4px lightgrey;
            padding: 5px;
            position:absolute;
            background-color:#fff;
        }
        the-checkbtn {
            display:inline-block;
        }
        .solutioncont > img{
            width: 180px;
            height: 180px;
        }
        .textbox{
            display: flex;
            flex-direction: column;
            align-items: space-around;
            padding: 20px;
            position:relative;
        }
        .header_text{
            font-size: 24px;
            font-weight: bold;
        }
        .subheader_text{
            font-size: 22px;
            display:inline;
        }
        .desc_text{
            font-size: 16px;
        }
        .sub_desc_text{
            font-size: 12px;
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
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    openSolutionCont(feeling="Worried") {
        this.emoji_state=feeling;
        this.shadowRoot.querySelector(".solutioncont").style.display = "flex";
        if(feeling==="Worried"){
            this.shadowRoot.querySelector(".textbox").innerHTML = `
            <the-exit></the-exit>
            <div class="header_text">Feeling Worried?</div>
            <the-checkbtn></the-checkbtn>
            <div class="subheader_text">Walk, Bike, or Carpool!</div>
            <p class="desc_text">Choosing a sustainable commute method (such as walking or biking) just once a week can prevent 158.1kg of CO2 from being
                produced each year*.</p>
            <p class ="sub_desc_text">*20 mins at 50km/hr = ~16km/commute; 190g CO2 per km x 16km = 3.04kg CO2 x 52 weeks = 158.1kg/year.</p>
            `
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Bicycle.svg";
        }
        if(feeling==="Helpless") {
            this.shadowRoot.querySelector(".textbox").innerHTML = `
            <the-exit></the-exit>
            <div class="header_text">Feeling Helpless?</div>
            <the-checkbtn></the-checkbtn>
            <div class="subheader_text">Make a small change, like cooking!</div>
            <p class="desc_text">Reducing your delivery orders and cooking the ingredients in your fridge can reduce food waste and gasoline emissions.</p>
            <the-checkbtn></the-checkbtn>
            <div class="subheader_text">Make the most out of your phone!</div>
            <p class="desc_text">Instead of upgrading to the latest phone every year, save your money and keep your phone throughout its entire lifespan.</p>
            `
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Mobile.svg";
        }
        if(feeling==="Inspired") {
            this.shadowRoot.querySelector(".textbox").innerHTML = `
            <the-exit></the-exit>
            <div class="header_text">Feeling Inspired?</div>
            <the-checkbtn></the-checkbtn>
            <div class="subheader_text">Do your research!</div>
            <p class="desc_text">Greenwashing is prevalent in almost all consumer industries. By staying informed, you can ensure that the sustainable steps you are taking are actually making an impact. </p>
            `
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Lightbulb.svg";
        }
        if(feeling==="Shocked") {
            this.shadowRoot.querySelector(".textbox").innerHTML = `
            <the-exit></the-exit>
            <div class="header_text">Feeling Shocked?</div>
            <the-checkbtn></the-checkbtn>
            <div class="subheader_text">Reconsider your consumption!</div>
            <p class="desc_text">Consider your purchases and how you are contributing to excess waste and an increase in the demand for goods. Are there any items you could survive without? Are there items you can repurpose? </p>
            `
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Bag.svg";
        }
        if(feeling==="Embarrassed") {
            this.shadowRoot.querySelector(".textbox").innerHTML = `
            <the-exit></the-exit>
            <div class="header_text">Feeling Embarrassed?</div>
            <the-checkbtn></the-checkbtn>
            <div class="subheader_text">Recycle paper cups.</div>
            <p class="desc_text">Recycled paper cups’ carbon footprint is 40% lower than that of landfilled paper cups. </p>
            <the-checkbtn></the-checkbtn>
            <div class="subheader_text">Switch to a reusable cup!</div>
            <p class="desc_text">Producing reusable cups produces less carbon emissions than disposable paper cups, allowing you to continue enjoying your drinks.</p>
            `
            this.shadowRoot.querySelector(".solution_img").src = "imgs/SolutionCont/Cup.svg";
        } 
    }
    closeSolutionCont() {
        this.shadowRoot.querySelector(".solutioncont").style.display = "none";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-solutioncont", TheSolutionCont)