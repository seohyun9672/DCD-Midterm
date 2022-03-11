//MUST HAVE - CREATE A TEMPLATE TAG
var template_infocard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_infocard.innerHTML = `
<div class ="primary">
      <img class="info-img" src="./imgs/infoimg/phone.svg" alt="">
      <p class ="head_text">head_text</p>
      <p class ="sub_text">sub_text</p>
      <p class ="desc_text">desc_text</p>
      <the-textbtn
      class="text_btn"
      btn_text=""
      ></the-textbtn>
</div>
<div class ="secondary">
      <img class="info-img" src="./imgs/infoimg/phone.svg" alt="">
      <p class ="head_text">head_text</p>
      <p class ="sub_text">sub_text</p>
      <p class ="desc_text">desc_text</p>
      <the-textbtn
      class="text_btn"
      btn_text="Got it!"
      ></the-textbtn>
</div>


<style>
    .primary, .secondary{
        background-color:#FFFFFF;
        border: none;
        border-radius:5pt;
        width: 220px;
        height: 320px;
        box-shadow: 0em 0em 1em 0.2em #d3d3d3;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        padding: .8em;
        justify-content: center;
    }

    p{
        text-align: center;
    }
    .head_text{
        font-family:"ibm plex sans", "Ubuntu", sans-serif;
        text-transform: uppercase;
        font-weight:bold;
        letter-spacing:2.26pt;
        line-height: 2em;
        text-transform: uppercase;
        font-size: 14px;
    }
    .sub_text{
        display: none;
    }
    .desc_text{
        display: none;
        font-size: 14px;
        line-height: 20px;
    }
    .secondary{
          display: none;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheInfoCard extends HTMLElement {
  //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
  constructor() {
    super(); //pass on the HTMLElement super powers!
    this.attachShadow({ mode: "open" }); //Attach it to the shadowRoot

    //To-do - CREATE THE STATES FOR THE UI HERE!
  }

  //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
  connectedCallback() {
      this.shadowRoot.appendChild(template_infocard.content.cloneNode(true)); //use the template to make a clone
        
      document.querySelector("the-object").onclick = () => this.showInfocard();
      this.shadowRoot.querySelector("the-textbtn");
  }

  //To-do - CREATE THE FUNCTIONALITIES HERE!

showPrimary(){
      this.shadowRoot.querySelector(".secondary").style.display = "none";
      this.shadowRoot.querySelector(".primary").style.display = "block";
            
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/phone2.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
      a single Iphone <br> 12 pro max
      `;
      this.shadowRoot.querySelector(".sub_text").innerHTML = `
      generates total of <br><span class ="em_text1">86kg</span> <span class ="em_text2"> CO2 Emission </span>
      `;
      this.shadowRoot.querySelector(".sub_text").style.cssText = `
      line-height: 2em;
      `;
      this.shadowRoot.querySelector(".em_text1").style.cssText = `
      color: #BD484A;
      font-size: 16px;
      font-weight: bolder;
      `;
      this.shadowRoot.querySelector(".em_text2").style.cssText = `
      font-weight: bolder
      `;
      this.shadowRoot.querySelector("the-textbtn").changeTextBtn("Got it!", "green");
      this.shadowRoot.querySelector("the-textbtn").onclick = () => this.removeInfoCard()    
}

