//MUST HAVE - CREATE A TEMPLATE TAG
var template_textcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textcont.innerHTML = `
<div class="textcont">
    <p>text</p>
</div>
<style>
    .textcont {
        background-color: white;
        width: 100%;
        height:140px;
    }
    .textcont > p {
        font-size: 24px;
        line-height: 1.3em;
        padding: 1em;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTextcont extends HTMLElement {
    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }); //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_textcont.content.cloneNode(true)); //use the template to make a clone

        this.textOrder = 1;
        document.querySelector(".textcont").updateStoryUI();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    updateStoryUI(textOrder = 1) {
        if (this.textOrder === 1) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            Mr. Green wakes up in the morning with an alarm from his brand new phone. <br>
            Click on his <span>phone</span> to turn the alarm off.`;
            this.shadowRoot.querySelector("span").style.cssText = `
            color: darkgrey;
            font-weight: bold;
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle1");
            document.querySelector(".storybg").changeStory(type === "story1");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman1");
        }
        if (this.textOrder === 2) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            Great! Now Mr. Green is ready to go to work. <br> 
            Click on his <span>car</span> to get it started.`;
            this.shadowRoot.querySelector("span").style.cssText = `
            color: yellow;
            font-weight: bold;
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle1");
            document.querySelector(".storybg").changeStory(type === "story1");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman2");
        }
        if (this.textOrder === 3) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            His office is quite hot. He grabs a water bottle from the vending machine to cool down. <br>
            Click on the <span>bottle</span> to help Mr. Green quench his thirst. `;
            this.shadowRoot.querySelector("span").style.cssText = `
            color: skyblue;
            font-weight: bold;
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle2");
            document.querySelector(".storybg").changeStory(type === "story2");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman2");
        }
        if (this.textOrder === 4) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            Great! However, the water doesn’t seem to help. He wants to turn on his fan. <br>
            Click on his desk <span>fan</span> to help him cool down.
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle3");
            document.querySelector(".storybg").changeStory(type === "story2");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman3");
        }
        if (this.textOrder === 5) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            Mr. Green is feeling cool now! <br>
            Click on Mr. Green’s computer <span>screen</span> to get his work day started.
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle3");
            document.querySelector(".storybg").changeStory(type === "story2");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman3");
        }
        if (this.textOrder === 6) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            Mr. Green usually does his laundry after work. <br>
            Click on the laundry detergent to help Mr. Green start his laundry.
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle4");
            document.querySelector(".storybg").changeStory(type === "story3");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman4");
        }
        if (this.textOrder === 7) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            Mr. Green finishes his laundry. <br>
            Click on the <span>laundry basket</span> to help him throw his clothes into the dryer. 
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle4");
            document.querySelector(".storybg").changeStory(type === "story3");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman4");
        }
        if (this.textOrder === 8) {
            this.shadowRoot.querySelector(".textcont > p").innerHTML = `
            While folding his laundry, Mr. Green remembers the movie that his colleague recommended. <br>
            Click on the <span>tablet</span> to watch Netflix.`;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle5");
            document.querySelector(".storybg").changeStory(type === "story4");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman5");
        }
        if (this.textOrder === 9) {
            this.shadowRoot.querySelector(".textcont > p").innerText = `
            Mr. Green fell asleep on the couch while watching TV. It seems that he forgot to turn off the light. <br>
            Click on the switch to turn off the light for him.
            `;
            document.querySelector(".cycleimg").changeFootprintCycle(type === "footprintcycle6");
            document.querySelector(".storybg").changeStory(type === "story4");
            document.querySelector(".greenmanimg").changeGreenman(type === "greenman6");
        }
        if (this.textOrder === 10) {
            window.location.href = "/cta.html";
        }
    }
    previousTextCont() {
        this.textOrder = this.textOrder - 1;
        document.querySelector("the-time").decreaseTime();
        this.updateStoryUI();
    }

    nextTextCont() {
        this.textOrder = this.textOrder + 1;
        document.querySelector("the-time").increaseTime();
        this.updateStoryUI();
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-textcont", TheTextcont);
