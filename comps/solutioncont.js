//MUST HAVE - CREATE A TEMPLATE TAG
var template_solutioncont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_solutioncont.innerHTML = `
<div class="solutioncont">
    <img src="imgs/Solutioncont_Bicycle.svg" alt="Bicycle">
    <div class="textbox">
        <the-exit></the-exit>
        <div class="header_text">Feeling Worried?</div>
        <the-checkbtn></the-checkbtn>
        <div class="subheader_text">Walk, Bike, or Carpool!</div>
        <p class="desc_text">Choosing a sustainable commute method (such as walking or biking) just once a week can prevent 158.1kg of CO2 from being
            produced each year*.</p>
        <p class ="sub_desc_text">*20 mins at 50km/hr = ~16km/commute; 190g CO2 per km x 16km = 3.04kg CO2 x 52 weeks = 158.1kg/year.</p>
    </div>
</div>
    <style>
    .solutioncont{
            width: 600px;
            height: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            box-shadow: 0 8px 20px -4px lightgrey;
            padding: 5px;
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
        }
        .header_text{
            font-size: 24px;
            font-weight: bold;
        }
        .subheader_text{
            font-size: 22px;
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
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-solutioncont", TheSolutionCont)