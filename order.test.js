const { orderTotal } = require('./order')

describe('orderTotal', () => {
    it('should be throw error when item = null', () => {
        const expectedResult = 'Object items tidak boleh kosong'
        const items = [] 

        expect(() => orderTotal(items)).toThrow(expectedResult)
    });

    it('should be throw error when price is undefined', () => {
        const items = [
            {name: "Apel", qty:1}
        ]
        const expectedResult = 'Harga tidak terdefinisi'
        expect(() => orderTotal(items)).toThrow(expectedResult)
    });

    it('should be throw error when price is negative', () => {
        const items = [
            {name: "Apel",price: -100, qty:1}
        ]
        const expectedResult = 'Harga tidak boleh negative'
        expect(() => orderTotal(items)).toThrow(expectedResult)
    });

    it('should be throw error when name undefined', () => {
        const items = [
            {price: 1000, qty:1}
        ]
        const expectedResult = 'Nama tidak terdefinisi'
        expect(() => orderTotal(items)).toThrow(expectedResult)
    });

    it('should set qty to 1 if qty is undefined', () => {
        const items = [
            {name: "Apel", price:1000}
        ]
        const expectedResult = 1000
        expect(orderTotal(items)).toBe(expectedResult)
    });

    it('should return the right total price if items = 1', () => {
        const items = [
            {name: "Apel", qty:10, price:1000}
        ]
        const expectedResult = 10000
        expect(orderTotal(items)).toBe(expectedResult)
    });

    it('should return the right total price if items > 1', () => {
        const items = [
            {name: "Apel", qty:5, price:1000},
            {name: "Mangga", qty:5, price:5000},
            {name: "Alpukat", qty:5, price:2000}
        ]
        const expectedResult = (5*1000)+(5*5000)+(5*2000)
        expect(orderTotal(items)).toBe(expectedResult)
    });
});