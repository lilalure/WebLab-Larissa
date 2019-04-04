document.getElementById("id1").firstChild.nodeValue = "Durch Javascript geänderter Text";


anime.id1({loop: true})
  .add({
    targets: '#id1',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '#id1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
