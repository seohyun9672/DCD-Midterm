//MUST HAVE - CREATE A TEMPLATE TAG
var template_greenman = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_greenman.innerHTML = `
<div class = "greenman">
    <img src="./imgs/greenman/Greenman1.svg" alt=greenman>
</div>

<style>
    .greenman > img {
        padding-right: 2.2em;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheGreenman extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }
    

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_greenman.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".greenman").src=`./imgs/greenman/${this.getAttribute("greenman_num")}.svg`;
        if(this.getAttribute("direction")){
            this.shadowRoot.querySelector(".greenman").style.transform= "scaleX(-1)";
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeGreenman(type="greenman_num"){
        this.shadowRoot.querySelector(".greenman > img").src = `./imgs/Greenman/${this.getAttribute("greenman_num")}.svg`;

        if(type==="greenman1"){
            this.shadowRoot.querySelector(".greenman > img").src=`./imgs/Greenman/${this.getAttribute("greenman_num")}.svg`;
        }
        if(type==="greenman2"){
            this.shadowRoot.querySelector(".greenman > img").src=`./imgs/Greenman/${this.getAttribute("greenman_num")}.svg`;
        }
        if(type==="greenman3"){
            this.shadowRoot.querySelector(".greenman > img").src=`./imgs/Greenman/${this.getAttribute("greenman_num")}.svg`;
        }
        if(type==="greenman4"){
            this.shadowRoot.querySelector(".greenman > img").src=`./imgs/Greenman/${this.getAttribute("greenman_num")}.svg`;
        }
        if(type==="greenman5"){
            this.shadowRoot.querySelector(".greenman > img").src=`./imgs/Greenman/${this.getAttribute("greenman_num")}.svg`;
        }
        if(type==="greenman6"){
            this.shadowRoot.querySelector(".greenman > img").src=`./imgs/Greenman/${this.getAttribute("greenman_num")}.svg`;
        }
        

    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-greenman", TheGreenman)