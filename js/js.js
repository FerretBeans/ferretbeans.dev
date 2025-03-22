//literally just to get my discord pfp
//changing to imglabs bcs like discord is banned in some places
function pfp() {
  fetch("https://cors-dun.vercel.app/discord?userId=870628551823609926", {
      method: 'GET',
      headers: {
          'Referer': 'https://imglabs.io',
      }
  })
  .then(response => response.json())
  .then(data => {
      var meow = document.getElementById("img");
      meow.src = `https://imglabs.io/?id=e45bddda-fe92-49eb-90aa-1eb2a6070237&url=https://cdn.discordapp.com/avatars/870628551823609926/${data.avatar}.png`;
  })

/*
TAKEN FROM https://codepen.io/rileyjshaw/pen/vExWpe !!!!!
editted a little to make faster but still go show love <3
*/ 
(function () {
    var angle = 0;
    var p = document.getElementById('x3');
    var text = p.textContent.split('');
    var len = text.length;
    var phaseJump = 180 / len;
    var spans;
  
    p.innerHTML = text.map(function (char) {
      return '<span>' + char + '</span>';
    }).join('');
  
    spans = p.children;
  
    (function wheee () {
      for (var i = 0; i < len; i++) {
        spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump)) + ', 55%, 70%)';
      }
      angle += 3;
      requestAnimationFrame(wheee);
    })();
})();

pfp();