//MUST HAVE - CREATE A TEMPLATE TAG
var template_emoji = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_emoji.innerHTML = `
    <img class = "emoji" src ="imgs/Emojis/EmojiEmbarrassed.svg" alt="Embarrassed Emoji">
    <style>
        .emoji{
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        @media only screen and (max-width: 1440px){
            .emoji{
                width: 85px;
                height: 85px;
            }
        }
        @media only screen and (min-width: 1441px) and (max-width: 1920px){
            .emoji{
                width: 100%;
                height: 100%;
            }
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
        this.shadowRoot.querySelector(".emoji").onclick = () => this.HandleEmoji();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    HandleEmoji() {
        document.querySelector("the-solutioncont").openSolutionCont(this.getAttribute("feeling"));
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-emoji", TheEmoji)