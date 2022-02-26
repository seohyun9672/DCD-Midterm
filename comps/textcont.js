//MUST HAVE - CREATE A TEMPLATE TAG
var template_textcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textcont.innerHTML = `
    <div class="textcont">
        <the-chevron
        direction="left"></the-chevron>
        <the-greenman></the-greenman>
        <div class ="textbox">
            <the-time></the-time>
            <div class="story_text">
                text <em class="emtext"> text</em>
            </div>
        </div>
        <the-chevron></the-chevron>
    </div>
    <style>
        .textcont{
            width: 100%;
            height: auto;
            background-color: #C8D5AE;
            display: flex;
            justify-content:center;
            align-items:center;
            padding:10px;
        }
        .textbox{
            margin: 1em;
            width:80vw;
            background-color: white;
            font-size: 1.5em;
            padding:1em;
        }
        .emtext{
            font-weight: bolder;
            color: red;
            font-style: normal;
        }
        the-time{
            position:absolute;
            top:0.75em;
            left:5em;
        }
    </style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTextcont extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_textcont.content.cloneNode(true)); //use the template to make a clone
    
        if(this.getAttribute("story_text")) {
            this.shadowRoot.querySelector(".story_text").innerText = this.getAttribute("story_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-textcont", TheTextcont)