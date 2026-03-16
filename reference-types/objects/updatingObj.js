let vehicle = {
    type: '2-wheeler',
    name: 'activa125',
    color: 'Mehroon',
    model: 2017
};
// dot notation to update an array
vehicle.type = '4wheeler';
vehicle.name = 'Mini-Cooper'
// Bracket notation to update an object
vehicle['type'] = '4wheeler';
vehicle['name'] = 'Mercedes';
console.log(vehicle);