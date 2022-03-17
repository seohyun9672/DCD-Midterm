//MUST HAVE - CREATE A TEMPLATE TAG
var template_subheader = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_subheader.innerHTML = `
<p class= "sub-header_text">text</p>
<link rel="stylesheet" href="path/to/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css">
<style>
    .sub-header_text{  
        font-size: 18pt;
        color: #08509C;
        font-weight: bolder;
        text-align: center;
    }

    @media only screen and (max-width: 1920px) and (min-width:1441px){
        .sub-header_text{
            font-size: 16pt;
            margin: -30pt;
        }
    }
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
        this.shadowRoot.querySelector(".sub-header_text").innerHTML = `
        Click the Footprint To Start
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
        `
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-subheader", TheSubheader)