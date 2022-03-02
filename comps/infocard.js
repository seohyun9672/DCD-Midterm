//MUST HAVE - CREATE A TEMPLATE TAG
var template_infocard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_infocard.innerHTML = `
<script src="comps/textcont.js"></script>
<div class="infocard-cont">
    <div>
        
        <p class="main-text">Number of</p>
        <em> SMARTPHONE WASTED </em>
        <p class="main-text">every year</p>
        <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
        
        <the-textbtn
        btn_text ="Got it!"
        color="green"
        class ="gotit"
        ><the-textbtn>
        <p class="desc-text"></p>
        
    </div>
</div>
<style>
    .infocard-cont {
        background-color:#FFF;
        border: none;
        border-radius:5pt;
        width: 230px;
        height: 320px;
        box-shadow: 0em 0em 1em 0.2em #d3d3d3;
        padding:1em;    
        display: none;
        position: relative;
       
       
    }
    .infocard-cont > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        width: 230px;
        height: 320px;
        
        // line-height: 0.4em;
    }
    .main-text, em {
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
        if(this.getAttribute("num_text")){
            this.shadowRoot.querySelector(".num-text").innerText = this.getAttribute("num_text");
        }
        if(this.getAttribute("main_text")){
            this.shadowRoot.querySelector(".main-text").innerText = this.getAttribute("main_text");
        }    
        if(this.getAttribute("desc_text")){
            this.shadowRoot.querySelector(".desc-text").innerText = this.getAttribute("desc_text");
        }   
        if(this.getAttribute("capt_text")){
            this.shadowRoot.querySelector(".capt-text").innerText = this.getAttribute("capt_text");
        }
        if(this.getAttribute("em_text")){
        this.shadowRoot.querySelector("em").innerText = this.getAttribute("em_text");
        }
        if(this.getAttribute("em_color")){
        this.shadowRoot.querySelector("em").style.color = this.getAttribute("em_color");
        }
        if(this.getAttribute("src")){
        this.shadowRoot.querySelector("src.info-img").src = `imgs/infoimg/card_${phone}.svg`;
        }
        if(this.getAttribute("btn_text")){
        this.shadowRoot.querySelector("the-textbtn").innerText = this.getAttribute("btn_text");
        }
        this.shadowRoot.querySelector(".gotit").onclick = () => document.querySelector(".textbtn_cont").trigger();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showInfocard(){
        this.shadowRoot.querySelector(".infocard-cont").style.display = "block";
    }
    removeInfoCard(){
        this.shadowRoot.querySelector(".infocard-cont").style.display = "none";
    }
    
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-infocard", TheInfoCard)