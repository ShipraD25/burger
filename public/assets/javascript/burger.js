$(".create-form").on("submit", function() {
    event.preventDefault();
    console.log("click");
    // adding burgers to the db
    // get the burger name from the input
    // call ajax to the backend (controller)
    // then when back reload the page

    var burger_name = $("#burger").val();
    //console.log("burgername");
    $.post("/api/burgers", { "burger_name": burger_name }).then(function(data) {
        console.log(data);
        location.reload();

    })
})
$(".devour").on("click", function() {
    event.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
    $.ajax({
        url: "/api/burgers/" + id,
        method: "put"
    }).then(function(data) {
        console.log(data);
        location.reload();
    })

});