showInfocard() {
      document.querySelector("#infocard").style.display = "block";
} 
removeInfoCard() {
      document.querySelector("#infocard").style.display = "none";
}
      
  changeInfoCard(name = "phone") {
    this.objName = name;
    if (name === "phone") {
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/phone.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            number of <span class ="em_text1"> smartphones wasted </span> every year 
            `;
      this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #08509C;
            `;
          this.shadowRoot.querySelector("the-textbtn").changeTextBtn("Next >", "green");
          this.shadowRoot.querySelector("the-textbtn").onclick = () => this.showPrimary()    
          
    }

    if (name === "car") {
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/car.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            <span class ="em_text1"> greenhouse gas </span> emissions from transportation 
            `;
      this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #08509C;
            `;
    }
    if (name === "waterbottle") {
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/waterbottle.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            increase in annual <span class ="em_text1"> carbon footprint <br> per year </span> 
            `;
      this.shadowRoot.querySelector(".head_text").style.cssText = `
            margin:0;
            `;
      this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #A8C956;
            `;
      this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Per single disposable cup
            `;
      this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display:block;
            font-size: 12px;
            margin-top:0;
            `;
    }
    if (name === "fan") {
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/fan.svg`;
      this.shadowRoot.querySelector(".infocard-cont").innerHTML = `
            <p class ="head_text">head_text</p>
            <div class = "img_cont">
                <img class="info-img" src="./imgs/infoimg/fan.svg alt="">
                <p class ="sub_text">sub_text</p>
            </div>
            <p class ="desc_text">desc_text</p>
            <the-textbtn
            btn_text="Got it!"></the-textbtn>
            `;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            Heat island effect
            `;
      this.shadowRoot.querySelector(".head_text").style.cssText = `
            color: #A8C956;
            `;
      this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Urban areas are <br> <span class = "em_text1"> 1-7° hotter </span> <br> than outlying areas during the day.
            `;
      this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: block;
            font-size: 12px;
            line-height: 24px;
            `;
      this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #BD484A;
            font-size: 18px;
            letter-spacing: 0.45px;
            font-weight: bold;
            `;
      this.shadowRoot.querySelector(".desc_text").innerHTML = `
            Due to structures such as buildings and roads which <span class ="em_text2"> absorb and re-emit more heat </span> than water and trees.
            `;
      this.shadowRoot.querySelector(".em_text2").style.cssText = `
            color: #BD484A;
            `;
      this.shadowRoot.querySelector(".desc_text").style.cssText = `
            display: block;
            width: 90%;
            `;
    }
    if (name === "screen") {
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/screen.svg`;
      this.shadowRoot.querySelector(".head_text").style.cssText = `
            display: none;
            `;
      this.shadowRoot.querySelector(".desc_text").innerHTML = `
            Urbanization accounts for <span class ="em_text1"> nearly a quarter </span> of the causes behind Toronto's <span class ="em_text2"> increase in rain </span> over the past 180 years.
            `;
      this.shadowRoot.querySelector(".desc_text").style.cssText = `
            display: block;
            `;
      this.shadowRoot.querySelector(".em_text1, .em_text2").style.cssText = `
            color: #6B994D;
            font-size: 14px;
            font-weight: bolder;
            `;
    }
    if (name === "laundrydetergent") {
      this.shadowRoot.querySelector(
        "img"
      ).src = `imgs/infoimg/laundrydetergent.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            Laundry Footprints
            `;
      this.shadowRoot.querySelector(".head_text").style.cssText = `
            color: #6B994D;
            `;
      this.shadowRoot.querySelector(".sub_text").innerHTML = `
            These chemicals wash down the drain and go straight into the lakes and rivers.  
            `;
      this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: block;
            `;
    }
    if (name === "laundrydetergent2") {
      this.shadowRoot.querySelector(
        "img"
      ).src = `imgs/infoimg/laundrydetergent2.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            Greenwashing
            `;
      this.shadowRoot.querySelector(".head_text").style.cssText = `
            color: #6B994D;
            `;
      this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Consider if the product is..
            `;
      this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: block;
            `;
      this.shadowRoot.querySelector(".desc_text").innerHTML = `
                <div class ="list">    
                    <the-checkbtn></the-checkbtn>
                    <span> Having multiple environmental attributes? </span>
                </div>
                <div class ="list">    
                    <the-checkbtn></the-checkbtn>
                    <span> Applying only a do-good label? </span>
                </div>
                <div class ="list">    
                    <the-checkbtn></the-checkbtn>
                    <span> Using illegal materials? </span>
                </div>
                <div class ="list">    
                    <the-checkbtn></the-checkbtn>
                    <span> Sustainable? </span>
                </div>
                <style>
                .list{
                    display:flex;
                    align-items: center;
                }
                span{
                    text-align: left
                }
                </style>
            `;
      this.shadowRoot.querySelector(".desc_text").style.cssText = `
            display: block;
            `;
    }
    if (name === "laundrybasket") {
      this.shadowRoot.querySelector(
        "img"
      ).src = `imgs/infoimg/laundrybasket.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            generated co2 <b> per load
            `;
      this.shadowRoot.querySelector(".head_text").style.cssText = `
            color: #6B994D;
            `;
      this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Generating heat from dryers is <br> more than <br> <span class="em_text1"> twice as carbon-intensive </span> as creating heat from gas.
            `;
      this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: block
            `;
      this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #6B994D;
            font-weight: bold;
            `;
    }
    if (name === "tablet") {
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/tablet.svg`;
      this.shadowRoot.querySelector(".head_text").innerHTML = `
            Excessive electronic devices
            `;
    }
    if (name === "switch") {
      this.shadowRoot.querySelector("img").src = `imgs/infoimg/switch.svg`;
      this.shadowRoot.querySelector(".head_text").style.cssText = `
            display: none;
            `;
      this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Americans spend <span class="em_text1"> $350 billion per year </span> on electricity. <br> <span class="em_text2"> But 75% of </span> it goes to waste. 
            `;
      this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: block;
            font-family:"ibm plex sans", "Ubuntu", sans-serif;
            font-size: 16px;
            font-weight: lighter;
            text-align: center;
            line-height: 24px;
            `;
      this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #BD484A;
            `;
      this.shadowRoot.querySelector(".em_text2").style.cssText = `
            color: #BD484A;
            `;
    }
  }
}
//MUST HAVE - define the tag for the custom elements
customElements.define("the-infocard", TheInfoCard);
