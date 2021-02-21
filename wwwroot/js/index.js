$("<span></span>").attr("id", "Gram").text("My Gram").appendTo("#MainContainerDiv");
$("<button></button>").attr("id", "LoginButton").text("Log In").appendTo("#MainContainerDiv");
$("<button></button>").attr("id", "SignupButton").text("Sign Up").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image1").text("Image 1").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image2").text("Image 2").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image3").text("Image 3").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image4").text("Image 4").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image5").text("Image 5").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "About").text("About").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Blog").text("Blog").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Jobs").text("Jobs").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Help").text("Help").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "English").text("English").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "2021").text("2021").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "MyGram").text("MyGram").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("#SignupButton").click(function () {
    $("<span></span>").attr("id", "User").text("User").appendTo("#MainContainerDiv");
    $("</br>").appendTo("#MainContainerDiv");
    $("<span></span>").attr("id", "Password").text("Password").appendTo("#MainContainerDiv");
});
$("#LoginButton").click(function () {
    alert("You have successfully logged in!");
});