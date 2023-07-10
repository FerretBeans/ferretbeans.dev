//btn func
function aboutme() {
    //changes title
    document.title = "FerretBeans<3 - About";

    //switches page
    document.getElementsByTagName("link")[0].href = "about.css";
    document.getElementsByTagName("body")[0].innerHTML = '';

    //changes page text 
    var heading = document.createElement("h1");
    heading.textContent ="About Me";
    heading.setAttribute("id", "test");
    document.body.appendChild(heading);
}