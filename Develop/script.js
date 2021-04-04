// Today's date at the top//
$("#currentDay").text(moment().format("dddd [the] Do [of] MMMM, YYYY")); 

// color-coded timeblocks
var currentHour = new Date().getHours()
console.log('FORMAT()-->',currentHour);

var timeblocks = $(".hour")

timeblocks.each(function(index, el){
    if (currentHour > el.id){
        $(this).addClass("past")
    } else if (currentHour < el.id){
        $(this).addClass("future")
    } else {
   $(this).addClass("present")
    };


var myButton = document.getElementById("#saveBtn")

myButton.addEventListener("click", saveStuff);
function saveStuff(event){
    console.log("You clicked the save button.");


$(".hour").val(localStorage.setItem());

$(".hour").val(localStorage.getItem(""));
}

/* Need to insert the text area value and the time label
save_button.addEventListener("click", setLocalStorage); */
})