export interface Reservation {
    id: string,
    checkInDate: Date,
    checkOutDate: Date,
    guestName: string,
    guestEmail: string,
    roomNumber: number
}

export interface Helper {
    _embedded: string,
    reservations: Reservation[]
}
