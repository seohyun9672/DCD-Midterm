//MUST HAVE - CREATE A TEMPLATE TAG
var template_chevron = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_chevron.innerHTML = `
<div class="chev-cont">
    <img src="imgs/chevron.svg">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheChevron extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_chevron.content.cloneNode(true)); //use the template to make a clone
    
        if(this.getAttribute("direction")) {
            this.shadowRoot.querySelector("img").style.transform = "scaleX(-1)";
        }
    }


    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-chevron", TheChevron)