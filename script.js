const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add event listener for keypress
inputBox.addEventListener("keypress", function(event) {
    // Check if Enter key was pressed
    if (event.key === "Enter") {
        // Prevent default form submission behavior
        event.preventDefault();
        // Call the function to add todo items
        addTodos();
    }
});

function addTodos() {
    if(inputBox.value === '') {
        alert('Must add todo!!!');
    } else {
        // appending each todo from the input box
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // appending cross icon to the right of each todo list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    storeData();
}

// Add event listner for check/unchek todos
listContainer.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        storeData();
    } else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        storeData();
    }
}, false)



function storeData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showPreviousData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showPreviousData();