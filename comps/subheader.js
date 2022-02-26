//MUST HAVE - CREATE A TEMPLATE TAG
var template_subheader = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_subheader.innerHTML = `
<div class= "sub-header_text">text</div>
<style>
.sub-header_text{  
    fontSize: 18px;
    color: #08509C;
    font-weight: bolder;
</style>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSubheader extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_subheader.content.cloneNode(true)); //use the template to make a clone
    
        if(this.getAttribute("subheader_text")) {
            this.shadowRoot.querySelector(".sub-header_text").innerText = this.getAttribute("subheader_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-subheader", TheSubheader)