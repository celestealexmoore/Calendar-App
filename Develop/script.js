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
    el.addEventListener("click", setItemEvent)
});

// console.log("you submitted", userInput, hourId); <= Not sure how to code this properly.

// Function that stores the input to the localStorage.
function setItemEvent(event) {
    var userInput = $(this).siblings("input").val();
    var hourId = $(this).siblings("input").attr("id");
 
    localStorage.setItem(hourId, userInput);
}; 

// Function that gets and displays input from LocalStorage.
function storeEvent(event) {
    var hourId = $(this).siblings("input").attr("id");
    
    localStorage.getItem(hourId);
    $(this).siblings("input[type='text']").val();

}

// timeblocks.val(localStorage.setItem());

// $(".hour").val(localStorage.getItem(""));


/* Need to insert the text area value and the time label
 */
