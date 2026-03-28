 //section for stationary items form
        const itemsList = document.getElementById('Items-list');
        const quantityInput = document.getElementById('quantity');
        const totalInput = document.getElementById('total');
        const unitPriceInput = document.getElementById('unit_price');
        const discountInput = document.getElementById('discount');
        const Discount = 0.1; //10%
        const items = {
            'item1': 10,
            'item2': 50,
            'item3': 120,
            'item4': 30
        };
        function unitPrice() {
            const selectedItem = itemsList.value;
            if (items[selectedItem]) {
                unitPriceInput.value = `₹${items[selectedItem]}`;
            } else {
                unitPriceInput.value = '';
            }
        }
        function applyDiscount() {
            const quantity = parseInt(quantityInput.value);
            if (quantity > 20) {
                discountInput.value = `10%`;
            } else {
                discountInput.value = '';
            }
        }
        function calculateTotal() {
            const selectedItem = itemsList.value;
            const quantity = parseInt(quantityInput.value);
            if (items[selectedItem]) {
                if(quantity > 20) {
                    const totalPrice = items[selectedItem] * quantity;
                    const discountedPrice = totalPrice - (totalPrice * Discount);
                    totalInput.value = `₹${discountedPrice}`;
                } else {
                    const totalPrice = items[selectedItem] * quantity;
                    totalInput.value = `₹${totalPrice}`;
                }
            } else {
                totalInput.value = '';
            }
        }
        //section for printing services form
        const pagesInput = document.getElementById('Number-of-pages');
        const printTypeSelect = document.getElementById('Print-type');
        const urgentDeliveryCheckbox = document.getElementById('urgent-delivery');
        const subtotalInput = document.getElementById('subtotal');
        const discountInputPrinting = document.getElementById('discount-printing');
        const totalInputPrinting = document.getElementById('total-printing');
        const printPricesPerPage = {
            'print1': 50, // Black and White
            'print2': 10  // Color
        };
        function calculateTotalPrinting() {
            const pages = parseInt(pagesInput.value);
            const printType = printTypeSelect.value;
            const isUrgent = urgentDeliveryCheckbox.checked;
            let subtotal = 0;
            if (printPricesPerPage[printType]) {
                subtotal = pages * printPricesPerPage[printType];
            }
            let discount = 0;
            if (pages > 100) {
                discount = subtotal * 0.1; // 10% discount for more than 100 pages
            }
            let total = subtotal - discount;
            if (isUrgent) {
                total += 50; // Urgent delivery fee
            }
            subtotalInput.value = `₹${subtotal.toFixed(2)}`;
            discountInputPrinting.value = `₹${discount.toFixed(2)}`;
            totalInputPrinting.value = `₹${total.toFixed(2)}`;
        }
        //section for combined calculation and tax
        const combinedTotalInput = document.getElementById('combined-total');
        const taxInput = document.getElementById('tax');
        const finalTotalInput = document.getElementById('final-total');
        function calculateFinalTotal() {
            const stationaryTotal = parseFloat(totalInput.value.replace('₹', '')) || 0;
            const printingTotal = parseFloat(totalInputPrinting.value.replace('₹', '')) || 0;
            const combinedTotal = stationaryTotal + printingTotal;
            const tax = combinedTotal * 0.1; // 10% tax
            const finalTotal = combinedTotal + tax + 50; // Adding delivery charge
            combinedTotalInput.value = `₹${combinedTotal.toFixed(2)}`;
            taxInput.value = `₹${tax.toFixed(2)}`;
            finalTotalInput.value = `₹${finalTotal.toFixed(2)}`;
        }
    // order sumary section
        const customerNameInput = document.getElementById('customer-name');
        const invoiceTableBody = document.getElementById('invoice-table');
        const customerNameDisplay = document.getElementById('customer-name-cell');
        const orderDateDisplay = document.getElementById('order-date-cell');
        const orderIdDisplay = document.getElementById('order-id-cell');
        const itemNameDisplay = document.getElementById('item-name-cell');
        const quantityDisplay = document.getElementById('item-quantity-cell');
        