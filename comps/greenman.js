//MUST HAVE - CREATE A TEMPLATE TAG
var template_greenman = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_greenman.innerHTML = `
<div>
    <img class="greenman" src="imgs/greenman/Greenman1.svg" alt=greenman>
</div>

<style>
    .greenman {
        width: auto;
        max-height:10%;
        padding: 20px;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheGreenman extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_greenman.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".greenman").src=`./imgs/greenman/${this.getAttribute("greenman_num")}.svg`;
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-greenman", TheGreenman)