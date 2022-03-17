//MUST HAVE - CREATE A TEMPLATE TAG
var template_infocard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_infocard.innerHTML = `
<div class = "info-cont">
    <div class ="primary">
        <p class ="head_text">head_text</p>
        <div class = "img_cont">
            <img class="info-img" src="./imgs/infoimg/fan.svg" alt="">
            <p class ="sub_text">sub_text</p>
        </div>
        <p class ="desc_text">sub_text</p>
        <the-textbtn
        class = "text_btn"
        btn_text = ""
        ></the-textbtn>
    </div>
</div>

<style>
    .info-cont{
        position: absolute;
        top: 400px;
        left: 1100px;
        right: 0px;
    }
    .primary {
        background-color:#FFFFFF;
        border: none;
        border-radius:5pt;
        width: 220pt;
        height: 320pt;
        box-shadow: 0em 0em 1em 0.2em #d3d3d3;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: .8em;
        justify-content: center;
    } 
    p {
        text-align: center;
    }
    .head_text {
        font-family:"ibm plex sans", "Ubuntu", sans-serif;
        text-transform: uppercase;
        font-weight:bold;
        letter-spacing:2.26pt;
        line-height: 2em;
        text-transform: uppercase;
        font-size: 14pt;
    }
    .sub_text {
        display: none;
    }
    .desc_text {
        display: none;
        font-size: 14pt;
        line-height: 20pt;
    }
    .text_btn {
        padding: 1em;
    }
    @media only screen and (max-width: 1440px){
        .info-cont{
            position: absolute;
            top: 60px;
            left: 600px;
        }
        .primary *, .secondary * {
            font-size:10pt;
        }
        .primary, .secondary {
            width: 170pt;
            height: auto;
        }
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
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showPrimary(type = "") {
        this.shadowRoot.querySelector("the-textbtn").onclick = () => {
            this.removeInfoCard();
            document.querySelector("the-textcont").nextStory();

        }
        if (type === "phone") {
            this.shadowRoot.querySelector("the-textbtn").changeTextBtn("Got it!", "green");
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/phone2.svg`;
            this.shadowRoot.querySelector(".head_text").innerHTML = `
            a single Iphone <br> 12 pro max
            `;
            this.shadowRoot.querySelector(".sub_text").innerHTML = `
            generates total of <br><span class ="em_text1">86kg</span> <span class ="em_text2"> CO2 Emission </span>
            `;
            this.shadowRoot.querySelector(".sub_text").style.cssText = `
            line-height: 2em;
            display: block;
            `;
            this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #BD484A;
            font-size: 16pt;
            font-weight: bolder;
            `;
            this.shadowRoot.querySelector(".em_text2").style.cssText = `
            font-weight: bolder
            `;
        }
        else {
            this.shadowRoot.querySelector("the-textbtn").changeTextBtn("Got it!", "green");
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/laundrydetergent2.svg`;
            this.shadowRoot.querySelector(".primary").style.height = "fit-content";
            this.shadowRoot.querySelector(".head_text").innerHTML = `
            Greenwashing
            `;
            this.shadowRoot.querySelector(".head_text").style.cssText = `
            color: #6B994D;
            `;
            this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Consider if the product is..
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
                }
                span{
                    text-align: left;
                }
                
                </style>
            `;
            this.shadowRoot.querySelector(".desc_text").style.cssText = `
            display: block;
            `;
        }
    }

    showInfoCard() {
        document.querySelector("#infocard").style.display = "block";
        this.changeInfoCard();
    }

    removeInfoCard() {
        document.querySelector("#infocard").style.display = "none";
    }

    changeInfoCard(objName = "phone") {
        this.shadowRoot.querySelector("the-textbtn").changeTextBtn("Got it!", "green");
        this.shadowRoot.querySelector("the-textbtn").onclick = () => {
            document.querySelector("the-infocard").removeInfoCard();
            document.querySelector("the-textcont").nextStory();
        }

        this.objName = objName;
        if (objName === "phone") {
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/phone.svg`;
            this.shadowRoot.querySelector(".head_text").innerHTML = `
            number of <span class ="em_text1"> smartphones wasted </span> every year 
            `;
            this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #08509C;
            `;
            this.shadowRoot.querySelector("the-textbtn").changeTextBtn("Next >", "green");
            this.shadowRoot.querySelector("the-textbtn").onclick = () => this.showPrimary("phone")
        }
        if (objName === "car") {
            this.shadowRoot.querySelector(".info-cont").style.cssText=`
            top: 150px;
            left: 1250px;
            `
            if (window.innerWidth <= 1440){
                this.shadowRoot.querySelector(".info-cont").style.cssText=`
                top: 70px;
                left: 550px;
            `
            }
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/car.svg`;
            this.shadowRoot.querySelector(".head_text").innerHTML = `
            <span class ="em_text1"> greenhouse gas </span> emissions from transportation 
            `;
            this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #08509C;
            `;
            this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: none;
            `;
        }
        if (objName === "waterbottle") {
            this.shadowRoot.querySelector(".info-cont").style.cssText=`
            top: 350px;
            left: 600px;
            `
            if (window.innerWidth <= 1440){
                this.shadowRoot.querySelector(".info-cont").style.cssText=`
                top: 120px;
                left: 380px;
            `
            }
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
            font-size: 12pt;
            margin-top:0;
            `;
        }
        if (objName === "fan") {
            if (window.innerWidth <= 1440){
                this.shadowRoot.querySelector(".info-cont").style.cssText=`
                top: 120px;
                left: 700px;
            `
            }
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/fan.svg`;
            this.shadowRoot.querySelector(".head_text").innerHTML = `
            Heat island effect
            `;
            this.shadowRoot.querySelector(".head_text").style.cssText = `
            color: #A8C956;
            `;
            this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Urban areas are <br> <span class = "em_text1"> 1-7° hotter </span> <br> than outlying areas during the day.
            `;
            this.shadowRoot.querySelector(".img_cont").style.cssText = `
            display: flex;
            `;
            this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: block;
            font-size: 12pt;
            line-height: 24pt;
            `;
            this.shadowRoot.querySelector(".em_text1").style.cssText = `
            color: #BD484A;
            font-size: 18pt;
            letter-spacing: 0.45pt;
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
        if (objName === "screen") {
            this.shadowRoot.querySelector(".info-cont").style.cssText=`
            top: 350px;
            left: 900px;
            `
            if (window.innerWidth <= 1440){
                this.shadowRoot.querySelector(".info-cont").style.cssText=`
                top: 80px;
                right: 100px;
            `
            }
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/screen.svg`;
            this.shadowRoot.querySelector(".head_text").style.cssText = `
            display: none;
            `;
            this.shadowRoot.querySelector(".sub_text").style.cssText = `
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
            font-size: 14pt;
            font-weight: bolder;
            `;
        }
        if (objName === "laundrydetergent") {
            this.shadowRoot.querySelector(".info-cont").style.cssText=`
            top: 380px;
            left: 1300px;
            `
            if (window.innerWidth <= 1440){
                this.shadowRoot.querySelector(".info-cont").style.cssText=`
                top: 110px;
                left: 580px;
            `
            }
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/laundrydetergent.svg`;
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
            this.shadowRoot.querySelector(".desc_text").style.cssText = `
            display: none;
            `;
            this.shadowRoot.querySelector(".img_cont").style.cssText = `
            display: flex;
            flex-direction: column;
            `;
            this.shadowRoot.querySelector("the-textbtn").changeTextBtn("Next >", "green");
            this.shadowRoot.querySelector("the-textbtn").onclick = () => this.showPrimary("laundrydetergent")

        }

        if (objName === "laundrybasket") {
            this.shadowRoot.querySelector(".info-cont").style.cssText=`
            top: 380px;
            left: 1600px;
            `
            if (window.innerWidth <= 1440){
                this.shadowRoot.querySelector(".info-cont").style.cssText=`
                top: 150px;
                right: 100px;
            `
            }
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/laundrybasket.svg`;
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
            this.shadowRoot.querySelector(".desc_text").style.display = "none";
        }
        if (objName === "tablet") {
            this.shadowRoot.querySelector(".info-cont").style.cssText=`
            top: 480px;
            left: 500px;
            `
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/tablet.svg`;
            this.shadowRoot.querySelector(".head_text").innerHTML = `
            Excessive electronic devices
            `;
            this.shadowRoot.querySelector(".sub_text").style.display = "none";
        }
        if (objName === "switch") {
            this.shadowRoot.querySelector("img").src = `imgs/infoimg/switch.svg`;
            this.shadowRoot.querySelector(".head_text").style.cssText = `
            display: none;
            `;
            this.shadowRoot.querySelector(".sub_text").innerHTML = `
            Americans spend <span class="em_text1"> $350 billion per year </span> on electricity. <br> But <span class="em_text2">75%</span> of it goes to waste. 
            `;
            this.shadowRoot.querySelector(".sub_text").style.cssText = `
            display: block;
            font-family: Lato, sans-serif;
            font-size: 16pt;
            font-weight: lighter;
            text-align: center;
            line-height: 24pt;
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
