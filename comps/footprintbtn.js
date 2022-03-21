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
        border: white solid 30px;
        background-color:transparent;
        display: flex;
        align-items:center;
        justify-content:center;
        box-shadow: 0 4px 20px -1px #E2E2E2;
        cursor: pointer;
        width: 300pt;
        height: 300pt;
    }
    .footprint_btn > img {
        z-index: 1;
        width: 80%;
        height: 80%;
    }
    @media only screen and (max-width: 1440px){
         .footprint_btn{
             width: 180pt;
             height: 180pt;
         }
     }
    @media only screen and (min-width: 1440px) and (max-width: 1920px) {
         .footprint_btn{
             width: 200pt;
             height: 200pt;
        }
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
        this.shadowRoot.querySelector(".footprint_btn").onclick = () => document.location.href = "./story.html";
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-footprintbtn", TheFootprintBtn)