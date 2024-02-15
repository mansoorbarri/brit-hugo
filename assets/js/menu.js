// List menu items
const listItems = document.querySelectorAll('.menu li');

// Add event listeners to each list item
listItems.forEach((item, index) => {
    const spanElement = item.querySelector('span'); // Select the span element within each list item

    if (index === 0) {
        item.classList.add('active');
        if (spanElement) {
            spanElement.classList.add('active-border');
        }
    } else {
        item.classList.add('unactive'); // Add 'unactive' class to other items
        if (spanElement) {
            spanElement.classList.add('unactive-border');
        }
    }

    item.addEventListener('mouseover', () => {
        // Add 'unactive' class to all items except the hovered one
        listItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.add('unactive');
                const otherSpan = otherItem.querySelector('span');
                if (otherSpan) {
                    otherSpan.classList.add('unactive-border');
                    otherSpan.classList.remove('active-border');
                }
            }
        });

        // Remove 'unactive' class from the hovered item
        item.classList.remove('unactive');

        // Add 'active' class to the hovered item
        item.classList.add('active');

        // Add 'active-border' class to the span within the hovered item
        if (spanElement) {
            spanElement.classList.add('active-border');
            spanElement.classList.remove('unactive-border');
        }
    });
});
