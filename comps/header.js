//MUST HAVE - CREATE A TEMPLATE TAG
var template_header = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_header.innerHTML = `
<div class="head_cont">
    <h1>heading text</h1>
    <p>description text</p>
</div>
<style>
    .head_cont {
        text-align:center;
    }
    h1 {
        font-size: 64pt;
        margin-bottom:0;
    }
    em {
        color: #08509C;
        font-style:normal;
        font-weight:bold;
    }
    p {
        font-size: 24pt;
    }

    @media only screen and (max-width: 1440px){
        .head_cont {
            margin-bottom: -20pt;
        }
        h1 {
            font-size: 36pt;
            margin-top: 5pt;
        }
        p{
            font-size: 18pt;
        }

    } 
    @media only screen and (min-width: 1440px) and (max-width: 1920px){
        
        h1 {
            font-size: 48pt;
            margin-top: 5pt;
        }
        p{
            font-size: 22pt;
        }

    } 
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHeader extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_header.content.cloneNode(true)); //use the template to make a clone

        if (this.getAttribute("head_text")) {
            this.shadowRoot.querySelector("h1").innerText = this.getAttribute("head_text");
        }
        if (this.getAttribute("desc_text")) {
            this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("desc_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-header", TheHeader)