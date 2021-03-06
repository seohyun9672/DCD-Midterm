//MUST HAVE - CREATE A TEMPLATE TAG
var template_storyimg = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_storyimg.innerHTML = `
<style>
#bg > img{
      width: 100%;
      height: 100%;
      display: block;
}
</style>
<div id="bg">
    <img src="imgs/storyimg/story1.jpeg" alt="bedroom">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheStoryImg extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!s
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_storyimg.content.cloneNode(true)); //use the template to make a clone
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeStory(type = "story_num") {
        if (type === "story1") {
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/story1.jpeg`;
        }
        if (type === "story2") {
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/story2.jpg`;
        }
        if (type === "story3") {
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/story3.jpeg`;
        }
        if (type === "story4") {
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/story4.jpg`;
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-storyimg", TheStoryImg)