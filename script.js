// Daftar harga produk
const prices = {
    "Espresso": 18000,
    "Americano": 22000,
    "Cappuccino": 28000,
    "Latte": 30000,
    "Matcha": 32000,
    "Red Velvet": 35000,
    "Nasi Goreng Telur": 25000,
    "Nasi Goreng Kampung": 30000,
    "Pisang Coklat": 18000,
    "Kentang Goreng": 15000
};

const productSelect = document.getElementById("productSelect");
const quantityInput = document.getElementById("quantity");
const totalBox = document.querySelector(".total-box");
const purchaseForm = document.getElementById("purchaseForm");
const receiptSection = document.getElementById("receiptSection");
const receiptDetails = document.getElementById("receiptDetails");

// Format Rupiah
function formatRupiah(number) {
    return "Rp " + number.toLocaleString("id-ID");
}

// Hitung total harga
function calculateTotal() {
    const product = productSelect.value;
    const quantity = parseInt(quantityInput.value) || 0;

    if (prices[product]) {
        const total = prices[product] * quantity;
        totalBox.textContent = formatRupiah(total);
    } else {
        totalBox.textContent = "Rp 0";
    }
}

// Event saat produk atau quantity berubah
productSelect.addEventListener("change", calculateTotal);
quantityInput.addEventListener("input", calculateTotal);

// Submit form
purchaseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = productSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (!product) {
        alert("Please select a product!");
        return;
    }

    const total = prices[product] * quantity;

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const today = new Date();

    receiptDetails.innerHTML = `
        <h2>Order Receipt</h2>
        <hr>

        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Order Details</h3>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Unit Price:</strong> ${formatRupiah(prices[product])}</p>
        <p><strong>Total Price:</strong> ${formatRupiah(total)}</p>

        <hr>
        <p><strong>Order Date:</strong> ${today.toLocaleString("id-ID")}</p>

        <h3>Thank You for Your Order!</h3>
    `;

    receiptSection.style.display = "block";

    // Scroll ke receipt
    receiptSection.scrollIntoView({
        behavior: "smooth"
    });
});

// Hitung total awal
calculateTotal();

