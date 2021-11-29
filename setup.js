/* 
Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true, 
    'remove-indent': true, 
    'left-trim': true, 
    'right-trim': true
});
*/

window.onload = function(e){ 
// Display table of contents with menu button
document.getElementById("menu-x").onclick = function () {
    document.getElementById("toc").classList.toggle("hidden");
    document.getElementById("menu-hamburger").classList.toggle("hidden");
    document.getElementById("menu-x").classList.toggle("hidden");
};
document.getElementById("menu-hamburger").onclick = function () {
    document.getElementById("toc").classList.toggle("hidden");
    document.getElementById("menu-hamburger").classList.toggle("hidden");
    document.getElementById("menu-x").classList.toggle("hidden");
};
}