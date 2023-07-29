//btn func
function aboutme() {
    //changes title
    document.title = "FerretBeans<3 - About";

    //switches page and stylesheet
    document.getElementsByTagName("link")[0].href = "about.css";
    document.getElementsByTagName("body")[0].innerHTML = '';

    //changes page text 
    document.getElementsByTagName("body")[0].innerHTML = "<div id='header'><center><h1>About Me</h1></center><center><button id='button' onclick='home();'>home</button></center></div><div id='text'><p>Heya, I'm Ferret</p><p>I'm a wanna be programmer (still kinda learning)</p><p>Here are some things about me:</p><ul id='list'><li><span>I'm learning Norwegian</span></li><li><span>I'm learning a few programming languages such as</span><ul><li><span>C, C++, C#</span></li><li><span>JavaScript</span></li><li><span>Go</span></li> <li><span>Rust</span</li><li><span>Java</span></li></ul><li><span>I'm Non Binary, gay and a furry :3</span></li><li><span>I own gabeitches.com :3</span></li></ul>";
}

function home() {
    //refreshes the page
    location.reload();
}

function projects() {
    //title change
    document.title = "FerretBeans<3 - Projects";

    //switches the page
    document.getElementsByTagName("link")[0].href = "projects.css";
    document.getElementsByTagName("body")[0].innerHTML = '';

    document.getElementsByTagName("body")[0].innerHTML = "<div id='header'><center><h1 id='heading'>My Projects</h1></center><center><button id='button' onclick='home()'>Home</button></center></div><div id='text'><p>Here are my projects :D</p><ul id='list'><li><span><a href='BasicClock/index.html'>A Very Basic Clock</a></span></li><li><span><a href='NotSoBasicClock/index.html'>A Lesser Basic Clock</a></span></li><li><span><a href='IPBasedClock/index.html'>An Ip Based Clock</a></span></li><li><span><a href='Gabeitches/index.html'>Gabeitches.com - A Game Website</a></span></li></ul></div>";
}