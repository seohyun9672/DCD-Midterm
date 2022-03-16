//MUST HAVE - CREATE A TEMPLATE TAG
var template_feetbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_feetbtn.innerHTML = `
<div class="feetbtn-cont">
    <img src="imgs/feet.svg">
    <p class="btn-text">btn text</p>
</div>
<style>  
    .btn-text {
        font-weight:bold;
    }
    .feetbtn-cont {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .feetbtn-cont > img {
        cursor: pointer;
    }
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFeetBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_feetbtn.content.cloneNode(true)); //use the template to make a clone
    
        if(this.getAttribute("text_color")) {
            this.shadowRoot.querySelector(".btn-text").style.color = this.getAttribute("text_color");
        }
        if(this.getAttribute("btn_text")) {
            this.shadowRoot.querySelector(".btn-text").innerText = this.getAttribute("btn_text");
        }
        this.shadowRoot.querySelector(".feetbtn-cont").onclick = () => this.HandleFeetBtn(this.getAttribute("name"));
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    HandleFeetBtn(action="back") {
        this.btn_action = action;
        if(action === "back") {
            window.location.href = "/";
        }
        if(action === "rewatch") {
            window.location.href = "/story.html";
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-feetbtn", TheFeetBtn)