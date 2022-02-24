//MUST HAVE - CREATE A TEMPLATE TAG
var template_exit = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_exit.innerHTML = `
    <link rel="stylesheet" href="path/to/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css">
    <i class="fa fa-times" aria-hidden="true"></i>
    <style>
        .fa-times{
            position: absolute;
            right: 5px;
            top: 5px;
            color: #3A6742
        }
        </style>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheExit extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_exit.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-exit", TheExit)