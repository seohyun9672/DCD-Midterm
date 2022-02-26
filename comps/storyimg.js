//MUST HAVE - CREATE A TEMPLATE TAG
var template_storyimg = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_storyimg.innerHTML = `
<img class="background" src="storyimg/story1.svg" alt="bedroom">


<style>
     .background {
        padding: 0;
        margin: 0 auto;
        height: 100%;
        width: 100%;
        z-index: -1;
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
        if(this.getAttribute("name")){
            this.shadowRoot.querySelector(".background").src = `/storyimg/${this.getAttribute("name")}.svg`
        };    
        
    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    // changeBG(img="storyimg/story2.svg"){
    //     this.shadowRoot.querySelector(".background").src = img;
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-storyimg", TheStoryImg)