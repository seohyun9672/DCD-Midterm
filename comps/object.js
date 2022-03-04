//MUST HAVE - CREATE A TEMPLATE TAG
var template_object = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_object.innerHTML = `
<div class="obj-cont">
    <img class="first" src="imgs/objects/phone.svg" alt="phone">
</div>
<style>
  .obj-cont {
    position: absolute;
    top: 300px;   
    left: 750px
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
          document.querySelector("the-infocard").showInfocard();
        }
    } 
 
    updateObj() {
        if(this.objName === "phone") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = 
        `<div class="object">
          <img class="first" src="imgs/objects/phone.svg" alt="phone">
        </div>
        <style>
        .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`; 
        }

        if(this.objName === "car") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = 
        `<div class="object">
          <img class="first" src="imgs/objects/phone.svg" alt="phone">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/car.svg" alt="car">
        </div>
        <style>
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
          }
        
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;  
        }
        
        if(this.objName === "waterbottle") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>
        <style>
        .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;
        }
        
        if(this.objName === "fan") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/fan.svg" alt="fan">
        </div>
        <style>
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;  
        }
        if(this.objName === "screen") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/fan.svg" alt="fan">
        </div>
        <div class="object">
          <img class="third" src="imgs/objects/screen.svg" alt="screen">
        </div>
        <style>
        .third {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;   
        }
        if(this.objName === "laundrydetergent") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/laundrydetergent.svg" alt="detergent">
        </div>
        <style>
        .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;  
        }
        if(this.objName === "laundrybasket") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/laundrydetergent.svg" alt="detergent">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/laundrybasket.svg" alt="basket">
        </div>
        <style>
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;  
        }
        if(this.objName === "tablet") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/tablet.svg" alt="tablet">
        </div>
        <style>
        .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;  
        }
        if(this.objName === "switch") {
        this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
         <img class="first" src="imgs/objects/tablet.svg" alt="tablet">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/switch.svg" alt="switch">
        </div>
        <style>
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            
            visibility: hidden;
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        </style>`;  
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

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-object", TheObject)


