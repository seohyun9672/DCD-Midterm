//MUST HAVE - CREATE A TEMPLATE TAG
var template_storyimg = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_storyimg.innerHTML = `
<style>

     #bg_container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
    .background {
        height:auto;
        width:100vw;
        
    }
    
</style>
<div id="bg_container">
    <img class="background" src="storyimg/story1.svg" alt="bedroom">
</div>
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

        this.shadowRoot.querySelector(".background").src = `imgs/storyimg/${this.getAttribute("name")}.svg`;
            if(this.getAttribute("name")){
                this.shadowRoot.querySelector("#item").changeOb(this.getAttribute("name"));}
            
    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    // changeBG(img="storyimg/story2.svg"){
    //     this.shadowRoot.querySelector(".background").src = img;
    
            }
}
//MUST HAVE - define the tag for the custom elements
customElements.define("the-storyimg", TheStoryImg)