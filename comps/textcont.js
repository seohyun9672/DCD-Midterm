//MUST HAVE - CREATE A TEMPLATE TAG
var template_textcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textcont.innerHTML = `
    <div class="textcont">
        <p> story_text 
            <em> em_text<em> 
        </p>
    </div>
    <style>
        .textcont {
            background-color: white;
            width: 100%;
            height:140px;
        }
        .textcont > p {
            padding: 1em;
            font-size: 24px;
            line-height: 1.3em;
        }
        p > em{
            color: black;
            font-weight: bolder;
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
        // this.ob_name="phone";

        if(this.getAttribute("story_text")) {
            this.shadowRoot.querySelector(".textcont > p").innerText = this.getAttribute("story_text"); 
             
        }
        if(this.getAttribute("em_text")){
            this.shadowRoot.querySelector("p > em").style.color="red";
            this.shadowRoot.querySelector("p > em").innerText = this.getAttribute("em_text"); 
        }     
      
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
  
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-textcont", TheTextcont)