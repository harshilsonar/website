fetch('http://localhost:3000/products') 
    .then(response => response.json())
    .then(data => {
        const productcontainer = document.getElementById('productcontainer');

        const productsHTML = data.map(product => `
            <div class="product-card">
            <a href='description.html?title=${encodeURIComponent(product.title)}&image=${encodeURIComponent(product.images[0])}&name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}'>
                <div class="product-image-container">
                    <img src="${product.images}" alt="${product.title}" class="product-image">
                </div>
                </a>
                <div class="product-details">
                <p class = "product-title">${product.name}</p>
                        <p class="product-name">${product.title}</p>
                    
                    <p class="product-price">${product.price}</p>
                </div>
            </div>
        `).join('');
          
        productcontainer.innerHTML = productsHTML;
    })
    .catch(error => console.error('Error fetching products:', error));
    fetch('http://localhost:3000/products1') 
    .then(response => response.json())
    .then(data => {
        const productcontainer1 = document.getElementById('productcontainer1');

        const productsHTML1 = data.map(product1 => `
            <div class="product-card1">
                        <a href='description.html?title=${encodeURIComponent(product1.title)}&image=${encodeURIComponent(product1.images[0])}&name=${encodeURIComponent(product1.name)}&price=${encodeURIComponent(product1.price)}'>
                <div class="product-image-container1">
                    <img src="${product1.images}" alt="${product1.title}" class="product-image1">
                </div>
                </a>
                <div class="product-details1">
                <p class = "product-title1">${product1.name}</p>
                        <p class="product-name1">${product1.title}</p>
                    
                    <p class="product-price1">${product1.price}</p>
                </div>
            </div>
        `).join('');
          
        productcontainer1.innerHTML = productsHTML1;
    })
    .catch(error => console.error('Error fetching products:', error));
    fetch('http://localhost:3000/products2') 
    .then(response => response.json())
    .then(data => {
        const productcontainer2 = document.getElementById('productcontainer2');

        const productsHTML2 = data.map(product2 => `
            <div class="product-card2">
                        <a href='description.html?title=${encodeURIComponent(product2.title)}&image=${encodeURIComponent(product2.images[0])}&name=${encodeURIComponent(product2.name)}&price=${encodeURIComponent(product2.price)}'>
                <div class="product-image-container2">
                    <img src="${product2.images}" alt="${product2.title}" class="product-image2">
                </div>
                </a>
                <div class="product-details2">
                <p class = "product-title2">${product2.name}</p>
                        <p class="product-name2">${product2.title}</p>
                    
                    <p class="product-price2">${product2.price}</p>
                </div>
            </div>
        `).join('');
          
        productcontainer2.innerHTML = productsHTML2;
    })
    .catch(error => console.error('Error fetching products:', error));
    fetch('http://localhost:3000/products3') 
    .then(response => response.json())
    .then(data => {
        const productcontainer3 = document.getElementById('productcontainer3');

        const productsHTML3 = data.map(product3 => `
            <div class="product-card3">
                        <a href='description.html?title=${encodeURIComponent(product3.title)}&image=${encodeURIComponent(product3.images[0])}&name=${encodeURIComponent(product3.name)}&price=${encodeURIComponent(product3.price)}'>

                <div class="product-image-container3">
                    <img src="${product3.images}" alt="${product3.title}" class="product-image3">
                </div>
                </a>
                <div class="product-details3">
                <p class = "product-title3">${product3.name}</p>
                        <p class="product-name3">${product3.title}</p>
                    
                    <p class="product-price3">${product3.price}</p>
                </div>
            </div>
        `).join('');
          
        productcontainer3.innerHTML = productsHTML3;
    })
    .catch(error => console.error('Error fetching products:', error));
    fetch('http://localhost:3000/products4') 
    .then(response => response.json())
    .then(data => {
        const productcontainer4 = document.getElementById('productcontainer4');

        const productsHTML4 = data.map(product4 => `
            <div class="product-card4">
                <a href='description.html?title=${encodeURIComponent(product4.title)}&image=${encodeURIComponent(product4.images[0])}&name=${encodeURIComponent(product4.name)}&price=${encodeURIComponent(product4.price)}'>
                <div class="product-image-container4">
                    <img src="${product4.images}" alt="${product4.title}" class="product-image4">
                </div>
                </a>
                <div class="product-details4">
                <p class = "product-title4">${product4.name}</p>
                        <p class="product-name4">${product4.title}</p>
                    
                    <p class="product-price4">${product4.price}</p>
                </div>
            </div>
        `).join('');
          
        productcontainer4.innerHTML = productsHTML4;
    })
    .catch(error => console.error('Error fetching products:', error));
    

    document.getElementById('add-to-bag').addEventListener('click', function(event) {
        event.preventDefault(); 
    
        let productDetails = {
            title: document.getElementById('productTitle').innerText,
            price: document.getElementById('productPrice').innerText,
            image: document.getElementById('productImage').src,
            name: document.getElementById('productName').innerText
        };
    
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productDetails);
        localStorage.setItem('cart', JSON.stringify(cart));
    
        window.location.href = 'cart.html';
    });

    const otpButton = document.getElementById('otp');
    const phoneInput = document.getElementById('phoneInput');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    otpButton.onclick = function() {
      const phoneNumber = phoneInput.value;
      
      if (!validatePhoneNumber(phoneNumber)) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        errorMessage.innerHTML = 'Please enter 10 digits.';
        alert('Please enter a valid 10-digit phone number.');
      } else {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.innerHTML = 'Login successful!';
        alert('Sign in successful!');
      }
    }
    
    function validatePhoneNumber(phoneNumber) {
      return phoneNumber.length === 10 && !isNaN(Number(phoneNumber));
    }
    
    
    