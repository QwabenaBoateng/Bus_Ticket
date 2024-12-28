document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ticketForm');
    const quantityInput = document.getElementById('quantity');
    const costDisplay = document.getElementById('costDisplay');

    // Fixed ticket price for all routes - adjust as needed
    const ticketPrice = 50; 

    // Function to calculate and display total cost
    function updateTotalCost() {
        const quantity = parseInt(quantityInput.value, 10);
        const total = quantity * ticketPrice;
        costDisplay.textContent = `${total} GHC`;
    }

    // Event listeners for real-time updates
    quantityInput.addEventListener('input', updateTotalCost);

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const route = document.getElementById('route').value;
        const quantity = quantityInput.value;
        const totalCost = parseInt(costDisplay.textContent.match(/\d+/)[0], 10);
        
        alert(`Booking Summary:\nRoute: ${route}\nTickets: ${quantity}\nTotal Cost: ${totalCost} GHC`);
        // Here you would typically send this data to a server for processing
    });

    // Initial calculation
    updateTotalCost();
});