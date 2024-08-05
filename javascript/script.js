document.addEventListener("DOMContentLoaded", function () {
    const products = {
        categories: [
            {
                title: "NECKLACE",
                price: "Rs 20,000",
                image: "https://img.freepik.com/premium-photo/table-with-vase-vase-with-snowflakes-it_1305056-36.jpg"
            },
            {
                title: "RINGS",
                price: "Rs 8,000",
                image: "https://img.freepik.com/premium-photo/indian-traditional-bangles-design_1264451-113.jpg?w=740"
            },
            {
                title: "PENDANTS",
                price: "Rs 4,500",
                image: "https://img.freepik.com/premium-photo/gold-silver-jewelry-jewelry-display-stand_1264451-97.jpg?w=740"
            },
            {
                title: "NECKLACE",
                price: "Rs 42,000",
                image: "https://img.freepik.com/premium-photo/red-necklace-with-gold-beads-gold-chain_752325-32664.jpg?w=740"
            },
            {
                title: "BANGLE",
                price: "Rs 40,000",
                image: "images/image4.jpg"
            },
            {
                title: "EARRINGS",
                price: "Rs 8,000",
                image: "https://img.freepik.com/free-photo/side-view-pair-silver-diamond-earrings-with-emerald-black-wall-black_140725-12860.jpg?t=st=1722850583~exp=1722854183~hmac=ce7d9cb69e3fd3168550937eb0c9262b3e92c67aba2488e03758a278c277cd4a&w=360"
            },
            {
                title: "BRACELET",
                price: "Rs 12,000",
                image: "https://img.freepik.com/premium-photo/empty-bracelet-velvet-display_1305056-27831.jpg?w=740"
            },
           
            {
                title: "BRACELET",
                price: "Rs 18,000",
                image: "https://img.freepik.com/premium-photo/collection-gold-bangles-bracelets_752325-18417.jpg?w=740"
            }
        ],
        bestsellers: [
            {
                title: "RINGS",
                price: "Rs 8,000",
                image: "images/image1.jpg"
            },
            {
                title: "PENDANTS",
                price: "Rs 4,500",
                image: "images/image2.jpg"
            },
            {
                title: "EARRINGS",
                price: "Rs 12,000",
                image: "images/image3.jpg"
            },
            {
                title: "BANGLES",
                price: "Rs 15,000",
                image: "images/image4.jpg"
            }
        ],
        offers: [
            {
                title: "BRACELET",
                price: "Rs 18,000",
                image: "images/image3.jpg"
            },
            {
                title: "BANGLE",
                price: "Rs 40,000",
                image: "images/image4.jpg"
            },
            {
                title: "RINGS",
                price: "Rs 6,000",
                image: "images/image1.jpg"
            },
            {
                title: "NECKLACE",
                price: "Rs 35,000",
                image: "images/image2.jpg"
            }
        ]
    };

    function renderProducts(category) {
        const container = document.getElementById(`${category}-content`);
        container.innerHTML = "";
        products[category].forEach(product => {
            const productCard = `
                <div class="col-md-3">
                    <div class="card mb-3">
                    <div class="hovereffect blackwhite">
                        <img src="${product.image}" class="card-img-top w-100" alt="${product.title}">
                        </div>

                        <div class="card-body text-center">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">Starting from <br>${product.price}</p>
                        </div>
                        <div class="icon-container">
                            <a href="#" class="text-dark"><i class="bi bi-heart"></i></a>
                            <a href="#" class="text-dark"><i class="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML("beforeend", productCard);
        });
    }

    // Initial rendering
    renderProducts("categories");

    // Event listeners for tab switching
    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener("shown.bs.tab", function (event) {
            const category = event.target.getAttribute('aria-controls');
            renderProducts(category);
        });
    });
});











document.addEventListener("DOMContentLoaded", function () {
    const products = {
        gold: [
            { title: "Gold Ring", price: "Rs 8,000", image: "images/image1.jpg" },
            { title: "Gold Necklace", price: "Rs 20,000", image: "images/image3.jpg" }
        ],
        silver: [
            { title: "Silver Bracelet", price: "Rs 12,000", image: "images/image4.jpg" },
            { title: "Silver Pendant", price: "Rs 4,500", image: "images/image2.jpg" }
        ],
        diamond: [
            { title: "Diamond Earrings", price: "Rs 15,000", image: "images/image3.jpg" },
            { title: "Diamond Necklace", price: "Rs 42,000", image: "images/image3.jpg" }
        ],
        gift: [
            { title: "Gift Article 1", price: "Rs 5,000", image: "images/image4.jpg" },
            { title: "Gift Article 2", price: "Rs 7,000", image: "images/image2.jpg" }
        ]
    };

    function renderModalContent(category) {
        const modalBody = document.querySelector("#product-grid");
        modalBody.innerHTML = "";

        products[category].forEach(product => {
            const productCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">Price: ${product.price}</p>
                        </div>
                    </div>
                </div>
            `;
            modalBody.insertAdjacentHTML("beforeend", productCard);
        });
    }

    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            renderModalContent(category);
        });
    });
});
