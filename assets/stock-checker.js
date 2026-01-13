// Function to check the stock status from a given URL
async function checkStock(url) {
  try {
    const response = await fetch(url, { mode: "no-cors" });
    const text = await response.text();
    return text.includes("In Stock"); // Change the phrase as needed
  } catch (error) {
    console.error("Error fetching the page:", error);
    return false; // Assume not in stock on error
  }
}

// Function to display stock status badges
async function displayStockStatus() {
  const distributorLinks = {
    "Blackwoods": "{{ product.metafields.custom.blackwoods }}",
    "Total Tools": "{{ product.metafields.custom.total_tools }}",
    "Powermax Group": "{{ product.metafields.custom.powermax_group }}",
    "Riverina Sharpening": "{{ product.metafields.custom.riverina_sharpening }}",
    "National Welding": "{{ product.metafields.custom.national_welding }}",
    "Aims Industrial": "{{ product.metafields.custom.aims_industrial }}",
    "ACL Welding": "{{ product.metafields.custom.acl_welding }}",
    "Sedl Agencies": "{{ product.metafields.custom.sedl_agencies }}",
    "TradeTools": "{{ product.metafields.custom.tradetools }}",
    "General Tools": "{{ product.metafields.custom.general_tools }}",
    "BST Group": "{{ product.metafields.custom.bst_group }}",
    "Bendigo Saw": "{{ product.metafields.custom.bendigo_saw }}",
    "Orbimax": "{{ product.metafields.custom.orbimax }}",
    "Alphaweld": "{{ product.metafields.custom.alphaweld }}",
    "Prime Supplies": "{{ product.metafields.custom.prime_supplies }}",
    "Toolmart": "{{ product.metafields.custom.toolmart }}",
    "Arc-i Welding": "{{ product.metafields.custom.arc_i_welding }}",
  };

  for (const [distributor, url] of Object.entries(distributorLinks)) {
    if (url) {
      const isInStock = await checkStock(url);
      const stockStatusElement = document.querySelector(
        `.customer_site_url_btn[href="${url}"] .stock-status`
      );
      if (isInStock) {
        stockStatusElement.textContent = " (In stock)"; // Add your own styling as needed
        stockStatusElement.style.color = "green"; // Optional: Change text color to green
      } else {
        stockStatusElement.textContent = " (Out of stock)"; // Add your own styling as needed
        stockStatusElement.style.color = "red"; // Optional: Change text color to red
      }
    }
  }
}

// Run the stock status check after the page loads
window.addEventListener("load", displayStockStatus);
