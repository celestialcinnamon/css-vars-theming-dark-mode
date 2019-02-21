// document.documentElement is the DOM equivalent for the <html> tag
// classList is an array of classes in each element
// toggle() function removes or adds a class to an element

document.querySelector(".dark-toggler")
    .addEventListener('click', function(event) {
        document.documentElement.classList.toggle('dark');
    })
