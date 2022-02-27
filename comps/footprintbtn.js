//MUST HAVE - CREATE A TEMPLATE TAG
var template_footprintbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_footprintbtn.innerHTML = `
<div class="footprint_btn">
    <a href="./story.html">
        <img src="imgs/bluefootprint.svg" alt="footprint">
    </a>
</div>

<style>
    .footprint_btn {
        border-radius: 50%;
        border: white solid 10px;
        background-color:transparent;
    }
    .footprint_btn img {
        display: block;
        width: 64px;
        height: 64px;
        box-shadow: 3px 3px 1px #ccc;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFootprintBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_footprintbtn.content.cloneNode(true)); //use the template to make a clone
    
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-footprintbtn", TheFootprintBtn)