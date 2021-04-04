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
   $(this).addClass("present")}
})

// save button function
var saveBtns = $(".saveBtn")

saveBtns.each(function(index, el){
    el.addEventListener("click", function(toDoEvent){
        console.log("you submitted", $(this))
});
    
function toDoEvent(event) {
    var userInput = $(this).siblings("input").val().trim();
    var hourId = $(this).siblings("input").attr("id");
 
    localStorage.setItem(hourId, userInput);

}; 

$(".saveBtns").on("click", toDoEvent);

});
// timeblocks.val(localStorage.setItem());

// $(".hour").val(localStorage.getItem(""));


/* Need to insert the text area value and the time label
 */
