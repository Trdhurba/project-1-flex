/*
 *how to think of events(3 question rule)* 
 *at what time can i do this events.
 *whats going to trigger event(click)
 *Effect (display and homepage)
 /**globals **/
 
// NODE GETTERS
const mainDiv = document.getElementById("main"); 

const homePageLink =document.getElementById("home-page-link");

/**templates **/
const homepagesTemplate = () => {
  return '<h1 class="centre-align" cat tracker app</h1>'
} 
/**renders**/
const renderListHomePage = () => {
  mainDiv.innerHTML =homepagesTemplate();
}
// eventListeners
function AttachListCatClickEvent() {
listCatLink().addEventListener("click",RenderListCatPage)
}
function createName () {
}
//Add an Eventlistener to the catForm calling the event handler,create cat form

const catForm = document.querySelector('submitButton');
  
catForm.addEventListener('submit', event => console.log(event)) 
event.preventDefault()
//this event handler should create a new cat Name object and persist image_url link.
const name = document.querySelector('#name-input').value
const image_url = document.querySelector('image_url-input').value
//create an name id and persist image_url link on browser.
const NameObj = {
  "name id": "LSaDk6OjY",
  "url":"https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg",
  "width" :200,
  "height" :200
}

//persist image_url link on browser.

fetch(base_url,  {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: json.stringify(nameObj)
})
.then(resp =>resp.json())
.then(name =>renderName(name))

// .then(renderName) //refactored line 53.
function renderName(Name) {
console.log('NameObj')
}
/**when dom loads  **/
function attachHomepageClickEvent() {
  HomePageLink().addEventListener("click",RenderHomePage)
}
//create the Html elements for the homepage
//reset mainDiv();
 
h1.innerText ="list cat page"
h1.styleMarginTop ="0"
base_url = 'https://api.thecatapi.com/v1/images/search?limit=10'
document.addEventListener("DOMContentLoaded", () => {
   renderCatImages();
    
    function renderCatImages(){
      fetch (base_url)
      .then(res => res.json())
      .then(data => {
      console.log(data);
      Array.from(data).forEach(cat => {
        const img = document.createElement('img')
        const catImageContainer = document.getElementById('catContainer')
        img.src=cat.url
        catImageContainer.append(img)
      })
    })}
  })
  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
 
resetMainDiv();
const h1 = document.createElement("h1");
const ul = document.createElement("ul");
const li = document.createElement("li");
  
//DomContentLoaded//
document.addEventListener("DomContentLoaded"), () => {
RenderListHomepage();
}
AttachListCatClick();
AttachHomePageClickEvent();