//MUST HAVE - CREATE A TEMPLATE TAG
var template_time = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_time.innerHTML = `

<div class="time_cont">
    <span class="time_text"> 6:00AM </span>
</div>

<style>
    .time_cont {
        background-color: #FEFCE5;
        text-align: center;
        width: fit-content;
        height: fit-content;
        padding: 5px 15px;
        border-radius: 10px; 
        top: 10px;
        position: relative;
    }
    .time_cont > .time_text {
        color: black;
        font-size: 24pt;
    }
    
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTime extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_time.content.cloneNode(true)); //use the template to make a clone
        
        this.timeOrder = 1;
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    updateTime() {
        
        if(this.timeOrder === 1 || this.timeOrder === 2) {
        this.shadowRoot.querySelector(".time_text").innerText = "8:00AM"; 
        }

        if(this.timeOrder === 3 || this.timeOrder === 4 || this.timeOrder === 5) {
        this.shadowRoot.querySelector(".time_text").innerText = "9:00AM"; 
        }
        
        if(this.timeOrder === 6) {
        this.shadowRoot.querySelector(".time_text").innerText = "6:00PM"; 
        }
        
        if(this.timeOrder === 7) {
        this.shadowRoot.querySelector(".time_text").innerText = "7:00PM"; 
        }
        if(this.timeOrder === 8) {
        this.shadowRoot.querySelector(".time_text").innerText = "8:00PM"; 
        }
        if(this.timeOrder === 9) {
        this.shadowRoot.querySelector(".time_text").innerText = "11:00PM"; 
        }
    }
    decreaseTime() {
        this.timeOrder = this.timeOrder - 1;
        this.updateTime();
    }
    
    increaseTime() {
        this.timeOrder = this.timeOrder + 1;
        this.updateTime();
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-time", TheTime)