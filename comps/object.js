//MUST HAVE - CREATE A TEMPLATE TAG
var template_object = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_object.innerHTML = `
<div class="obj-cont">
    <img class="first" src="imgs/objects/phone.svg" alt="phone">
</div>
<style>
  .obj-cont > img {
    filter: drop-shadow(0 0 40px white);
  }

  img[alt="phone"].first {
    position: absolute;
    left: 1350px;
    top: 940px;
    width: 10%; 
    height: 10%;
  }

  .obj-cont {
    cursor:pointer;
  }

  @media only screen and (max-width: 1440px){
    img[alt="phone"].first {
      position: absolute;
      top:530px;
      left: 750px;
    }
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px){
    img[alt="phone"].first {
      position: absolute;
      top:650px;
    }
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
            filter: drop-shadow(0 0 40px white);
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
            filter: drop-shadow(0 0 60px white);
          }
          @media screen and (max-width:1440px) {
            .second {
              top:14em;
              right:17em;
            }
          }
          @media screen and (max-width:1920px) and (min-width:1440px) {
            .second {
              top:20em;
              right:21em;
            }
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
          @media only screen and (max-width: 1440px){
            img[alt="car"].second {
              position: absolute;
              top: 225px;
              right: 281px;
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
            filter: drop-shadow(0 0 60px white);
          }
          @media screen and (max-width:1440px){
            .first {
              top:300px;
            left:150px;
            }
          }
          @media screen and (max-width:1920px) and (min-width:1440px){
            .first {
              top:400px;
            left:150px;
            }
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
          @media only screen and (max-width: 1440px){
            img[alt="waterbottle"].first {
              position: absolute;
              top: 350px;
              left: 120px;
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
            filter: drop-shadow(0 0 60px white);
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
          @media only screen and (max-width: 1440px){
            .first {
              position: absolute;
              top: 350px;
              left: 120px;
            }
            img[alt="fan"].second {
              position:absolute;
              top:300px;
              right:750px;
            }
          }
          @media screen and (max-width:1920px) and (min-width:1441px){
            .first {
              top:400px;
            left:150px;
            }
            img[alt="fan"].second {
              position:absolute;
              top:400px;
              right:1100px;
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
            top:305px;
            right: 390px;
            width: 35%;
            height: 35%;
            filter: drop-shadow(0 0 50px white);
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
          @media only screen and (max-width: 1440px){
            .first {
              position: absolute;
              top: 350px;
              left: 120px;
            }
            .second {
              position:absolute;
              top:300px;
              right:750px;
            }
            img[alt="screen"].third {
              position:absolute;
              top:170px;
              right:200px;
              width: 34%;
              height: 34%;
            }
          }
          @media screen and (max-width:1920px) and (min-width:1441px){
            .first {
              top:400px;
            left:150px;
            }
            img[alt="fan"].second {
              position:absolute;
              top:400px;
              right:1100px;
            }
            img[alt="screen"].third {
              position:absolute;
              top:230px;
              right:300px;
              width: 35%;
              height: 35%;
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
            filter: drop-shadow(0 0 50px white);
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
          @media only screen and (max-width: 1440px){
            img[alt="detergent"].first {
              position:absolute;
              top:227px;
              left:330px;
              width: 23%;
              height:23%
            }
          }
          @media only screen and (max-width: 1920px) and (min-width:1441px){
            img[alt="detergent"].first {
              position:absolute;
              top:330px;
              left:400px;
              width: 23%;
              height:23%
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
            filter: drop-shadow(0 0 50px white);
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
          @media only screen and (max-width: 1440px){
            .first {
              position:absolute;
              top:227px;
              left:330px;
              width: 23%;
              height:23%
            }
            img[alt="basket"].second{
              position: absolute;
              top: 410px;
              right: 270px;
            } 
          }
          @media only screen and (max-width: 1920px) and (min-width:1441px){
            img[alt="detergent"].first {
              position:absolute;
              top:330px;
              left:400px;
              width: 23%;
              height:23%
            }
            img[alt="basket"].second{
              position: absolute;
              top: 550px;
              right: 270px;
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
            filter: drop-shadow(0 0 50px white);
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
          @media only screen and (max-width: 1440px){
            img[alt="tablet"].first{
              position: absolute;
              top: 490px;
              left: 400px;
            } 
          }
          @media only screen and (max-width: 1920px) and (min-width:1441px){
            img[alt="tablet"].first{
              position: absolute;
              top: 600px;
              left: 500px;
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
            left: 720px;
            filter: drop-shadow(0 0 20px white);
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
          @media only screen and (max-width: 1440px){
            .first{
              position: absolute;
              top: 490px;
              left: 400px;
            }
            img[alt="switch"].second{
              position: absolute;
              top: 160px;
              left: 360px;
              width: 8%;
              height: 8%;
            }
          }
          @media only screen and (max-width: 1920px) and (min-width:1441px){
            img[alt="tablet"].first{
              position: absolute;
              top: 600px;
              left: 500px;
            } 
            img[alt="switch"].second{
              position: absolute;
              top: 160px;
              left: 490px;
              width: 8%;
              height: 8%;
            }
          }
        </style>`;
    }
  }


}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-object", TheObject)


