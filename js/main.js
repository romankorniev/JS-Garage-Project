let cars = [
    {
        name: "Honda", 
        model: 'Civic', 
        year: 1997, 
        price: 3500, 
        run: 442000,
        fuel: "Бензин",
        size: 1.4,
        img: "./img/civic6.jpg",
        isInGarage: "Авто в гаражі ✅"
    },
    {
        name: "Jeep", 
        model: 'Wrangler', 
        year: 2024, 
        price: 70000, 
        run: 9000,
        fuel: "Бензин",
        size: 3.6,
        img: "./img/JeepWrangler2019.avif",
        isInGarage: "Авто в гаражі ✅"
    },
    {
        name: "Jeep", 
        model: 'Wrangler', 
        year: 2021, 
        price: 42800, 
        run: 26000,
        fuel: "Бензин",
        size: 2, 
        img: "./img/wrangler1.jpg",
        isInGarage: "Авто не в гаражі ❌"
    },
    {
        name: "Jeep", 
        model: 'Wrangler', 
        year: 2018, 
        price: 53900, 
        run: 6000,
        fuel: "Бензин",
        size: 3, 
        img: "./img/wrangler2.jpeg",
        isInGarage: "Авто не в гаражі ❌"
    },
    {
        name: "Land Rover", 
        model: 'Range Rover', 
        year: 2011, 
        price: 16850, 
        run: 226000,
        fuel: "Дизель",
        size: 4.4, 
        img: "./img/rangerover3.jpg",
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: "Mitsubishi", 
        model: 'Lancer', 
        year: 2008, 
        price: 7500,
        run: 340000,
        fuel: "Газ/Бензин",
        size: 2.2,  
        img: "./img/Lancer2008.jpg",
        isInGarage: "Авто не в гаражі ❌"
    },
    { 
        name: "Volkswagen", 
        model: 'Phaeton', 
        year: 2009, 
        price: 10000,
        run: 265000,
        fuel: "Дизель",
        size: 3,  
        img: "./img/phaeton.jpg",
        isInGarage: "Авто не в гаражі ❌"
    },
    { 
        name: "Daewoo", 
        model: 'Lanos', 
        year: 2003, 
        price: 1750,
        run: 359000,
        fuel: "Газ/Бензин",
        size: 1.5,  
        img: "./img/lanos.jpg",
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: "Hyundai", 
        model: 'Sonata', 
        year: 2016, 
        price: 14000,
        run: 141000,
        fuel: "Газ",
        size: 2,  
        img: "./img/sonata.jpg",
        isInGarage: "Авто не в гаражі ❌"
    },
    { 
        name: 'Alfa Romeo', 
        model: 'Giulia', 
        year: 2020, 
        price: 23000, 
        run: 55000,
        fuel: "Бензин",
        size: 2,  
        img: './img/Guilia2019.jpg',
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: 'Alfa Romeo', 
        model: '159', 
        year: 2008, 
        price: 8300, 
        run: 216000,
        fuel: "Бензин",
        size: 1.9,   
        img: './img/159_2008.jpg',
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: 'Alfa Romeo', 
        model: '159', 
        year: 2008, 
        price: 7900, 
        run: 203000,
        fuel: "Бензин",
        size: 1.8,   
        img: './img/159_2.jpg',
        isInGarage: "Авто не в гаражі ❌"
    },
    { 
        name: 'Alfa Romeo', 
        model: '159', 
        year: 2008, 
        price: 9300, 
        run: 133000,
        fuel: "Дизель",
        size: 2.4,   
        img: './img/159_3.jpg',
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: 'Mercedes-Benz', 
        model: 'GLC-class', 
        year: 2021, 
        price: 34999, 
        run: 70000, 
        fuel: "Бензин",
        size: 2,   
        img: './img/glc.jpg',
        isInGarage: "Авто не в гаражі ❌"
    },
    { 
        name: 'Mercedes-Benz', 
        model: 'GLE-class', 
        year: 2017, 
        price: 415000, 
        run: 159000, 
        fuel: "Дизель",
        size: 3,   
        img: './img/gle.jpg',
        isInGarage: "Авто не в гаражі ❌"
    },
    { 
        name: 'Mercedes-Benz', 
        model: 'E-class', 
        year: 2009, 
        price: 10300, 
        run: 290000,
        fuel: "Дизель",
        size: 2.1,  
        img: './img/Mercedes2009.jpeg',
        isInGarage: "Авто не в гаражі ❌"
    },
    { 
        name: 'Bentley', 
        model: 'Continental GT', 
        year: 2019, 
        price: 170000, 
        run: 70000,
        fuel: "Бензин",
        size: 6,  
        img: './img/bentley_GT.jpg',
        isInGarage: "Авто в гаражі ✅"
    }
]

