//MUST HAVE - CREATE A TEMPLATE TAG
var template_emoji = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_emoji.innerHTML = `
    <img class = "emoji" src ="imgs/Emojis/EmojiEmbarrassed.svg" alt="Embarrassed Emoji">
    <style>
        .emoji{
            width: 100%;
            height: 100%;
        }
    </style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheEmoji extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_emoji.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".emoji").src = `./imgs/emojis/${this.getAttribute("feeling")}.svg`
    
    }
    // changeEmoji(){
    //     if(type==="Embarrassed"){
    //         this.shadowRoot.querySelector(".emoji > img").src=`./imgs/emojis/${this.getAttribute("feeling")}.svg`;
    //     }

    // }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-emoji", TheEmoji)