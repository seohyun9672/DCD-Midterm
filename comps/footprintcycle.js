//MUST HAVE - CREATE A TEMPLATE TAG
var template_footprintcycle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_footprintcycle.innerHTML = `
     <img class="footprintcycle" src="imgs/FootprintCycle/FootprintCycle1.svg" alt="Footprint cycle">
     <style>
        .footprintcycle {
            width: 120px;
            height: 120px;
            position: absolute;
            right:0px;
            padding: 20px;
        }
    </style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFootprintCycle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_footprintcycle.content.cloneNode(true)); //use the template to make a clone
    }

    changeFootprintCycle(type="footprint_num"){
        this.shadowRoot.querySelector(".footprintcycle").src = `imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;

        if(type==="footprintcycle1"){
            this.shadowRoot.querySelector(".footprintcycle").src=`imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;
        }
        if(type==="footprintcycle2"){
            this.shadowRoot.querySelector(".footprintcycle").src=`imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;
        }
        if(type==="footprintcycle3"){
            this.shadowRoot.querySelector(".footprintcycle").src=`imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;
        }
        if(type==="footprintcycle4"){
            this.shadowRoot.querySelector(".footprintcycle").src=`imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;
        }
        if(type==="footprintcycle5"){
            this.shadowRoot.querySelector(".footprintcycle").src=`imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;
        }
        if(type==="footprintcycle6"){
            this.shadowRoot.querySelector(".footprintcycle").src=`imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;
        }
        

    }
    
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    // changeFootprintCycle(type="footprint_num"){
    //     if(type==="footprintcycle3"){
    //         this.shadowRoot.querySelector(".footprintcycle").src=`./imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg`;
    //     }
        
    // }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-footprintcycle", TheFootprintCycle)