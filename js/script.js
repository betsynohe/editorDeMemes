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
        $("#gif__text").classList.add("hidden")
        $("#gif__text1").classList.remove("hidden")
        $("#gif__img").classList.add("hidden")
        $("#gif__img1").classList.remove("hidden")
        $("#footer__gif").classList.add("hidden")
        $("#footer__gif1").classList.remove("hidden")
    }else {
        $("#btn__dark").classList.remove("hidden")
        $("#btn__light").classList.add("hidden")
        $("body").setAttribute("data-theme", "light__theme")
        $("#gif__text").classList.remove("hidden")
        $("#gif__text1").classList.add("hidden")
        $("#gif__img").classList.remove("hidden")
        $("#gif__img1").classList.add("hidden")
        $("#footer__gif").classList.remove("hidden")
        $("#footer__gif1").classList.add("hidden")
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
$(".glow").addEventListener("input", range)
$(".opacity").addEventListener("input", range) 
$(".contrast").addEventListener("input", range)
$(".blur").addEventListener("input", range)
$(".grayscale").addEventListener("input", range)
$(".sepia").addEventListener("input", range)
$(".hue").addEventListener("input", range)
$(".crowded").addEventListener("input", range)
$(".negative").addEventListener("input", range)

// Button reset - Filter
$(".btn__reset__filters").addEventListener("click", () =>{
    $("#image__meme").style.filter = "none"
})

// Button download
const downloadMeme = () => {
    domtoimage.toBlob($(".container__memes__edit")).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};
$("#button__download").addEventListener('click', downloadMeme)

// _________ ASIDE - Text panel
// Text top
$("#input__text__top").addEventListener("input", () =>{
    $(".top__text").innerText = $("#input__text__top").value
})
// Text top - disappear
$("#check__text__top").addEventListener("change", () =>{
    if ($("#check__text__top").checked){
        $(".top__text").classList.add("hidden")
    } else{
        $(".top__text").classList.remove("hidden")
    }
})
// Text bottom
$("#input__text__bottom").addEventListener("input", () =>{
    $(".bottom__text").innerText = $("#input__text__bottom").value
})
// Text bottom - disappear
$("#check__text__bottom").addEventListener("change", () =>{
    if ($("#check__text__bottom").checked){
        $(".bottom__text").classList.add("hidden")
    } else{
        $(".bottom__text").classList.remove("hidden")
    }
})
// EVENT - text top AND text - color and backgroundColor
$("#color__text").addEventListener("input", () =>{
    $(".top__text").style.color = $("#color__text").value
    $(".bottom__text").style.color = $("#color__text").value
    $("#color__text__span").innerText = ($("#color__text").value).toUpperCase()
    $("#color__text").style.backgroundColor = $("#color__text").value
})
$("#bg__font").addEventListener("input", () =>{
    $(".top__text").style.backgroundColor = $("#bg__font").value
    $(".bottom__text").style.backgroundColor = $("#bg__font").value
    $("#bg__font__span").innerText = ($("#bg__font").value).toUpperCase()
    $("#bg__font").style.backgroundColor = $("#bg__font").value
})
// Transparent background
$("#check__transparent").addEventListener("change", () =>{
    if ($("#check__transparent").checked){
        $(".top__text").style.backgroundColor = "transparent"
        $(".top__text").style.position = "absolute"
        $(".top__text").style.top = "0"
        $(".bottom__text").style.backgroundColor = "transparent"
        $(".bottom__text").style.position = "absolute"
        $(".bottom__text").style.bottom = "0"
    } else{
        $(".top__text").style.backgroundColor = $("#bg__font").value
        $(".bottom__text").style.backgroundColor = $("#bg__font").value
        $(".top__text").style.position = "sticky"
    }
})
// Font
$(".select__font").addEventListener("click", () =>{
    $(".top__text").style.fontFamily = $(".select__font").value
    $(".bottom__text").style.fontFamily = $(".select__font").value
})
$(".size").addEventListener("change", () =>{
    $(".top__text").style.fontSize = `${$(".size").value}px`
    $(".bottom__text").style.fontSize = `${$(".size").value}px`
})
$(".left").addEventListener("click", () =>{
    $(".top__text").style.textAlign = "left"
    $(".bottom__text").style.textAlign = "left"
})
$(".center").addEventListener("click", () =>{
    $(".top__text").style.textAlign = "center"
    $(".bottom__text").style.textAlign = "center"
})
$(".right").addEventListener("click", () =>{
    $(".top__text").style.textAlign = "right"
    $(".bottom__text").style.textAlign = "right"
})

// Outline
// None
$(".btn__none").addEventListener("click", () =>{
    $(".top__text").style.textShadow = "none"
    $(".bottom__text").style.textShadow = "none"
})
// Clear
$(".btn__clear").addEventListener("click", () =>{
    $(".top__text").style.textShadow = `2px 2px #F0F0F0 , -2px 2px #F0F0F0, 2px -2px #F0F0F0, -2px -2px #F0F0F0`
    $(".bottom__text").style.textShadow = `2px 2px #F0F0F0 , -2px 2px #F0F0F0, 2px -2px #F0F0F0, -2px -2px #F0F0F0`
})
// Darken
$(".btn__darken").addEventListener("click", () =>{
    $(".top__text").style.textShadow = `2px 2px #000000 , -2px 2px #000000, 2px -2px #000000, -2px -2px #000000`
    $(".bottom__text").style.textShadow = `2px 2px #000000 , -2px 2px #000000, 2px -2px #000000, -2px -2px #000000`
})
// Spacing
$("#spacing").addEventListener("input", () =>{
    $(".top__text").style.padding = `${$("#spacing").value}px`
    $(".bottom__text").style.padding = `${$("#spacing").value}px`
})
// Leading
$(".leading").addEventListener("input", () =>{
    $(".top__text").style.lineHeight = $(".leading").value
    $(".bottom__text").style.lineHeight = $(".leading").value
})