function showCars() {
    const container = document.getElementById('carsContainer')
    container.innerHTML = "";

    cars.forEach((car, index) => {
        container.innerHTML += `
        <div class="container">
            <div class="container_avto">
                <span class="span_img">
                    <img src="${car.img}" alt="${car.name}">
                </span>
                <div class="name">
                    <h3>Назва</h3>
                    <p>${car.name.toUpperCase()}
                    <br>
                    ${car.model.toUpperCase()}</p>
                </div>
                <div class="year">
                    <h3>Рік випуску</h3>
                    <p>${car.year}</p>
                </div>
                <div class="price">
                    <h3>Ціна</h3>
                    <p>${car.price} $</p>
                </div>
                <div class="fuelType">
                    <h3>Тип палива</h3>
                    <p>${car.fuel}</p>
                </div>
                <div class="size">
                    <h3>Об'єм двигуна</h3>
                    <p>${car.size} л.</p>
                </div>
                <div class="run">
                    <h3>Пробіг</h3>
                    <p>${car.run} км</p>
                </div>
                <div class="isInGarage">
                    <h3>Авто в гаражі?</h3>
                    <p>${car.isInGarage}</p>
                </div>
                <div>
                    <button class="button_delete" onclick="deleteCar(${index})">Видалити 🗑️</button>
                </div>
            </div>
        </div>`
    })
}

function addCar() {
    const name = document.getElementById("carName").value;
    const model = document.getElementById("carModel").value;
    const year = document.getElementById("carYear").value;
    const price = document.getElementById("carPrice").value;
    const run = document.getElementById("carRun").value;
    const img = document.getElementById("carImg").value;
    const isCarPresent = document.getElementById("isInGarage").value

    if (!name || !model || !year || !price || !run || !isCarPresent) {
        alert("Заповни всі поля!");
        return;
    }

    cars.push({
        name,
        model,
        year: parseInt(year),
        price: parseInt(price),
        run: parseInt(run),
        img,
        isInGarage: isCarPresent
    });

    document.getElementById("carName").value = "";
    document.getElementById("carModel").value = "";
    document.getElementById("carYear").value = "";
    document.getElementById("carPrice").value = "";
    document.getElementById("carRun").value = "";
    document.getElementById("carImg").value = "";
    document.getElementById("isInGarage").value = "";

    showCars();
}

document.getElementById("addCarBtn").addEventListener("click", addCar)

showCars()

function deleteCar(index){
    cars.splice(index, 1)
    showCars()
}

function sortCars(option){
    switch(option){
        case 'alphabet':
            cars.sort((a, b) => (a.name).localeCompare(b.name))
        break

        case 'priceDown':
            cars.sort((a,b) => a.price - b.price)
        break

        case 'priceUp':
            cars.sort((a,b) => b.price - a.price)
        break

        case 'runDown':
            cars.sort((a,b) => a.run - b.run)
        break

        case 'runUp':
            cars.sort((a,b) => b.run - a.run)
        break

        case 'yearDown':
            cars.sort((a,b) => a.year - b.year)
        break

        case 'yearUp':
            cars.sort((a,b) => b.year - a.year)
        break
    }

    showCars()
}

document.getElementById('sort'),addEventListener('change', (event) => {
    sortCars(event.target.value)
})