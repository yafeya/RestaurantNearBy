export class Location { 
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export class Restaurant{
    id = 0;
    address = '';
    city = '';
    distance = 0;
    location = undefined;
    name = '';
    price = 0;
    province = '';
    rating = 0;
    time = 0;
}