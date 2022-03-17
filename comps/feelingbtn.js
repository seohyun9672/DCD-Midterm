//MUST HAVE - CREATE A TEMPLATE TAG
var template_feelingbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_feelingbtn.innerHTML = `
<div class="feeling_btn" onclick="" hover="">
    <span class="btn_text"> btn_text </span>
</div>

<style>
    .feeling_btn {
        padding: 5px;
        width: fit-content;
        height: fit-content;
        border-radius: 5px;
        background-color:#D9E694;
        margin-top: 5px;
    }
    .btn_text {
        font-size: 16pt;
    }
    @media only screen and (max-width: 1440px){
        .btn_text{
            font-size:14pt;
        }
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFeelingBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_feelingbtn.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("btn_text")) {
            this.shadowRoot.querySelector("span").innerText = this.getAttribute("btn_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-feelingbtn", TheFeelingBtn)