//MUST HAVE - CREATE A TEMPLATE TAG
var template_header = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_header.innerHTML = `
<div class="head_cont">
    <h1>heading text</h1>
    <div class="desc">
    <p class="desc_text">description text</p>
    </div>
</div>
<style>
    .head_cont {
        text-align:center;
    }
    h1 {
        font-size:40pt;
        margin-bottom:0;
    }
    em {
        color: #08509C;
        font-style:normal;
        font-weight:bold;
        text-indent:0.25em;
        display: inline;
    }
    .desc {
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:20pt;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHeader extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_header.content.cloneNode(true)); //use the template to make a clone
    
        if(this.getAttribute("head_text")) {
            this.shadowRoot.querySelector("h1").innerText = this.getAttribute("head_text");
        }
        if(this.getAttribute("desc_text")) {
            this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("desc_text");
        }
        if(this.getAttribute("em_text")) {
            this.shadowRoot.querySelector("em").innerText = this.getAttribute("em_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-header", TheHeader)