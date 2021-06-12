const $climate = document.getElementById("climate");
const $consumtion = document.getElementById("consumption");
const $resources = document.getElementById("resources");
const $people = document.getElementById("people");

$climate.onclick= () => {
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "#2f80ed";
    $consumtion.style.backgroundColor = "transparent"
    $resources.style.backgroundColor = "transparent"
    $people.style.backgroundColor = "transparent"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "Text for climate: Do your bit! Save trees, use renewable energy soureces and prefer to travel green";
};

$consumtion.onclick= () => {
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
$consumtion.style.backgroundColor = "transparent";
    $consumtion.style.backgroundColor = "#27AE60    "
    $resources.style.backgroundColor = "transparent"
    $people.style.backgroundColor = "transparent"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "Do your bit! Shop only what you need,eat only what you need and always save the left overs.";
};

$resources.onclick= () => {
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $resources.style.backgroundColor = "#transparent";
    $consumtion.style.backgroundColor = "transparent"
    $resources.style.backgroundColor = "#EB5757"
    $people.style.backgroundColor = "transparent"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle";
};

$people.onclick= () => {
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $people.style.backgroundColor = "#transparent";
    $consumtion.style.backgroundColor = "transparent"
    $resources.style.backgroundColor = "transparent"
    $people.style.backgroundColor = "#EB5757"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "Do your bit! Never waste food.Rather offer it to people or animals who are in need.";
};



