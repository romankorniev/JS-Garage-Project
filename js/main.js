let cars = [
    {
        name: "Jeep", 
        model: 'Wrangler', 
        year: 2019, 
        price: 19500, 
        run: 10800, 
        img: "./img/JeepWrangler2019.avif",
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: "Mitsubishi", 
        model: 'Lancer', 
        year: 2008, price: 7500,
        run: 340000, 
        img: "./img/Lancer2008.jpg",
        isInGarage: "Авто не в гаражі ❌"
        },
    { 
        name: 'Alfa Romeo', 
        model: 'Giulia', 
        year: 2019, 
        price: 23000, 
        run: 103000, 
        img: './img/Guilia2019.jpg',
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: 'Alfa Romeo', 
        model: '159', 
        year: 2008, 
        price: 8300, 
        run: 280000, 
        img: './img/159_2008.jpg',
        isInGarage: "Авто в гаражі ✅"
    },
    { 
        name: 'Mercedes', 
        model: 'E-class', 
        year: 2009, 
        price: 10300, 
        run: 290000, 
        img: './img/Mercedes2009.jpeg',
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
                    <p>${car.name.toUpperCase()} ${car.model.toUpperCase()}</p>
                </div>
                <div class="year">
                    <h3>Рік випуску</h3>
                    <p>${car.year}</p>
                </div>
                <div class="price">
                    <h3>Ціна</h3>
                    <p>${car.price} $</p>
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
        </div>`;
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
    console.log(isCarPresent)

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

document.getElementById("addCarBtn").addEventListener("click", addCar);

showCars()

function deleteCar(index){
    cars.splice(index, 1)
    showCars()
}

function sortCars(option){
    switch(option){
        case 'alphabet':
            cars.sort((a, b) => (a.name + " " + a.model).toUpperCase().localeCompare(b.name + " " + b.model)).toUpperCase()
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

document.getElementById('sort'),addEventListener('change', (a) => {
    sortCars(a.target.value)
})