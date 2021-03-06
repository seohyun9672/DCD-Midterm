//MUST HAVE - CREATE A TEMPLATE TAG
var template_checkbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_checkbtn.innerHTML = `
<img class = "checkbtn" src="imgs/check.svg">
<style>
.checkbtn{
    width: 26px;
    height: 26px;
}
@media only screen and (max-width: 1440px){
    .checkbtn{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
}
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheCheckBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_checkbtn.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-checkbtn", TheCheckBtn)