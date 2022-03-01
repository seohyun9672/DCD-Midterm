//MUST HAVE - CREATE A TEMPLATE TAG
var template_object = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_object.innerHTML = `
<div class="obj-cont">
<div class="object">
    <img class="first" src="imgs/objects/phone.svg" alt="phone">
</div>
</div>
<style>
    .object {
     position: absolute;
     top: 430px;   
     left: 400px
    }
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheObject extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_object.content.cloneNode(true)); //use the template to make a clone
        // if (this.getAttribute("name")){
        //     document.querySelector(".object > .first").src = () => changeOb(this.getAttribute("name"));   
        // }
        this.objNum = 1;
        this.shadowRoot.querySelector(".obj-cont").onclick = () => {
            this.trigger();
            this.popUp();
        }
        
    } 
        

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    // changeOb(type = "story1"){
    //     if(type === "story1"){
    // //     this.shadowRoot.querySelector(".object > .first").src = `/imgs/objects/phone.svg;`
    // //     // this.shadowRoot.querySelector(".object > .second").src = `/imgs/objects/car.svg;`
    // //     }
        
    // //     if(type === "story4"){
    // //     this.shadowRoot.querySelector(".object > .first").src = `/imgs/objects/tablet.svg;`
    // //     }

    // // }


    updateObj() {
        if(this.objNum === 1) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = 
        `<div class="object">
        <img class="first" src="imgs/objects/phone.svg" alt="phone">
        </div>`; 
        }

        if(this.objNum === 2) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = 
        `<div class="object">
        <img class="first" src="imgs/objects/phone.svg" alt="phone">
        </div>
        <div class="object">
        <img class="second" src="imgs/objects/car.svg" alt="car">
        </div>`;  
        }
        
        if(this.objNum === 3) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `<div class="object">
        <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>`;
        }
        
        if(this.objNum === 4) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `<div class="object">
        <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>
        <div class="object">
        <img class="second" src="imgs/objects/fan.svg" alt="fan">
        </div>`;  
        }
        if(this.objNum === 5) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `<div class="object">
        <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>
        <div class="object">
        <img class="second" src="imgs/objects/fan.svg" alt="fan">
        </div>
        <div class="object">
        <img class="third" src="imgs/objects/screen.svg" alt="screen">
        </div>`;   
        }
        if(this.objNum === 6) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `<div class="object">
        <img class="first" src="imgs/objects/laundrydetergent.svg" alt="detergent">
        </div>`;  
        }
        if(this.objNum === 7) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `<div class="object">
        <img class="first" src="imgs/objects/laundrydetergent.svg" alt="detergent">
        </div>
        <div class="object">
        <img class="second" src="imgs/objects/laundrybasket.svg" alt="basket">
        </div>`;  
        }
        if(this.objNum === 8) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `<div class="object">
        <img class="first" src="imgs/objects/tablet.svg" alt="tablet">
        </div>`;  
        }
        if(this.objNum === 9) {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `<div class="object">
        <img class="first" src="imgs/objects/tablet.svg" alt="tablet">
        </div>
        <div class="object">
        <img class="second" src="imgs/objects/switch.svg" alt="switch">
        </div>`;  
        }
    }
    remObj() {
        this.objNum = this.objNum - 1;
        this.updateObj();
    }
    
    addObj() {
        this.objNum = this.objNum + 1;
        this.updateObj();
    }
    trigger() {
        document.querySelector("the-textcont").increaseTextCont();
    }
    popUp(){
        document.querySelector("the-infocard").showInfocard();
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-object", TheObject)


