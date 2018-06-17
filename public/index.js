const app = function(){
  const url = "http://taco-randomizer.herokuapp.com/random/";
  makeRequest(url, requestComplete);
}

const requestComplete = function(){
  if (this.status !== 200) return;
  const taco = JSON.parse(this.response);
  baseLayer(taco);
  side(taco);
  seasoning(taco);
  condiment(taco);
  shell(taco);
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

const baseLayer = function(taco){

  const baseLayer = document.createElement("div");
  baseLayer.classList.add("baseLayer");
  // const h1 = document.createElement('h1');
  const pTag = document.createElement('p');
  pTag.innerText = taco.base_layer.recipe;
  // h1.textContent = "Base Layer for tonights' taco";
  // baseLayer.appendChild(h1);
  baseLayer.appendChild(pTag);

  document.body.appendChild(baseLayer);
}

const side = function(taco){
  const side = document.createElement('div')
  side.classList.add("side");
  const pTag = document.createElement('p');
  pTag.innerText = taco.mixin.recipe;
  side.appendChild(pTag);
  document.body.appendChild(side);
}
const shell = function(taco){
  const shell = document.createElement('div');
  shell.classList.add('shell');
  const pTag = document.createElement('p');
  pTag.innerText = taco.shell.recipe;
  shell.appendChild(pTag);
  document.body.appendChild(shell);
}

const seasoning = function(taco){
  const seasoning = document.createElement('div');
  seasoning.classList.add('seasoning');
  const pTag = document.createElement('p');
  pTag.innerText = taco.seasoning.recipe;
  seasoning.appendChild(pTag);
  document.body.appendChild(seasoning);
}

const condiment = function(taco){
  const condiment = document.createElement('div');
  condiment.classList.add("condiment");
  const pTag = document.createElement('p');
  pTag.innerText = taco.condiment.recipe;
  condiment.appendChild(pTag);
  document.body.appendChild(condiment);
}


window.addEventListener('load', app);
