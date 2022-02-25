//MUST HAVE - CREATE A TEMPLATE TAG
var template_time = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_time.innerHTML = `

<div class="time_cont">
    <span class="time_text"> time_text </span>
</div>

<style>
    .time_cont {
        background-color: #FEFCE5;
        text-align: center;
        width: fit-content;
        height: fit-content;
        padding: 5px 15px;
        border-radius: 10px; 

    }
    .time_cont > .time_text {
        color: black;
        font-size: 24px;
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
        if(this.getAttribute("time_text")) {
            this.shadowRoot.querySelector("span").innerText = this.getAttribute("time_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-time", TheTime)