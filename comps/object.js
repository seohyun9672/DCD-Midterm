//MUST HAVE - CREATE A TEMPLATE TAG
var template_object = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_object.innerHTML = `
<div class="obj-cont">
    <img class="first" src="imgs/objects/phone.svg" alt="phone">
</div>
<style>
  img[alt="phone"].first {
    position: absolute;
    left: 1350px;
    top: 940px;
    width: 10%; 
    height: 10%;
  }
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheObject extends HTMLElement {

  //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
  constructor() {
    super(); //pass on the HTMLElement super powers!
    this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot
    //To-do - CREATE THE STATES FOR THE UI HERE!
  }

  //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
  connectedCallback() {
    this.shadowRoot.appendChild(template_object.content.cloneNode(true)); //use the template to make a clone

    this.shadowRoot.querySelector(".obj-cont").onclick = () => {
      document.querySelector("the-infocard").showInfoCard();
    }
  }


  addObj(objName = "phone") {
    this.objName = objName;
    if (objName === "phone") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML =
        `<div class="object">
          <img class="first" src="imgs/objects/phone.svg" alt="phone">
        </div>
        <style>
        .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            width: 10%;
            height: 10%;
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
    if (objName === "car") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML =
        `<div class ="object">
          <img class ="first" src="imgs/objects/phone.svg" alt="phone">
        </div>
        <div class ="object">
          <img class="second" src="imgs/objects/car.svg" alt="car">
        </div>
        <style>
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top:430px;
            right: 475px;
            width: 20%;
            height: 20%;
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

    if (objName === "waterbottle") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>
        <style>
          .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top:600px;
            left:150px;
            width: 25%;
            height: 25%;
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

    if (objName === "fan") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/waterbottle.svg" alt="waterbottle">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/fan.svg" alt="fan">
        </div>
        <style>
        .first {
          position: absolute;
          top:600px;
          left:150px;
          width: 25%;
          height: 25%;
        }
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top:600px;
            right:1400px;
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
    if (objName === "screen") {
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
        .first {
          position: absolute;
          top:600px;
          left:150px;
          width: 25%;
          height: 25%;
        }
        .second {
            position:absolute;
            top:600px;
            right:1400px;
          }
        .third {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top:300px;
            right: 395px;
            width: 35%;
            height: 35%;
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
    if (objName === "laundrydetergent") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/laundrydetergent.svg" alt="detergent">
        </div>
        <style>
        .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top: 750px;
            right: 500px;
            width: 25%;
            height: 25%;
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
    if (objName === "laundrybasket") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/laundrydetergent.svg" alt="detergent">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/laundrybasket.svg" alt="basket">
        </div>
        <style>
        .first {
          position:absolute;
          top: 750px;
          right: 500px;
          width: 25%;
          height: 25%;
        }
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top: 750px;
            right: 200px;
            width: 25%;
            height: 25%;
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
    if (objName === "tablet") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
          <img class="first" src="imgs/objects/tablet.svg" alt="tablet">
        </div>
        <style>
        .first {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top:900px;
            left:760px;
            width: 10%;
            height: 10%;
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
    if (objName === "switch") {
      this.shadowRoot.querySelector(".obj-cont").innerHTML = `
        <div class="object">
         <img class="first" src="imgs/objects/tablet.svg" alt="tablet">
        </div>
        <div class="object">
          <img class="second" src="imgs/objects/switch.svg" alt="switch">
        </div>
        <style>
        .first {
          position:absolute;
          top:900px;
          left:760px;
          width: 10%;
          height: 10%;
        }
        .second {
            animation: 3s fadeIn;
            animation-fill-mode: forwards;
            visibility: hidden;
            position:absolute;
            top: 250px;
            left: 750px;
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


}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-object", TheObject)


