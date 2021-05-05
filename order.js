const orderTotal = (items) => {
    if (items.length == 0) throw new Error("Object items tidak boleh kosong")

    // Before
    // let total = 0;
    // items.map(item => {
    //     if (!item.price) throw new Error("Harga tidak terdefinisi")
    //     if (item.price < 0) throw new Error("Harga tidak boleh negative")
    //     if (!item.name) throw new Error("Nama tidak terdefinisi")
    //     if (!item.qty) { item.qty = 1 }
    //     total += (item.price * item.qty)
    // })
    // return total;


    // Refactor
    const reducer = (prev, item) => {
        if (!item.price) throw new Error("Harga tidak terdefinisi")
        if (item.price < 0) throw new Error("Harga tidak boleh negative")
        if (!item.name) throw new Error("Nama tidak terdefinisi")

        return (item.price * (item.qty || 1)) + prev
    }
    const total = items.reduce(reducer, 0)
    
    return total
}

module.exports = {
    orderTotal
}