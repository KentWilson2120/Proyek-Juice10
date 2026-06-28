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

// Format rupiah
function formatRupiah(number) {
    return "Rp " + number.toLocaleString("id-ID");
}

// Hitung total
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

productSelect.addEventListener("change", calculateTotal);
quantityInput.addEventListener("input", calculateTotal);

// Submit form
purchaseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = productSelect.value;
    const quantity = parseInt(quantityInput.value) || 1;

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");

    // Error
    nameError.textContent = "";
    phoneError.textContent = "";

    let hasError = false;

    // Validasi produk
    if (!product) {
        alert("Please select a product!");
        return;
    }

    // Validasi nama
    if (!isNaN(fullName)) {
        nameError.textContent = "❌ Name must contain letters only!";
        hasError = true;
    }

    // Validasi nomor HP
    if (isNaN(phone)) {
        phoneError.textContent = "❌ Phone number must contain numbers only!";
        hasError = true;
    }

    if (hasError) return;

    // Hitung total dan ada tanggal
    const total = prices[product] * quantity;
    const today = new Date();

    // Tampilkan receipt
    receiptDetails.innerHTML = `
        <h2>Order Receipt</h2>

        <table class="receipt-table">
            <tr>
                <th colspan="2">Customer Information</th>
            </tr>
            <tr>
                <td>Full Name</td>
                <td>${fullName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>${phone}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>${address}</td>
            </tr>
        </table>

        <table class="receipt-table">
            <tr>
                <th colspan="2">Order Details</th>
            </tr>
            <tr>
                <td>Product</td>
                <td>${product}</td>
            </tr>
            <tr>
                <td>Quantity</td>
                <td>${quantity}</td>
            </tr>
            <tr>
                <td>Unit Price</td>
                <td>${formatRupiah(prices[product])}</td>
            </tr>
            <tr>
                <td>Total Price</td>
                <td>${formatRupiah(total)}</td>
            </tr>
            <tr>
                <td>Order Date</td>
                <td>${today.toLocaleString("id-ID")}</td>
            </tr>
        </table>

        <h3 class="thank-you">Thank You for Your Order!</h3>
    `;

    receiptSection.style.display = "block";

    receiptSection.scrollIntoView({
        behavior: "smooth"
        
    });

    // Reset form
    purchaseForm.reset();

    // Reset total
    totalBox.textContent = "Rp 0";
});

// Total
calculateTotal();
