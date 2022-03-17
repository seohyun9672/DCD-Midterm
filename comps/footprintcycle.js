//MUST HAVE - CREATE A TEMPLATE TAG
var template_footprintcycle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_footprintcycle.innerHTML = `
     <img class="footprintcycle" src="imgs/FootprintCycle/FootprintCycle1.svg" alt="Footprint cycle">
     <style>
        .footprintcycle {
            width: 120pt;
            height: 120pt;
            position: absolute;
            right:0px;
            padding: 20px;
        }
        @media only screen and (max-width: 1440px){
            .footprintcycle{
                width: 110pt;
                height: 110pt;
                padding: 15px;
            }
        }
        @media only screen and (min-width: 1441px) and (max-width: 1920px){
            .footprintcycle{
                width: 115pt;
                height: 115pt;
                padding: 18px;
            }
        }
    </style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFootprintCycle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_footprintcycle.content.cloneNode(true)); //use the template to make a clone
    }

    changeFootprintCycle(type = "footprint_num") {

        if (type === "footprintcycle1") {
            this.shadowRoot.querySelector(".footprintcycle").src = `imgs/FootprintCycle/footprintcycle1.svg`;
        }
        if (type === "footprintcycle2") {
            this.shadowRoot.querySelector(".footprintcycle").src = `imgs/FootprintCycle/footprintcycle2.svg`;
        }
        if (type === "footprintcycle3") {
            this.shadowRoot.querySelector(".footprintcycle").src = `imgs/FootprintCycle/footprintcycle3.svg`;
        }
        if (type === "footprintcycle4") {
            this.shadowRoot.querySelector(".footprintcycle").src = `imgs/FootprintCycle/footprintcycle4.svg`;
        }
        if (type === "footprintcycle5") {
            this.shadowRoot.querySelector(".footprintcycle").src = `imgs/FootprintCycle/footprintcycle5.svg`;
        }
        if (type === "footprintcycle6") {
            this.shadowRoot.querySelector(".footprintcycle").src = `imgs/FootprintCycle/footprintcycle6.svg`;
        }


    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    // changeFootprintCycle(type="footprint_num"){
    //     if(type==="footprintcycle3"){
    //         this.shadowRoot.querySelector(".footprintcycle").src=`./imgs/FootprintCycle/footprintcycle.svg`;
    //     }

    // }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-footprintcycle", TheFootprintCycle)