// these functions open and close the contact form
function openForm() 
{
    document.getElementById("myForm").style.display = "block";
}

function closeForm() 
{
    document.getElementById("myForm").style.display = "none";
}

// the function, showSlides(), displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// this function changes the slide when the left or right arrows are clicked 
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

// this function changes the slide when the dots are clicked
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    // store all elements with classname "mySlides" and store in slides array
    var slides = document.getElementsByClassName("mySlides");
    // store all elements with classname "dot", store in dots array
    var dots = document.getElementsByClassName("dot");

    // if n > than slides.length, then slideIndex = 1
    if(n > slides.length)
    {
        slideIndex = 1;
    }
    // if n < 1, slideIndex = slides.length
    if(n < 1)
    {
        slideIndex = slides.length;
    }

    // loop through slides array and set display to none
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    // loop through dot array and remove active to remove styling
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block";
    // adds the active styling to the dot associated with the image
    dots[slideIndex - 1].className += " active";
}

// The following code will close the contact form when the user clicks off of it
document.addEventListener("click", function(event) // add event listener
{
    // if the click happens on the cancel button OR anywhere outside of the contact form
    //  AND the click does not happen on any element in the contact class, then call closeForm()
    if(event.target.matches(".cancel") || !event.target.closest(".form-popup")
        && !event.target.closest(".popUpButton") && !event.target.closest(".contact"))
    {
        closeForm()
    }
}, false)
