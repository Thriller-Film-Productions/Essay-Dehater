let text;
let words;
let container;

function setup() {
  noCanvas();
  words = createElement("textarea").attribute("placeholder", "Type all the words you don't want in the essay").style("width", "12vw").style("height", "25vh").style("font-family", "sans-serif").value("I\nme\nmy\nmine\nwe\nus\nour\nours\nyou\nyour\nyours\nin conclusion\nthis shows that\nso\nbut");
  text = createElement("textarea").attribute("placeholder", "Copy/paste your essay here").changed(search).style("width", "32vw").style("height", "25vh").style("font-family", "sans-serif");
  container = createDiv();
}

function search() {
  container.elt.innerHTML = "";
  let bad = words.value().split("\n");
  for (let i = 0; i < bad.length; i++) {
    bad[i] = bad[i].toLowerCase();
  }
  let essay = text.value().split("\n")
  for (let i = 0; i < essay.length; i++) {
    essay[i] = essay[i].split(" ");
  }
  createElement("br").parent(container);
  for (let i = 0; i < essay.length; i++) {
    for (let j = 0; j < essay[i].length; j++) {
      if (words.value().split("\n").includes(essay[i][j].toLowerCase())) {
        createSpan(essay[i][j] + " ").style("color", "rgb(235, 51, 51)").style("font-family", "sans-serif").parent(container);
      } else {
        createSpan(essay[i][j] + " ").style("color", "rgb(51, 51, 51)").style("font-family", "sans-serif").parent(container);
      }
    }
    createElement("br").parent(container);
  }
}