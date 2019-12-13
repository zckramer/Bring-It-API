const mongoose = require('mongoose');
const EventModel = require('./event.model');
const eventData = { title: 'Scary Event',  hostId: '123', guestList: ["x","y","z" ], attendanceLimit: 20 , date:  "01-01-1999" , location: "Here" , theme: "Halloween"  , isOver: true };

describe('Event Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save event successfully', async () => {
        const validEvent = new EventModel(eventData);
        const savedEvent = await validEvent.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedEvent._id).toBeDefined();
        expect(savedEvent.title).toBe(eventData.title);
        expect(savedEvent.hostId).toBe(eventData.hostId);
        // expect(savedEvent.guestList).toBe(eventData.guestList);
        expect(savedEvent.attendanceLimit).toBe(eventData.attendanceLimit);
        // expect(savedEvent.date).toBe(eventData.date);
        expect(savedEvent.location).toBe(eventData.location);
        expect(savedEvent.theme).toBe(eventData.theme);
        expect(savedEvent.isOver).toBe(eventData.isOver);
        

    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert event successfully, but the field does not defined in schema should be undefined', async () => {
        const eventWithInvalidField = new EventModel({ title: 'Scary Event',  hostId: '123', guestList: ["x","y","z" ], attendanceLimit: 20 , date:  "01-01-1999" , location: "Here" , theme: "Halloween"  , isOver: true });
        const savedEventWithInvalidField = await eventWithInvalidField.save();
        expect(savedEventWithInvalidField._id).toBeDefined();
        expect(savedEventWithInvalidField.nickkname).toBeUndefined();
    });

    // Test Validation is working!!!
    // It should us told us the errors in on required field.
    it('create event without required field should fail', async () => {
        const eventWithoutRequiredField = new EventModel({  attendanceLimit: 20 , date:  "01-01-1999" , location: "Here" , theme: "Halloween"  , isOver: true });
        let err;
        try {
            const savedEventWithoutRequiredField = await eventWithoutRequiredField.save();
            error = savedEventWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.title).toBeDefined();
    });

    
})