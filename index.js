/*
 *how to think of events(3 question rule)* 
 *at what time can i do this events.
 *whats going to trigger event(click)
 *Effect (display and homepage)
 /**globals **/
 document.addEventListener(AttachListCatClickEvent) ("domContentLoaded"), () => {
  renderListHomePage();
}
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
//eventListeners
document.querySelector(CatTracker-Form).addEventListener( 'submit',handleSubmit)

//Event handlers
function handleSubmit(e) {
e.preventDefault()
}
let catObj ={
name:e.target.name.value,
ImgUrl:e.target.image-url.value
}
RenderCat(CatObject)
LSaDK6OJY.jpgCat(catObject)

fetch(base_url, {
method:'post',
headers: {
  'content-type': 'application/json'
},
body: json.stringify(new images)
})
.then(resp => resp.json())
.then(images=> RenderCatImages(images))


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