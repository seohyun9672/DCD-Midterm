//MUST HAVE - CREATE A TEMPLATE TAG
var template_storyimg = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_storyimg.innerHTML = `
<img class="background" src="imgs/storyimg/story1.svg" alt="bedroom">


<style>
     .background {
        display: block;
        padding: 0;
        margin: 0 auto;
        width: 100vw;
        height:auto;
        
    }
    
    
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheStoryImg extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_storyimg.content.cloneNode(true)); //use the template to make a clone
        this.updateBackgroundImg();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    updateBackgroundImg() {
        if(this.getAttribute("src")) {
            this.shadowRoot.querySelector(".background").src = this.getAttribute("src");
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-storyimg", TheStoryImg)