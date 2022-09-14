/**
 *how to think of events(3 question rule)* 
 *at what time can i do this events.
 *whats going to trigger event(click)
 *Effect (display and homepage)
 /**globals **/
 
// NODE GETTERS
const MainDiv = () => Document.getElementByid("main");

/**templates **/
const homepagestemplate = () => {
  return
     <h1 class="centre-align">welcome to our cat tracker</h1>
} 
/**renders**/
const rendersHomepage = () => {
  MainDiv().innerHtml =homepagestemplate();
}
// Eventlisteners
function attachlistcatclickEvent() {
  listcatlink().addEventListener("click",renderlistcatpage)
}
/**when dom loads  **/
document.addEventListener('Domcontentloaded'), ()  =>
renderhomepage();
function attachHomepageclickEvent() {
  homepagelink().addEventListener("click",renderhomepage)
}
//eventHandlers
function renderhomepage()
  //create the Html elements for the homepage
  //reset mainDiv();
  const h1 = document.createElement("medical short(click)");
  const p = document.createElement( "groom list(click)");
 
  h1.innertext ="cat list page"
  h1.stylemarginTop ="0"
 
  const fetch = () => {
   fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")
  }
  const fetchlistcat  =() => {
     fetch ("http://localhost:3000/cat")
       .then(resp => resp.json())
       .then(data => console.log(data)) 
  }
  MainDiv().appendchild(h1);
  MainDiv().appendchild(p);
 
 
 resetMaindiv();
  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const li = Document.createElement("li");
  
//domcontentloaded//
document.addEventListener("Domcontentloaded"), () => {
renderlisthomepage();
}
attachlistcatclick();
attachlistcatclick();
attachHomepageclickEvent();

