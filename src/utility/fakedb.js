const addToDb = id => {
    let jobCart = {}

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('jobs-cart')
    if (storedCart) {
        jobCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = jobCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        jobCart[id] = newQuantity
    } else {
        jobCart[id] = 1
    }
    localStorage.setItem('jobs-cart', JSON.stringify(jobCart))
}

const getStoredCart = () => {
    let jobCart = {}

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('jobs-cart')
    if (storedCart) {
        jobCart = JSON.parse(storedCart)
    }
    return jobCart
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('jobs-cart')
    if (storedCart) {
        const jobCart = JSON.parse(storedCart)
        if (id in jobCart) {
            delete jobCart[id]
            localStorage.setItem('jobs-cart', JSON.stringify(jobCart))
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('jobs-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }