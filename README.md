# Eat-Da-Burger
This is a burger logger app made with MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern; uses Node and MySQL to query and route data in your app, and Handlebars to generate HTML.
This app lets users input the names of the burgers they'd like to eat.
Whenever a user submits a burger's name, it is displayed on the left side of the page waiting to be devoured.
Each of these burgers in the waiting area has a DEVOUR button which when clicked moves them to the list on the right side.
### App-Demo
![app-demo](https://media.giphy.com/media/lSIutXm4He2lX8C1oz/giphy.gif)

## Getting Started
#### These instructions will get you a copy of the project up and running on your local machine.
1. Clone the repository
2. Run nmp install 


## Built With
***Frontend***
- Html
- CSS
- Bootstrap
- Handlebars
- Javascript
- Jquery

***Backend***
- Nodejs
- Npmjs packages: 
- **express** to handle the prompt with the users, if you want to know more about it https://www.npmjs.com/package/express
- **body-parser** parses the incoming request bodies in a middleware before your handlers,available under the req.body property
- **mysql** for database
- ORM - Object Relational Mapping
- Heroku for deployment
## How this work? 
The burger.js file in the public folder gets the burger name that is entered by the user in the input field. 
It then makes an ajax call to the backenend (controller) and reloads the page when back.

### Code Snippet

```
$(".create-form").on("submit", function() {
    event.preventDefault();
    console.log("click");
     var burger_name = $("#burger").val();
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

```
In the backend controller contains a burger_controller.js file which contains different routes(GET, POST, PUT).These routes are used to pass information to and from the view and model objects. Snippet of PUT route is as follows
### Code Snippet

```
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

```
        




