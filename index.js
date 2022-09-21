/**
 *how to think of events(3 question rule)* 
 *at what time can i do this events.
 *whats going to trigger event(click)
 *Effect (display and homepage)
 /**globals **/
 document.addEventListener("Domcontentloaded"), () => {
  renderlistHomepage();
  }
// NODE GETTERS
const mainDiv = () => document.getElementById("main");
const Homepagelink = document.getElementById (Homepagelink)
/**templates **/
const homepagesTemplate = () => {
  return
     <h1 class="centre-align">welcome to our cat tracker</h1>
} 
/**renders**/
const rendersHomePage = () => {
  mainDiv().innerHTML =homepagesTemplate();
}
// Eventlisteners
function attachlistCatClickEvent() {
  listCatlink().addEventListener("click",renderlistcatpage)
}
/**when dom loads  **/

function attachHomepageClickEvent() {
  homepagelink().addEventListener("click",renderhomepage)
}
//eventHandlers
function renderhomepage()
  //create the Html elements for the homepage
  //reset mainDiv();
 
  h1.innertext ="cat list page"
  h1.stylemarginTop ="0"
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
  mainDiv().AppendChild(h1);
  mainDiv().AppendChild(p);
 
 
 resetMainDiv();
  const h1 = document.CreateElement("h1");
  const ul = document.CreateElement("ul");
  const li = document.CreateElement("li");
  
//domcontentloaded//
document.addEventListener("Domcontentloaded"), () => {
renderlistHomepage();
}
attachlistcatclick();
attachlistcatclick();
attachHomepageclickEvent();

