const filterButton = document.getElementById("filterButton");
const productsList = document.getElementById("productsList");
const mainPage = document.getElementById("mainPage");
const detailsSection = document.getElementById("productDetails");

const laptops = [
	{id: 1, section: 'laptops', name: 'Dell XPS 13', price: '$1,299.99', display: '13.4-inch Full HD+ InfinityEdge (1920x1200)', processor: 'Intel Core i7-1365U (12th Gen, 10-core)', RAM: '16GB LPDDR5', storage: '512GB SSD', battery: 'upto 12 hrs', features: 'Thin and lightweight, Wi-Fi 6, backlit keyboard, Windows 11', colors: 'platinum silver, frost', images: ['1.png', '2.png', '3.png', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']}, 
	{id: 2, section: 'laptops', name: 'Apple MacBook Pro 14-inch', price: '$1,999.99', display: '14.2-inch Retina Display (3024x1964)', processor: 'Apple M2 Pro Chip (10-core)', RAM: '16GB Unified Memory', storage: '512GB SSD', battery: 'upto 17 hrs', features: 'Touch Bar, Thunderbolt 4, Magic Keyboard, macOS Ventura', colors: 'space grey, silver', images: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp', '9.webp']},
	{id: 3, section: 'laptops', name: 'HP Spectre x360 14', price: '$1,399.00', display: '13.5-inch OLED 3K2K (3000x2000)', processor: 'Intel Core i7-1165G7', RAM: '16GB DDR4', storage: '1TB SSD', battery: 'upto 10 hrs', features: '2-in-1 convertible, Bang & Olufsen speakers, Windows 11', colors: 'nightfall black, poseidon blue', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']},
	{id: 4, section: 'laptops', name: 'Lenovo ThinkPad X1 Carbon Gen 10', price: '$1,849.99', display: '14-inch WQXGA (2560x1600)', processor: 'Intel Core i7-1265U (12th Gen)', RAM: '16GB LPDDR5', storage: '512GB SSD', battery: 'upto 15 hrs', features: 'Military-grade durability, fingerprint reader, ThinkPad keyboard', colors: 'black', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']},
	{id: 5, section: 'laptops', name: 'Asus ROG Zephyrus G14', price: '$1,549.99', display: '14-inch WQHD (2560x1600), 120Hz', processor: 'AMD Ryzen 9 7940HS', RAM: '32GB DDR5', storage: '1TB SSD', battery: 'upto 10 hrs', features: 'NVIDIA GeForce RTX 4060, RGB Keyboard, Dolby Vision', colors: 'moonlight white, eclipse grey', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']}
];

const phones = [
	{id: 6, section: 'phones', name: 'Samsung Galaxy S23 Ultra', price: '$1,299.99', display: '6.8-inch QHD+ Dynamic AMOLED 2X', processor: 'Snapdragon 8 Gen 2', storage: '256GB, 512GB, 1TB', camera: '200MP (wide), 12MP (ultrawide), 10MP (telephoto)', battery: '5,000mAh, 45W fast charging', features: 'S Pen support, 120Hz refresh rate, IP68 water-resistant', colors: 'Phantom Black, Green, Cream, Lavender', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']}, 
	{id: 7, section: 'phones', name: 'Apple iPhone 15 Pro Max', price: '$1,599.99', display: '6.7-inch Super Retina XDR OLED', processor: 'A17 Pro Chip', storage: '128GB, 256GB, 512GB, 1TB', camera: 'Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)', battery: 'Up to 29 hours of video playback', features: '5G, Dynamic Island, Ceramic Shield, Face ID', colors: 'Natural Titanium, Blue Titanium, Black Titanium, White Titanium', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']}, 
	{id: 8, section: 'phones', name: 'Google Pixel 8 Pro', price: '$999.00', display: '6.7-inch LTPO OLED (3200x1440)', processor: 'Google Tensor G3', storage: '128GB, 256GB, 512GB', camera: '50MP (wide), 48MP (ultrawide), 48MP (telephoto)', battery: '5,050mAh, 30W fast charging', features: 'Android 14, AI-enhanced features, IP68 water-resistant', colors: 'Porcelain, Obsidian, Bay', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']}, 
	{id: 9, section: 'phones', name: 'OnePlus 11 5G', price: '$799.00', display: '6.7-inch Fluid AMOLED (3216x1440)', processor: 'Snapdragon 8 Gen 2', storage: '128GB, 256GB', camera: '50MP (wide), 48MP (ultrawide), 32MP (telephoto)', battery: '5,000mAh, 100W fast charging', features: 'OxygenOS, 120Hz refresh rate, Dolby Vision', colors: 'Titan Black, Eternal Green', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']}, 
	{id: 10, section: 'phones', name: 'Xiaomi 13 Pro', price: '$999.99', display: '6.73-inch AMOLED (3200x1440)', processor: 'Qualcomm Snapdragon 8 Gen 2', storage: '256GB, 512GB', camera: '50MP (wide), 50MP (ultrawide), 50MP (telephoto)', battery: '4,820mAh, 120W fast charging', features: 'Leica optics, MIUI 14, IP68 water-resistant', colors: 'Black, White, Green', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']}
];

const accessories = [
	{id: 11, section: 'accessories', name: 'Apple Airpods Pro (2nd Generation)', price: '$249.00', type: 'in-ear', battery: '6 hours of listening time, 30 hours with charging case', features: 'Active Noise Cancellation, Transparency mode, Adaptive Transparency', connectivity: 'Bluetooth 5.3', compatibility: 'iOS, Android', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']}, 
	{id: 12, section: 'accessories', name: 'Samsung Galaxy Buds 2 Pro', price: '$229.99', type: 'in-ear', battery: '5 hours of listening time, 18 hours with charging case', features: 'Active Noise Cancellation, 360 Audio, IPX7 water-resistant', connectivity: 'Bluetooth 5.3', compatibility: 'iOS, Android', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']}, 
	{id: 13, section: 'accessories', name: 'Logitech MX Master 3S Wireless Mouse', price: '$99.99', type: 'wireless', battery: '70 days of use on a full charge', features: 'Ergonomic design, 8 customizable buttons, 4000 DPI sensor', connectivity: 'Bluetooth, USB Receiver', compatibility: 'Windows, macOS, Linux', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']}, 
	{id: 14, section: 'accessories', name: 'Bose QuietComfort 45 Noise Cancelling Headphones', price: '$329.00', type: 'over-ear', battery: 'Up to 24 hours of listening time', features: 'Acoustic Noise Cancelling, Bluetooth, Comfortable fit', connectivity: 'Bluetooth 5.1', compatibility: 'iOS, Android', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']}
];

function renderProducts (product) {
	productsList.innerHTML = "";
	product.forEach(appendProductCard);
}

function appendProductCard(product) {
	const productCard = document.createElement('div');
	productCard.classList.add("product-card", "border", "rounded", "p-8", "m-2", "shadow-md");
	const productCardHTML = `
		<img src = "Assets/${product.section}/${product.id}/${product.images[0]}" alt = "${product.name}" class = "w-full object-contain rounded-md">
		<h3 class="mt-4 text-lg font-bold text-center text-mypurple">${product.name}</h3>
        <p class="text-center text-md text-mypurplelight">${product.price}</p>
        <button class="${product.section} bg-mypink text-white mt-2 px-4 py-2 rounded-md block mx-auto">View Details</button>
	`;
	productCard.innerHTML = productCardHTML;
	productsList.appendChild(productCard);
	const viewbtn = productCard.querySelector('button');
	viewbtn.onclick = () => showProductDetails(product);
}

function filterProductsList() {
	let selectedFilters = [];
	if (document.getElementById('laptop').checked) {
		selectedFilters.push('laptop');
	}
	if (document.getElementById('phone').checked) {
		selectedFilters.push('phone');
	}
	if (document.getElementById('accessory').checked) {
		selectedFilters.push('accessory');
	}
	let filteredProducts = [];
	if (selectedFilters.length === 0) {
		filteredProducts = [...laptops, ...phones, ...accessories];
	}
	else {
		if (selectedFilters.includes('laptop')) {
			filteredProducts = filteredProducts.concat(laptops);
		}
		if (selectedFilters.includes('phone')) {
			filteredProducts = filteredProducts.concat(phones);
		}
		if (selectedFilters.includes('accessory')) {
			filteredProducts = filteredProducts.concat(accessories);
		}
	}
	renderProducts(filteredProducts);
}

filterButton.onclick = filterProductsList;

renderProducts([...laptops, ...phones, ...accessories]);

function appendRecommendationCard(product) {
	const productCard = document.createElement('div');
	productCard.classList.add("product-card", "border", "rounded", "p-8", "m-2", "shadow-md");
	const productCardHTML = `
		<img src = "Assets/${product.section}/${product.id}/${product.images[0]}" alt = "${product.name}" class = "w-full object-contain rounded-md">
		<h3 class="mt-4 text-lg font-bold text-center text-mypurple">${product.name}</h3>
        <p class="text-center text-md text-mypurplelight">${product.price}</p>
        <button class="${product.section} bg-mypink text-white mt-2 px-4 py-2 rounded-md block mx-auto">View Details</button>
	`;
	productCard.innerHTML = productCardHTML;
	recommendations.appendChild(productCard);
	const viewbtn = productCard.querySelector('button');
	viewbtn.onclick = () => showProductDetails(product);
}

function showProductDetails(product) {
	
	mainPage.style.display = "none";
	productDetails.style.display = "block";
	
	const section = product.section;
	const closebtn = document.getElementById("closebtn");
	
	closebtn.onclick = function() {
		mainPage.style.display = "block";
		productDetails.style.display = "none";
	}
	
	const slide = document.getElementById("slide");
	const productsInfo = document.getElementById("productsInfo");
	const recommendations = document.getElementById("recommendations");
	
	slide.innerHTML = '';
	productsInfo.innerHTML = '';
	recommendations.innerHTML = '';
	
	for (let i = 0; i < product.images.length; i++) {
		const slideDiv = document.createElement('div');
		slideDiv.classList.add('slides', 'text-center');
		const image = document.createElement('img');
		image.src = `Assets/${product.section}/${product.id}/${product.images[i]}`;
		image.classList.add('object-contain', 'max-h-[400px]');
		slideDiv.appendChild(image);
		slide.appendChild(slideDiv);
	}
	
	initializeSlider();
	
	if (section === "laptops") {
		
		productsInfo.innerHTML = `
			<h2 class="text-2xl font-bold">${product.name}</h2>
			<p><strong>Price:</strong> ${product.price}</p>
			<p><strong>Display:</strong> ${product.display}</p>
			<p><strong>Processor:</strong> ${product.processor}</p>
			<p><strong>RAM:</strong> ${product.RAM}</p>
			<p><strong>Storage:</strong> ${product.storage}</p>
			<p><strong>Battery Life:</strong> ${product.battery}</p>
			<p><strong>Features:</strong> ${product.features}</p>
			<p><strong>Colors:</strong> ${product.colors}</p>
		`
		
		let recommendedProducts = [];
		
		for (let i = 0; i < laptops.length; i++) {
			if (laptops[i].id === product.id) {
				continue; 
			} 
			else {
				recommendedProducts.push(laptops[i]);
			}
		}
		
		recommendedProducts.forEach(appendRecommendationCard);
		
	}
	
	else if (section === "phones") {
		
		productsInfo.innerHTML = `
			<h2 class="text-2xl font-bold">${product.name}</h2>
			<p><strong>Price:</strong> ${product.price}</p>
			<p><strong>Display:</strong> ${product.display}</p>
			<p><strong>Processor:</strong> ${product.processor}</p>
			<p><strong>Storage:</strong> ${product.storage}</p>
			<p><strong>Camera:</strong> ${product.camera}</p>
			<p><strong>Battery Life:</strong> ${product.battery}</p>
			<p><strong>Features:</strong> ${product.features}</p>
			<p><strong>Colors:</strong> ${product.colors}</p>
		`
		
		let recommendedProducts = [];
		
		for (let i = 0; i < phones.length; i++) {
			if (phones[i].id === product.id) {
				continue; 
			} 
			else {
				recommendedProducts.push(phones[i]);
			}
		}
		
		recommendedProducts.forEach(appendRecommendationCard);
		
	}
	
	else {
		
		productsInfo.innerHTML = `
			<h2 class="text-2xl font-bold">${product.name}</h2>
			<p><strong>Price:</strong> ${product.price}</p>
			<p><strong>Type:</strong> ${product.type}</p>
			<p><strong>Battery:</strong> ${product.battery}</p>
			<p><strong>Features:</strong> ${product.features}</p>
			<p><strong>Connectivity:</strong> ${product.connectivity}</p>
			<p><strong>Compatibility:</strong> ${product.compatibility}</p>
		`
		
		let recommendedProducts = [];
		
		for (let i = 0; i < accessories.length; i++) {
			if (accessories[i].id === product.id) {
				continue; 
			} 
			else {
				recommendedProducts.push(accessories[i]);
			}
		}
		
		recommendedProducts.forEach(appendRecommendationCard);
		
	}
	
}

let slideIndex = 0;
let intervalId = null;
let temp = null;

function initializeSlider() {
	const slides = document.querySelectorAll(".slides img");
	slides.forEach(slide => slide.style.display = "none");
	slides[slideIndex].style.display = "block";
	intervalId = setInterval(nextSlide, 3000);
}

const prevbtn = document.getElementById("prevBtn");
const nextbtn = document.getElementById("nextBtn");

prevbtn.onclick = prevSlide;

function prevSlide() {
	const slides = document.querySelectorAll(".slides img");
	clearInterval(intervalId);
	slideIndex--;
	if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Wrap to the last slide
    }
	slides.forEach(slide => slide.style.display = "none");
	slides[slideIndex].style.display = "block";
}

nextbtn.onclick = nextSlide;

function nextSlide() {
	const slides = document.querySelectorAll(".slides img");
	slideIndex++;
	if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
	clearInterval(intervalId);
	slides.forEach(slide => slide.style.display = "none");
	slides[slideIndex].style.display = "block";
	intervalId = setInterval(nextSlide, 3000);
}