// var previousPage = document.querySelector('.homePage');


// function viewPage(event) {
//     console.log(previousPage);
//     previousPage.classList.add("hidden");
//     var buttonClass = event.target.getAttribute('class');
//     var classes = buttonClass.split(" ");
//     var Selector = classes[1];
//     var x = Selector.charAt(Selector.length - 1);
//     var Page = document.querySelector(".page-" + x);
//     Page.classList.remove("hidden");
//     previousPage = Page;
// }


var previousPage = document.querySelector('.page-1');
var previousButton = document.querySelector('.selector-1');

var Page1 = document.querySelector('.page-1');
var Page2 = document.querySelector('.page-2');
var Page3 = document.querySelector('.page-3');
var Page4 = document.querySelector('.page-4');
var Page5 = document.querySelector('.page-5');
var Page6 = document.querySelector('.page-6');

var Button1 = document.querySelector('.selector-1');
var Button2 = document.querySelector('.selector-2');
var Button3 = document.querySelector('.selector-3');
var Button4 = document.querySelector('.selector-4');
var Button5 = document.querySelector('.selector-5');
var Button6 = document.querySelector('.selector-6');

function viewPage1() {
    previousPage.classList.add("hidden");
    Page1.classList.remove("hidden");
    previousPage = Page1;

    previousButton.classList.remove("onChose");
    Button1.classList.add("onChose");
    previousButton = Button1;
}

function viewPage2() {
    previousPage.classList.add("hidden");
    Page2.classList.remove("hidden");
    previousPage = Page2;

    previousButton.classList.remove("onChose");
    Button2.classList.add("onChose");
    previousButton = Button2;
}

function viewPage3() {
    previousPage.classList.add("hidden");
    Page3.classList.remove("hidden");
    previousPage = Page3;

    previousButton.classList.remove("onChose");
    Button3.classList.add("onChose");
    previousButton = Button3;
}

function viewPage4() {
    previousPage.classList.add("hidden");
    Page4.classList.remove("hidden");
    previousPage = Page4;

    previousButton.classList.remove("onChose");
    Button4.classList.add("onChose");
    previousButton = Button4;
}

var dropdown = document.querySelector('.dropdown');

function viewPage5() {
    Rotate();
    previousPage.classList.add("hidden");
    Page5.classList.remove("hidden");
    previousPage = Page5;

    previousButton.classList.remove("onChose");
    Button5.classList.add("onChose");
    previousButton = Button5;
    dropdown.classList.toggle("hidden");
}

var ok = document.querySelector('.ok');
function Rotate() {
    ok.classList.toggle("fa-caret-down");
    ok.classList.toggle("fa-caret-left");
}

function viewPage6() {
    previousPage.classList.add("hidden");
    Page6.classList.remove("hidden");
    previousPage = Page6;

    previousButton.classList.remove("onChose");
    Button6.classList.add("onChose");
    previousButton = Button6;
}

function Chose(e) {
    // Xóa class `fa-circle-dot` từ tất cả các div
    const allDivs = document.querySelectorAll(".more div");
    allDivs.forEach((div) => {
        div.classList.remove("Chose");
        const icon = div.querySelector("i");
        icon.classList.remove("fa-circle-dot");
        icon.classList.add("fa-circle");
    });
    e.classList.add("Chose");
    // Thêm class `fa-circle-dot` cho div hiện tại
    const icon = e.querySelector("i");
    icon.classList.remove("fa-circle");
    icon.classList.add("fa-circle-dot");

}

var previousIf = document.querySelector(".if1");

function viewPage51() {
    previousIf.classList.toggle("hidden");
    var if1 = document.querySelector(".if1");
    if1.classList.toggle("hidden");
    previousIf = if1;
}

function viewPage52() {
    previousIf.classList.toggle("hidden");
    var if2 = document.querySelector(".if2");
    if2.classList.toggle("hidden");
    previousIf = if2;
}

function viewPage53() {
    previousIf.classList.toggle("hidden");
    var if3 = document.querySelector(".if3");
    if3.classList.toggle("hidden");
    previousIf = if3;
}

function viewPage54() {
    previousIf.classList.toggle("hidden");
    var if4 = document.querySelector(".if4");
    if4.classList.toggle("hidden");
    previousIf = if4;
}