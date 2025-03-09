//literally just to get my discord pfp
function pfp() {
    fetch("https://cors-dun.vercel.app/discord?userId=870628551823609926")
    .then(response => response.json())
    .then(data => {
        var meow = document.getElementById("img");
        meow.src = `https://cdn.discordapp.com/avatars/870628551823609926/${data.avatar}.png`
    });
}

//im adding a way for my name to be rainbow :3
    var speed=100;
    var glow=0;
    var raincol=new Array("#ff0000", "#ff5500", "#ffaa00", "#ffff00", "#aaff00", "#55ff00", "#00ff00", "#00ff55", "#00ffaa", "#00ffff", "#00aaff", "#0055ff", "#0000ff", "#5500ff", "#aa00ff", "#ff00ff", "#ff00aa", "#ff0055"); // change the colours if you want to
    var alink="https://ferretbeans.dev";
    
    /****************************
    *    Rainbow Text Effect    *
    *(c)2003-13 mf2fm web-design*
    *  http://www.mf2fm.com/rv  *
    * DON'T EDIT BELOW THIS BOX *
    ****************************/
    var rainbow, raintxt, raincnt=0;
    
    function addLoadEvent(funky) {
      var oldonload=window.onload;
      if (typeof(oldonload)!='function') window.onload=funky;
      else window.onload=function() {
        if (oldonload) oldonload();
        funky();
      }
    }
    
    addLoadEvent(regenbogen);
    
    function regenbogen() { if (document.getElementById) {
      var i, rainbeau;
      rainbow=document.getElementById("rainbow");
      raintxt=rainbow.firstChild.nodeValue;
      while (rainbow.childNodes.length) rainbow.removeChild(rainbow.childNodes[0]);
      for (i=0; i<raintxt.length; i++) {
        rainbeau=document.createElement("span");
        rainbeau.setAttribute("id", "rain"+i);
        rainbeau.appendChild(document.createTextNode(raintxt.charAt(i)));
        if (alink) {
          rainbeau.style.cursor="pointer";
          rainbeau.onclick=function() { top.location.href=alink; }
        }
        rainbow.appendChild(rainbeau);
      }
      rainbow=setInterval ("raining()", speed);
    }}
    
    function raining() {
      var i, c;
      for (i=0; i<raintxt.length; i++) {
        c=raincol[(i+raincnt)%raincol.length];
        document.getElementById("rain"+i).style.color=c;
        if (glow) document.getElementById("rain"+i).style.textShadow=c+" 0px 0px "+glow+"px";
      }
      raincnt++;
    }

pfp();