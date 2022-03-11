//MUST HAVE - CREATE A TEMPLATE TAG
var template_storyimg = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_storyimg.innerHTML = `
<style>
  #bg > img{
      width: 100%;
      height: 100%;
  }
  #bg{
      height: 620px;
  }
</style>
<div id="bg">
    <img src="imgs/storyimg/story1.jpeg" alt="bedroom">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheStoryImg extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!s
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_storyimg.content.cloneNode(true)); //use the template to make a clone
    }
    
    changeStory(type="story_num"){
    this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/${this.getAttribute("story_num")}.jpeg`;

        if(type==="story1"){
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/${this.getAttribute("story_num")}.jpeg`;
        }
        if(type==="story2"){
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/${this.getAttribute("story_num")}.jpeg`;
        }
        if(type==="story3"){
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/${this.getAttribute("story_num")}.jpeg`;
        }
        if(type==="story4"){
            this.shadowRoot.querySelector("#bg > img").src = `imgs/storyimg/${this.getAttribute("story_num")}.jpeg`;
        }

         

        // document.querySelector("#storybg")= document.querySelector(".foootprintcycle").changeFootprintCycle(`./imgs/FootprintCycle/${this.getAttribute("footprint_num")}.svg)`;

        // if (this.getAttribute("story_num")==="story1"){
        //     this.shadowRoot.querySelector("#bg > img").changeFootprintCycle();
        // }
        
        //     if(this.getAttribute("story_num")){
        //         this.shadowRoot.querySelector("#item").changeOb(this.getAttribute("story_num="));}

    
    //To-do - CREATE THE FUNCTIONALITIES HERE!
   

}
    
    // }
} 


//MUST HAVE - define the tag for the custom elements
customElements.define("the-storyimg", TheStoryImg)