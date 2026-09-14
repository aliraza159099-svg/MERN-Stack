// ================================
// Product Order Calculator
// ================================

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 85000, stock: 5 },
  { id: 2, name: "Mouse", category: "Accessories", price: 1500, stock: 0 },
  { id: 3, name: "Keyboard", category: "Accessories", price: 3500, stock: 10 },
  { id: 4, name: "Monitor", category: "Electronics", price: 25000, stock: 3 },
  { id: 5, name: "USB Cable", category: "Accessories", price: 700, stock: 15 },
];

// --------------------------------------------------
// PART 1: Display only available products (stock > 0)
// --------------------------------------------------
function showAvailableProducts() {
  const available = products.filter((p) => p.stock > 0);

  console.log("=== Available Products ===");
  available.forEach((p) => {
    console.log(
      `ID: ${p.id} | ${p.name} (${p.category}) - Rs. ${p.price} | Stock: ${p.stock}`
    );
  });
  console.log(""); // blank line for spacing

  return available;
}

// --------------------------------------------------
// PART 2: Calculate subtotal, discount, and final total
// --------------------------------------------------
// cartItems format: [{ id: 1, quantity: 2 }, { id: 3, quantity: 1 }]
function calculateOrder(cartItems) {
  let subtotal = 0;
  const itemDetails = [];

  cartItems.forEach((item) => {
    const product = products.find((p) => p.id === item.id);

    if (!product) {
      console.log(`Warning: Product with ID ${item.id} not found.`);
      return;
    }

    const lineTotal = product.price * item.quantity;
    subtotal += lineTotal;

    itemDetails.push({
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      lineTotal: lineTotal,
    });
  });

  // Apply 10% discount if subtotal > 50,000
  const discountRate = subtotal > 50000 ? 0.1 : 0;
  const discount = subtotal * discountRate;
  const finalTotal = subtotal - discount;

  return {
    itemDetails,
    subtotal,
    discount,
    discountRate,
    finalTotal,
  };
}

// --------------------------------------------------
// PART 3: Display invoice/order summary
// --------------------------------------------------
function printInvoice(cartItems) {
  const order = calculateOrder(cartItems);

  console.log("========================================");
  console.log("               ORDER INVOICE             ");
  console.log("========================================");

  order.itemDetails.forEach((item) => {
    console.log(
      `${item.name.padEnd(12)} x${item.quantity}  @Rs.${item.price}  = Rs.${item.lineTotal}`
    );
  });

  console.log("----------------------------------------");
  console.log(`Subtotal:        Rs. ${order.subtotal}`);
  console.log(
    `Discount (${order.discountRate * 100}%):   Rs. ${order.discount}`
  );
  console.log(`Final Total:     Rs. ${order.finalTotal}`);
  console.log("========================================\n");
}

// --------------------------------------------------
// DEMO / TEST RUN
// --------------------------------------------------
showAvailableProducts();

const cart = [
  { id: 1, quantity: 1 }, // Laptop
  { id: 3, quantity: 2 }, // Keyboard x2
];

printInvoice(cart);