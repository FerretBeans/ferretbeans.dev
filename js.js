//btn func
function aboutme() {
    //changes title
    document.title = "FerretBeans<3 - About";

    //switches page and stylesheet
    document.getElementsByTagName("link")[0].href = "about.css";
    document.getElementsByTagName("body")[0].innerHTML = '';

    //changes page text 
    document.getElementsByTagName("body")[0].innerHTML = "</head><body><div id='header'><center><h1>About Me</h1></center><center><button id='button' onclick='home();'>home</button></center></div><div id='text'><p>Heya, I'm Ferret</p><p>I'm a wanna be programmer (still kinda learning)</p><p>Here are some things about me:</p><ul id='list'><li><span>I'm learning Norwegian</span></li><li><span>I'm learning a few programming languages such as</span><ul><li><span>C, C++, C#</span></li><li><span>JavaScript</span></li><li><span>Go</span></li> <li><span>Rust</span</li><li><span>Java</span></li></ul><li><span>I'm Non Binary, gay and a furry :3</span></li><li><span>I own gabeitches.com :3</span></li></ul>";
}

function home() {
    location.reload();
}