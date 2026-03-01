async function comparePrice() {
  const query = document.getElementById("search").value;
  if (!query) {
    alert("Please enter a product name");
    return;
  }

  document.getElementById("results").innerHTML = "";
  document.getElementById("loading").classList.remove("hidden");

  // Fake loading delay for better UX
  setTimeout(async () => {
    const res = await fetch(`/compare?q=${query}`);
    const data = await res.json();

    data.sort((a, b) => a.price - b.price);

    let output = "";
    data.forEach((item, index) => {
      output += `
        <div class="card ${index === 0 ? "cheapest" : ""}">
          <div class="store">${item.store}</div>
          <div class="price">₹${item.price}</div>
          ${index === 0 ? "<div class='best'>🏆 Best Deal</div>" : ""}
          <a class="buy-btn" href="${item.link}" target="_blank">Go to Store</a>
        </div>
      `;
    });

    document.getElementById("loading").classList.add("hidden");
    document.getElementById("results").innerHTML = output;
    document.getElementById("history-section").classList.remove("hidden");

  }, 800);
}
