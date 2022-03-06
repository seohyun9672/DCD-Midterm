//MUST HAVE - CREATE A TEMPLATE TAG
var template_textbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textbtn.innerHTML = `
<div class="textbtn_cont">
    btn_text
</div>
<style>
    .textbtn_cont{
        font-weight:bolder;
        cursor: pointer;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTextBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_textbtn.content.cloneNode(true)); //use the template to make a clone
        
        // if(this.getAttribute("btn_text")) {
        //     this.shadowRoot.querySelector(".textbtn_cont").innerText = this.getAttribute("btn_text");
        // }
        document.querySelector("the-textbtn").changeTextBtn();
        this.shadowRoot.querySelector(".textbtn_cont").onclick = () => this.txtBtnFunc(this.getAttribute("btn_text"));
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeTextBtn(){
    if(this.getAttribute("btn_text")==="< Back") {
        this.shadowRoot.querySelector(".textbtn_cont").innerText = "< Back"
        this.shadowRoot.querySelector(".textbtn_cont").style.color="#FFFFFF"
        }
    if(this.getAttribute("btn_text")==="Got it!") {
        this.shadowRoot.querySelector(".textbtn_cont").innerText = "Got it!"
        this.shadowRoot.querySelector(".textbtn_cont").style.color="#6B994D"
        }
    if(this.getAttribute("btn_text")==="Next >") {
        this.shadowRoot.querySelector(".textbtn_cont").innerText = "Next >"
        this.shadowRoot.querySelector(".textbtn_cont").style.color="#6B994D"
        }    
    }

    txtBtnFunc(button="< Back") {
        this.btntext = button;
        if(button==="< Back") {
            window.location.href = "/index.html";
    }
        if(button==="Got it!") {
            document.querySelector("the-object").addObj();
            document.querySelector("the-infocard").removeInfoCard();
            document.querySelector(".storybg").changeStory();
            document.querySelector(".cycleimg").changeFootprintCycle();
            document.querySelector(".greenmanimg").changeGreenman();
        }

        if(button==="Next >") {
            document.querySelector("#infocard").updateInfoCard();
        }

}

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-textbtn", TheTextBtn)