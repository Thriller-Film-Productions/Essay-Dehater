let text;
let words;
let container;
let bad;
let essay;

function setup() {
  noCanvas();
  words = createElement("textarea").attribute("placeholder", "Type all the words you don't want in the essay").style("width", "12vw").style("height", "25vh").style("font-family", "sans-serif").value("I\nme\nmy\nmine\nwe\nus\nour\nours\nyou\nyour\nyours\nin conclusion\nthis shows that\nso\nbut");
  text = createElement("textarea").attribute("placeholder", "Copy/paste your essay here").changed(search).style("width", "32vw").style("height", "25vh").style("font-family", "sans-serif");
  container = createDiv();
}

function search() {
  container.elt.innerHTML = "";
  bad = words.value().split("\n");
  for (let i = 0; i < bad.length; i++) {
    bad[i] = bad[i].toLowerCase();
  }
  essay = text.value().split("\n")
  for (let i = 0; i < essay.length; i++) {
    essay[i] = essay[i].split(" ");
  }
  createElement("br").parent(container);
  for (let i = 0; i < essay.length; i++) {
    for (let j = 0; j < essay[i].length; j++) {
      if (checkall(i, j)[0]) {
        createSpan(essay[i][j] + " ").style("color", "rgb(235, 51, 51)").style("font-family", "sans-serif").parent(container);
      } else {
        createSpan(essay[i][j] + " ").style("color", "rgb(51, 51, 51)").style("font-family", "sans-serif").parent(container);
      }
    }
    createElement("br").parent(container);
  }
}

function wordAgainstPhrase(word1, word2, phrase) {
  console.log(bad[phrase].split(" ").length);
  if (essay[word1][word2].toLowerCase() == bad[phrase].toLowerCase()) {
    return true;
  } else if (bad[phrase].split(" ") > 1) {
    let pts = 0;
    for (let i = 0; i < bad[phrase].split(" ").length; i++) {
      if (essay[word1][word2+i] = bad[phrase].split(" ")[i]) {
        pts++;
      }
    }
    console.log(pts);
    if (pts == bad[phrase].split(" ").length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function checkall(word1, word2) {
  for (let i = 0; i < bad.length; i++) {
    if (wordAgainstPhrase(word1, word2, i)) {
      return [true, bad[i].split(" ").length];
    }
  }
  return [false];
}
