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
    for (var i = 9; i < 18; i++){
        /* Created variable i, starting at 9am until 1700 (military time) If i is less than 17, add 1 and go until 17. 
        This creates a way for me to get the value stored in the individual ids.*/

        // using corresponding key in the localStorage for the input id.
        console.log(localStorage.getItem(i));
        console.log($(`#${i}`))
        /*the template literal (backtick) allows you to put javascript directly inside of a string.*/
        $(`#${i}`).val(localStorage.getItem(i))
    }
}
storeEvent()
// timeblocks.val(localStorage.setItem());

// $(".hour").val(localStorage.getItem(""));


/* Need to insert the text area value and the time label
 */
