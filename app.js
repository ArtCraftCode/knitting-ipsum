// lol
var dictionary = [
  "knit", "purl", "knitting", "purling", "wool", "merino", "bamboo", "fiber", "yarn", "dye", "worsted", "bulky", "DK", "aran", "fingering", "needles", "double pointed", "circular", "darning", "needle", "stitch", "stitches", "marker", "markers", "cable", "weave", "felt", "block", "yarn over", "lace", "knit two together", "slip slip knit", "shawl", "cowl", "socks", "hat", "beanie", "baby", "blanket", "sock", "scarf", "scarves", "fair isle", "jacquard", "rip", "frog", "ripped", "frogged", "in progress", "hibernating", "cashmere", "superwash", "nylon", "milk", "thread", "knot", "tie", "darn", "design", "pattern", "motif", "texture", "cardigan", "sweater", "lopi", "twisted", "Bavarian", "continental", "one", "two", "count", "repeat", "gift", "hand", "wash", "dry", "machine", "woven", "chart", "slippers", "tea cozy", "toy", "project", "hook", "crochet", "loom", "Intarsia", "corrugated ribbing", "ribbing", "illusion", "shadow", "mosaic", "stripes", "bias", "buttonholes", "moebius", "double knitting", "entrelac", "gusset", "icord", "kitchener", "grafting", "modular", "provisional", "seamed", "seamless", "selvedge", "short rows", "steeks", "thrums", "worked flat", "worked in the round", "bobble", "brioche", "chevron", "dropped", "elastic", "eyelets", "mesh", "reversible", "ribbed", "ripple", "slipped", "smocked", "textured", "yards", "yardage", "meters", "scissors", "cut", "sew"
];

var wordIndex = dictionary.length - 1;

function random(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

function sentence() {
  var wordCount = random(20, 8);
  var wordPositions = [];
  var sentence = [];

  // get random index for words
  for (var i = wordCount; i > 0; i--) {
    wordPositions.push(random(wordIndex, 0));
  }

  // get words
  for (var k = wordPositions.length - 1; k > 0; k--) {
    sentence.push(dictionary[wordPositions[k]]);
  }

  sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);
  sentence = sentence.join(" ");
  return sentence += ".";
}

function paragraphs(number) {
  var paras = [];

  for (var j = number; j > 0; j--) {
    var paragraph = [];
    var sentenceCount = random(10, 3);

    for (var l = sentenceCount; l > 0; l--) {
      paragraph.push(sentence());
    }
    paras.push(paragraph.join(" ").toString());
  }

  return paras;
}

function format(paragraphs) {
  for (var i = paragraphs.length - 1; i >= 0; i--) {
    var sentence = paragraphs[i]
    paragraphs[i] = "<p>" + sentence + "</p>";
  }
  return paragraphs;
}

$(document).ready(function() {
  // listen for clicks and do stuff
  $('#ipsum').submit(function(event) {
    event.preventDefault();
    $('#generated').html('');
    var number = $('#paragraphs').val();
    var paras = paragraphs(number);
    $('#generated').append(format(paras));
  });
});