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
    el.addEventListener("click", function(event){
        console.log("you clicked on...")
        console.log(event.target)
    
        var btnNum = event.target(".saveBtns").dataset.num;
        btnNum.addEventListener("click", setLocalStorage);

    })
})



// timeblocks.val(localStorage.setItem());

// $(".hour").val(localStorage.getItem(""));


/* Need to insert the text area value and the time label
 */
