

export const selectSortedPizza = (state, sorting) => {
    debugger
    switch (sorting) {
        case 'a-z':
            let pizzaSortedByAlphabet = state.item.pizza.map(item => Object.assign({}, item))
            pizzaSortedByAlphabet.sort(function (a, b) {
                let nameA = a.title
                let nameB = b.title
                if (nameA > nameB) {
                    return 1
                }
                if (nameA < nameB) {
                    return -1
                }
            })
            return pizzaSortedByAlphabet
        case 'price':
            let pizzaSortedByPrice = state.item.pizza.map(item => Object.assign({}, item))
            pizzaSortedByPrice.sort(function (a, b) {
                return a.price - b.price
            })
            return pizzaSortedByPrice
    }
}