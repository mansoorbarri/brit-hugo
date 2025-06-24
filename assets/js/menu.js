// List menu items
const listItems = document.querySelectorAll('ul li');

// Function to set the active menu item
function setActiveMenuItem(itemToActivate) {
    listItems.forEach((item) => {
        item.classList.remove('active');
        item.classList.add('unactive');
    });

    itemToActivate.classList.remove('unactive');
    itemToActivate.classList.add('active');
}

// Initial setup: set the first item as active
if (listItems.length > 0) {
    setActiveMenuItem(listItems[0]);
}

// Optional: If you want clicking to also make an item active
listItems.forEach((item) => {
    item.addEventListener('click', () => {
        setActiveMenuItem(item);
    });
});