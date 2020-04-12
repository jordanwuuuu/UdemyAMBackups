//Methods:
//And object propertises howse value is a function

let resturant = {
    name: 'Swans Peking',
    guestCapacity: 75,
    guestCount: 0,
    checkAvaliability: function (partySize) {
        //To access object properties we use the 'this.' keyword
        //
        // console.log(this); returns the object
        let seatsLeft = this.guestCapacity - this.guestCount;
        console.log(this)
        return partySize <= seatsLeft;
    },
    seatParty: function (guests) {
        // if(this.checkAvaliability.partySize == true){}
        this.guestCount = this.guestCount + guests;
    },

    removeParty: function (leavers) {
        this.guestCount = this.guestCount - leavers;
        //this.guestCapacity = this.guestCapacity + guests.
        if (this.guestCount <= 0) {
            this.guestCount = 0;
        }
    }

}

resturant.seatParty(72)
console.log(resturant.checkAvaliability(2))
resturant.removeParty(10)
console.log(resturant.checkAvaliability(4))