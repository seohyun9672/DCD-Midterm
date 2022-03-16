//MUST HAVE - CREATE A TEMPLATE TAG
var template_textbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textbtn.innerHTML = `
<div class="textbtn_cont">
    btn_text
</div>
<style>
    .textbtn_cont{
        font-weight:bolder;
        cursor: pointer;
        font-size: 20pt;
    }
    @media screen and (max-width:1440px) {
        .textbtn_cont {
            font-size:14pt;
        }
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTextBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_textbtn.content.cloneNode(true)); //use the template to make a clone

        document.querySelector(".btn_back").changeTextBtn("< Back", "white");
        document.querySelector(".btn_back").style.opacity = "0.8";
        document.querySelector(".btn_back").onclick = () => {
            location.href = "/"
        }
    }

        //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeTextBtn(txt, color) {
            this.shadowRoot.querySelector(".textbtn_cont").innerText = txt;
            this.shadowRoot.querySelector(".textbtn_cont").style.color = color;
        }
        // changeStory() {
        //     this.shadowRoot
        // }
    }

//MUST HAVE - define the tag for the custom elements
customElements.define("the-textbtn", TheTextBtn)