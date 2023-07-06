// Universal function
const $ = (selector) => document.querySelector(selector)
// _________ HEADER _________
// Mode change
const changeTheme = () => {
    const currentDark = $("body").getAttribute("data-theme")
    if (currentDark){
        $("#btn__dark").classList.add("hidden")
        $("#btn__light").classList.remove("hidden")
        $("body").removeAttribute("data-theme", "light__theme")
    }else {
        $("#btn__dark").classList.remove("hidden")
        $("#btn__light").classList.add("hidden")
        $("body").setAttribute("data-theme", "light__theme")
    }
}
// Dark button
$("#btn__dark").addEventListener("click", changeTheme)
// Light button
$("#btn__light").addEventListener("click", changeTheme)
// BTN - Image and Text
// _________ ASIDE - Image panel - appear ________
$("#btn__img").addEventListener("click", () =>{
    $(".image__panel").style.display = "block"
    $(".text__panel").style.display = "none"
})
// Imagen panel - disappear
$(".btn__image__panel--close").addEventListener("click", () =>{
    $(".image__panel").classList.add("hidden")
    $(".image__panel").style.display = "none"
})
// _________ ASIDE - Text panel - appear ________
$("#btn__text").addEventListener("click", () =>{
    $(".text__panel").style.display = "block"
    $(".image__panel").style.display = "none"
})
// Text panel - disappear
$(".btn__text__panel--close").addEventListener("click", () =>{
    $(".text__panel").classList.add("hidden")
    $(".text__panel").style.display = "none"
})

// _________ MAIN _________
// IMAGEN URL
$("#url__image").addEventListener("input", () =>{
    $("#image__meme").style.backgroundImage = `url(${$("#url__image").value}`
})
// _________ ASIDE - Image panel
// Background image
$("#btn__bgimagen").addEventListener("input", () =>{
    $("#image__meme").style.backgroundColor = $("#btn__bgimagen").value
    $("#bgimagen__span").innerHTML = ($("#btn__bgimagen").value).toUpperCase()
    $("#btn__bgimagen").style.backgroundColor = $("#btn__bgimagen").value
})
// Background selector
$("#select__bg").addEventListener("click", () =>{
    $("#image__meme").style.backgroundBlendMode = $("#select__bg").value
    $("#image__meme").style.backgroundColor = $("#btn__bgimagen").value
})
// ____Filters panel
const range = () =>{
    $("#image__meme").style.filter = `brightness(${$(".glow").value}) opacity(${$(".opacity").value}) contrast(${$(".contrast").value}%) blur(${$(".blur").value}px) grayscale(${$(".grayscale").value}%) sepia(${$(".sepia").value}%) hue-rotate(${$(".hue").value}deg) saturate(${$(".crowded").value}%) invert(${$(".negative").value}%)`
}
//  Brightness
$(".glow").addEventListener("change", range)
//  Opacity
$(".opacity").addEventListener("change", range) 
//  Contrast
$(".contrast").addEventListener("change", range)
//  Unfocused
$(".blur").addEventListener("change", range)
//  Grayscale
$(".grayscale").addEventListener("change", range)
//  Sepia
$(".sepia").addEventListener("change", range)
//  Hue
$(".hue").addEventListener("change", range)
//  Saturation
$(".crowded").addEventListener("change", range)
//  Negative
$(".negative").addEventListener("change", range)
// Button reset - Filters
const btnResetFilters = () =>{
    $(".glow").value = "100"
    $(".opacity").value = "100"
    $(".contrast").value = "0"
    $(".blur").value = "0"
    $(".grayscale").value = "0"
    $(".sepia").value = "0"
    $(".hue").value = "0"
    $(".crowded").value = "0"
    $(".negative").value = "0"
    range()
}
$(".btn__reset__filters").addEventListener ("click", btnResetFilters)

const meme = document.getElementById("container__memes__edit")
// Button download
const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};
$("#button__download").addEventListener('click', downloadMeme)
console.log(meme)
console.log($("#button__download")
)