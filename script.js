const cartCount = document.getElementById("cartCount");
let count = 0;

const updateCart = () => {
  cartCount.textContent = String(count);
};

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    updateCart();

    const productName = button.dataset.product || "Item";
    button.textContent = `${productName} added`;
    button.disabled = true;

    setTimeout(() => {
      button.textContent = "Add";
      button.disabled = false;
    }, 900);
  });
});

updateCart();
