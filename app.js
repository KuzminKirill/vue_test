//function car(name,model, owner, year, phone, image) {
//    return {
//name: name,
//name, model, owner, phone, image
//}
//}

const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '8 800 555 35 35', 'images/1_car.jpeg'),
    car('Ford', 'Mondeo', 'Oleh', 2012, '8 800 555 33 33', 'images/2_car.jpeg'),
    car('Proper', 'Mister', 'Max', 2019, '8 800 555 55 55', 'images/3_car.jpeg'),
    //{name: 'Ford', model: 'Focus', owner: 'Max', year: 2016, phone: '8 800 555 35 35', image: 'images/1_car.jpeg'}
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        logs: [],
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(` Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },

        cancelOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(` Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        },
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show Phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },

    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})