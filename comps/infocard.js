//MUST HAVE - CREATE A TEMPLATE TAG
var template_infocard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_infocard.innerHTML = `
<div class="infocard-cont">
    <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    <the-textbtn
    btn_text ="Got it!"
    class ="gotit"
    color= "green"
    ><the-textbtn>
</div>
<style>
    .infocard-cont {
        background-color:#FFFFFF;
        border: none;
        border-radius:5pt;
        width: 230px;
        height: 320px;
        box-shadow: 0em 0em 1em 0.2em #d3d3d3;
        padding:1em;    
        display: none;
        position: relative;
        text-align: center;
    }
    p {
        font-family:"ibm plex sans", "Ubuntu", sans-serif;
        text-transform:uppercase;
        font-weight:bold;
        letter-spacing:2.26pt;
        line-height: 2em;
        margin-top:.5em;
    }
    .info-img {
        margin-bottom: 1em;
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
        // document.querySelector("#infocard").changeInfoText(this.getAttribute("info_text"));
        // document.querySelector("#infocard").changeInfoImage(this.getAttribute("card_img"));
        document.querySelector("#infocard").updateInfoCard(
            this.getAttribute("card_img"),
            this.getAttribute("info_text")
        );
        this.objName=type;
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showInfocard(){
        this.shadowRoot.querySelector(".infocard-cont").style.display = "block";
    }
    removeInfoCard(){
        this.shadowRoot.querySelector(".infocard-cont").style.display = "none";
    }
    changeInfoText(type="phone"){
        if(type==="phone"){
            this.shadowRoot.querySelector(".infocard-cont > p").innerText=`
            greenman
            `
        }

        // this.shadowRoot.querySelector(".infocard-cont > p").innerText = this.getAttribute("info_text");

   }

    
    changeInfoImage(){
        this.shadowRoot.querySelector(".infocard-cont > img").src= `imgs/infoimg/${this.getAttribute("card_img")}.svg`;
    }

    updateInfoCard(type="phone"){

        if(type==="phone2"){
            this.changeInfoImage();
            this.changeInfoText();
            // this.shadowRoot.querySelector(".infocard-cont").innerHTML=`
            // `

        if(type==="phone"){
            this.changeInfoImage();
            this.changeInfoText(); 
        }

        }
    }
        // this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
        // <div class="infocard-cont">
        //     <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
        //     <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
        //     <the-textbtn
        //     btn_text ="Got it!"
        //     class ="gotit"
        //     color= "green"
        //     ><the-textbtn>
        // </div>`
    }
    // updateInfoCard(objName="phone"){ 

    //      if(type === "phone2")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> A SINGLE <br> IPHONE 12 PRO MAX </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone2.svg" alt="The bar graph showing how CO2 emission is generated">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`


    //     if(type === "car")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    //     if(type === "fan")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    //     if(type === "laundrybasket")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    //     if(type === "laundrydetergent")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    //     if(type === "screen")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    //     if(type === "switch")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    //     if(type === "tablet")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    //     if(type === "waterbottle")
    //     this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
    //     <div class="infocard-cont">
    //         <p> Number of <br> SMARTPHONE WASTED <br> every year </p>
    //         <img class="info-img" src="imgs/infoimg/card_phone.svg" alt="">
    //         <the-textbtn
    //         btn_text ="Got it!"
    //         class ="gotit"
    //         color= "green"
    //         ><the-textbtn>
    //     </div>`
    // }



//MUST HAVE - define the tag for the custom elements
customElements.define("the-infocard", TheInfoCard)