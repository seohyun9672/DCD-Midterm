//MUST HAVE - CREATE A TEMPLATE TAG
var template_infocard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_infocard.innerHTML = `
<script src="comps/textcont.js"></script>
<div class="infocard-cont">
    <div>
        <img class="info-img" src="/" alt="">
        <p class="num-text">num text</p>
        <p class="main-text">main text</p>
        <em> emphasis </em>
        <p class="capt-text">capt text</p>
        <p class="desc-text">desc text</p>
        <the-textbtn
        btn_text ="Got it!"
        color="green"
        class ="gotit"
        ><the-textbtn>
    </div>
</div>
<style>
    .infocard-cont {
        background-color:#DAD;
        border: none;
        border-radius:5pt;
        box-shadow: 0em 0em 1em 0.2em #d3d3d3;
        padding:2em;    
        display: none;
        position: relative;
       
    }
    .num-text, .desc-text, em {
        font-family:"ibm plex sans", "Ubuntu", sans-serif;
        text-transform:uppercase;
        font-weight:bold;
        letter-spacing:2.26pt;
        font-style:normal;
    }

</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheInfoCard extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_infocard.content.cloneNode(true)); //use the template to make a clone
    
        if(this.getAttribute("num_text")) {
            this.shadowRoot.querySelector(".num-text").innerText = this.getAttribute("num_text");
        }
        if(this.getAttribute("main_text")) {
            this.shadowRoot.querySelector(".main-text").innerText = this.getAttribute("main_text");
        }
        if(this.getAttribute("desc_text")) {
            this.shadowRoot.querySelector(".desc-text").innerText = this.getAttribute("desc_text");
        }
        if(this.getAttribute("capt_text")) {
            this.shadowRoot.querySelector(".capt-text").innerText = this.getAttribute("capt_text");
        }
        if(this.getAttribute("em_text")) {
            this.shadowRoot.querySelector("em").innerText = this.getAttribute("em_text");
        }
        if(this.getAttribute("em_color")) {
            this.shadowRoot.querySelector("em").style.color = this.getAttribute("em_color");
        }
        if(this.getAttribute("src")) {
            this.shadowRoot.querySelector("img").src = this.getAttribute("src");
        }
        if(this.getAttribute("btn_text")) {
            this.shadowRoot.querySelector("the-textbtn").innerText = this.getAttribute("btn_text");
        }
        // this.shadowRoot.querySelector("the-textbtn").onclick =()=>
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showInfocard(){
        this.shadowRoot.querySelector(".infocard-cont").style.display = "block";
    }
    removeInfocard(){
        this.shadowRoot.querySelector(".infocard-cont").style.display = "none";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-infocard", TheInfoCard)