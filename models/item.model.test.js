const mongoose = require('mongoose');
const ItemModel = require('./item.model');
const itemData = { itemName: 'Ringo',  category: 'fun fun fun' };

describe('Item Model Test', () => {

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

    it('create & save item successfully', async () => {
        const validItem = new ItemModel(itemData);
        const savedItem = await validItem.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedItem._id).toBeDefined();
        expect(savedItem.itemName).toBe(itemData.itemName);
        expect(savedItem.assignedTo).toBe(itemData.assignedTo);
        expect(savedItem.category).toBe(itemData.category);

    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert item successfully, but the field does not defined in schema should be undefined', async () => {
        const itemWithInvalidField = new ItemModel({ itemName: 'Ringo',  category: 'fun fun fun' });
        const savedItemWithInvalidField = await itemWithInvalidField.save();
        expect(savedItemWithInvalidField._id).toBeDefined();
        expect(savedItemWithInvalidField.nickkname).toBeUndefined();
    });

    // Test Validation is working!!!
    // It should us told us the errors in on required field.
    it('create item without required field should fail', async () => {
        const itemWithoutRequiredField = new ItemModel({ itemName: 'Ringo' });
        let err;
        try {
            const savedItemWithoutRequiredField = await itemWithoutRequiredField.save();
            error = savedItemWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.category).toBeDefined();
    });

    
})