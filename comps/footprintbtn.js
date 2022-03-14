//MUST HAVE - CREATE A TEMPLATE TAG
var template_footprintbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_footprintbtn.innerHTML = `
<div class="footprint_btn">
    <img src="imgs/bluefootprint.svg" alt="Footprint">
</div>

<style>
    .footprint_btn {
        border-radius: 50%;
        border: white solid 40px;
        background-color:transparent;
        width: 300pt;
        height: 300pt;
        display: flex;
        align-items:center;
        justify-content:center;
        box-shadow: 0 4px 20px -1px #E2E2E2;
        cursor: pointer;
    }
    .footprint_btn > img {
        width: 80%;
        height: 80%;
        z-index: 1;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFootprintBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_footprintbtn.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".footprint_btn").onclick = () => document.location.href = "/story.html";
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-footprintbtn", TheFootprintBtn)