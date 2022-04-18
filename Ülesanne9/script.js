let uudis1 = {
    nimi: "Esimene uudis",
    tekst: "Lorem ipsum dolor sit amet",
    pilt: "pilt",
    link: "link",


}
let uudis2 = {
    nimi: "Teine uudis",
    tekst: "Lorem ipsum dolor sit amet",
    pilt: "pilt",
    link: "link",

  }
let uudis3 = {
    nimi: "Kolmas uudis",
    tekst: "Lorem ipsum dolor sit amet",
    pilt: "pilt",
    link: "link",
  }
let uudised = [uudis1, uudis2, uudis3];
let sisuHTMLElement =document.getElementById("uudised");
 
for (let i = 0; i < uudised.length; i++) {
    sisuHTMLElement.innerHTML += "<div>"+
    "<div>"+uudised[i].nimi + "</div>"+
    "<div>"+uudised[i].tekst + "</div>"+
    "<div>"+uudised[i].pilt + "</div>"+
    "<div>"+uudised[i].link + "</div>"+
    "</div>"
   
  };





