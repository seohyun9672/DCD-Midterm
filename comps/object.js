//MUST HAVE - CREATE A TEMPLATE TAG
var template_object = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_object.innerHTML = `
<div class="object">
    <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheObject extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_object.content.cloneNode(true)); //use the template to make a clone
        // if (this.getAttribute("name")){
        //     document.querySelector(".object > .first").src = () => changeOb(this.getAttribute("name"));   
        // }
    } 
        

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeOb(type = "story1"){
        if(type === "story1"){
        this.shadowRoot.querySelector(".object > .first").src = `/imgs/objects/phone.svg;`
        // this.shadowRoot.querySelector(".object > .second").src = `/imgs/objects/car.svg;`
        }
        
        if(type === "story4"){
        this.shadowRoot.querySelector(".object > .first").src = `/imgs/objects/tablet.svg;`
        }

    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-object", TheObject)