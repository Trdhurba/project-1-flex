/**
 *how to think of events(3 question rule)* 
 *at what time can i do this events.
 *whats going to trigger event(click)
 *Effect (display and homepage)
 /**globals **/
 
// NODE GETTERS
const MainDiv = () => Document.getElementById("main");
const Homepagelink = Document.getElementById (Homepagelink)
/**templates **/
const homepagesTemplate = () => {
  return
     <h1 class="centre-align">welcome to our cat tracker</h1>
} 
/**renders**/
const rendersHomePage = () => {
  MainDiv().innerHTML =homepagesTemplate();
}
// Eventlisteners
function attachlistCatClickEvent() {
  listCatlink().AddEventListener("click",renderlistcatpage)
}
/**when dom loads  **/
document.addEventListener('Domcontentloaded'), ()  =>
renderhomepage();
function attachHomepageClickEvent() {
  homepagelink().addEventListener("click",renderhomepage)
}
//eventHandlers
function renderhomepage()
  //create the Html elements for the homepage
  //reset mainDiv();
  const h1 = Document.createElement("medical short(click)");
  const p = Document.createElement( "groom list(click)");
 
  h1.innertext ="cat list page"
  h1.stylemarginTop ="0"
 
  const fetch = () => {
   fetchhttps//api.thecatapi.com/v1/images/search?limit=10 
  }
  const fetchlistCat  =() => {
     fetch ("http://localhost:3000/cat")
       .then(resp => resp.json())
       .then(data => console.log(data)) 
  }
  MainDiv().AppendChild(h1);
  MainDiv().AppendChild(p);
 
 
 resetMainDiv();
  const h1 = Document.CreateElement("h1");
  const ul = Document.CreateElement("ul");
  const li = Document.CreateElement("li");
  
//domcontentloaded//
Document.addEventListener("Domcontentloaded"), () => {
renderlistHomepage();
}
attachlistcatclick();
attachlistcatclick();
attachHomepageclickEvent();

