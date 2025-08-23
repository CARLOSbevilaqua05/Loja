
        // Dados dos veículos - fácil de atualizar
        const vehicles = [
            {
                id: 1,
                name: "Vectra elegance",
                year: "1998",
                price: "R$ 26.800",
                images: [
                   "img/captura de tela 2025-08-23 162235.png",
                   "img/captura de tela 2025-08-23 162257 copy.png",
                   "img/captura de tela 2025-08-23 162257.png",
                    "img/captura de tela 2025-08-23 162325.png"

                ],
                description: "Completo, ar-condicionado, direção hidráulica, único dono"
            },
            {
                id: 2,
                name: "Jeep Renegade Sport",
                year: "2021/2022",
                price: "R$ 99.900",
                images: [
                    "https://images.unsplash.com/photo-1567899378494-47b22b2b5b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    "img/captura de tela 2025-08-23 162257 copy.png",
                    "img/captura de tela 2025-08-23 162257.png",
                
                ],
                description: "SUV, automático, 4x4, teto solar, sensor de estacionamento"
            },
            {
                id: 3,
                name: "Fiat Argo Drive",
                year: "2020/2021",
                price: "R$ 59.990",
                images: [
                    "https://images.unsplash.com/photo-1603551906593-2c1f3f35f5c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                ],
                description: "Economico, baixo consumo, ar-condicionado, alarme"
            },
            {
                id: 4,
                name: "VW Gol 1.0 Flex",
                year: "2019/2020",
                price: "R$ 49.990",
                images: [
                    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                ],
                description: "Bem conservado, documentação em dia, revisões em concessionária"
            },
            {
                id: 5,
                name: "Chevrolet Onix Plus",
                year: "2021/2022",
                price: "R$ 79.990",
                images: [
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                ],
                description: "Sedan, automático, multimídia, câmera de ré, completo"
            },
            {
                id: 6,
                name: "Ford Ka SEL",
                year: "2020/2020",
                price: "R$ 55.800",
                images: [
                    "https://images.unsplash.com/photo-1549399542-7e82138ccae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
                    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
                    "https://images.unsplash.com-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                ],
                description: "Hatch, econômico, ar-condicionado, direção hidráulica"
            }
        ];

        // Função para renderizar os veículos
        function renderVehicles() {
            const vehiclesContainer = document.getElementById('vehicles-container');
            vehiclesContainer.innerHTML = '';
            
            vehicles.forEach(vehicle => {
                const vehicleCard = document.createElement('div');
                vehicleCard.className = 'vehicle-card';
                vehicleCard.dataset.id = vehicle.id;
                
                // Mensagem pré-definida para WhatsApp
                const message = `Olá! Tenho interesse no veículo ${vehicle.name} - ${vehicle.year} - ${vehicle.price}`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappLink = `https://wa.me/5511999999999?text=${encodedMessage}`;
                
                // Gerar o HTML do slider de imagens
                let sliderHTML = `
                    <div class="image-slider">
                        <div class="slider-container" id="slider-${vehicle.id}">
                `;
                
                vehicle.images.forEach((image, index) => {
                    sliderHTML += `<img src="${image}" alt="${vehicle.name}" class="vehicle-image" data-index="${index}">`;
                });
                
                sliderHTML += `
                        </div>
                        <button class="slider-btn prev" onclick="moveSlide(${vehicle.id}, -1)">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="slider-btn next" onclick="moveSlide(${vehicle.id}, 1)">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="slider-dots" id="dots-${vehicle.id}">
                `;
                
                vehicle.images.forEach((_, index) => {
                    sliderHTML += `<span class="dot ${index === 0 ? 'active' : ''}" onclick="showSlide(${vehicle.id}, ${index})"></span>`;
                });
                
                sliderHTML += `
                        </div>
                    </div>
                `;
                
                vehicleCard.innerHTML = sliderHTML + `
                    <div class="vehicle-info">
                        <h3 class="vehicle-title">${vehicle.name}</h3>
                        <p class="vehicle-details">${vehicle.year} | ${vehicle.description}</p>
                        <p class="vehicle-price">${vehicle.price}</p>
                        <a href="${whatsappLink}" target="_blank" class="buy-btn">
                            <i class="fab fa-whatsapp"></i> Comprar
                        </a>
                    </div>
                `;
                
                vehiclesContainer.appendChild(vehicleCard);
            });
        }

        // Funções para controle do slider de imagens
        function moveSlide(vehicleId, direction) {
            const slider = document.getElementById(`slider-${vehicleId}`);
            const dots = document.querySelectorAll(`#dots-${vehicleId} .dot`);
            const slides = slider.querySelectorAll('.vehicle-image');
            const currentIndex = parseInt(slider.dataset.currentIndex || 0);
            
            let newIndex = currentIndex + direction;
            
            if (newIndex < 0) {
                newIndex = slides.length - 1;
            } else if (newIndex >= slides.length) {
                newIndex = 0;
            }
            
            slider.style.transform = `translateX(-${newIndex * 100}%)`;
            slider.dataset.currentIndex = newIndex;
            
            // Atualizar dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === newIndex);
            });
        }

        function showSlide(vehicleId, index) {
            const slider = document.getElementById(`slider-${vehicleId}`);
            const dots = document.querySelectorAll(`#dots-${vehicleId} .dot`);
            
            slider.style.transform = `translateX(-${index * 100}%)`;
            slider.dataset.currentIndex = index;
            
            // Atualizar dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        // Inicializar a renderização dos veículos
        document.addEventListener('DOMContentLoaded', renderVehicles);
    