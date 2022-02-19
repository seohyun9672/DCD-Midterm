//MUST HAVE - CREATE A TEMPLATE TAG
var template_textbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textbtn.innerHTML = `
<div class="textbtn_cont">
    <p class="btn-text">btn text</p>
</div>
<style>
    .btn_text {
        font-weight:bolder;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTextBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_textbtn.content.cloneNode(true)); //use the template to make a clone
        
        if(this.getAttribute("btn_text")) {
            this.shadowRoot.querySelector("p").innerText = this.getAttribute("btn_text");
        }
        if(this.getAttribute("color")) {
            this.shadowRoot.querySelector("p").style.color = this.getAttribute("color");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-textbtn", TheTextBtn)