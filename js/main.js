var sliderA = document.querySelector("#inputA");
var valueA = document.querySelector("#valueA");
valueA.innerHTML = sliderA.value;
sliderA.oninput = function() {
    valueA.innerHTML = this.value;
}

var sliderB = document.querySelector("#inputB");
var valueB = document.querySelector("#valueB");
valueB.innerHTML = sliderB.value;
sliderB.oninput = function() {
    valueB.innerHTML = this.value;
}

var sliderC = document.querySelector("#inputC");
var valueC = document.querySelector("#valueC");
valueC.innerHTML = sliderC.value;
sliderC.oninput = function() {
    valueC.innerHTML = this.value;
}

var sliderD = document.querySelector("#inputD");
var valueD = document.querySelector("#valueD");
valueD.innerHTML = sliderD.value;
sliderD.oninput = function() {
    valueD.innerHTML = this.value;
}

var sliderE = document.querySelector("#inputE");
var valueE = document.querySelector("#valueE");
valueE.innerHTML = sliderE.value;
sliderE.oninput = function() {
    valueE.innerHTML = this.value;
}

var sliderF = document.querySelector("#inputF");
var valueF = document.querySelector("#valueF");
valueF.innerHTML = sliderF.value;
sliderF.oninput = function() {
    valueF.innerHTML = this.value;
}


  window.watsonAssistantChatOptions = {
      integrationID: "51e40a81-b2b7-4488-b722-cf54f5cb8a77", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "3d264ece-cb0b-498b-b075-d98e16a9171a", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
