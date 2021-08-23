import { products, categories } from "../data";

const initialState = {
    categories,
    activeCategory: categories[0].normalizedName,
    products
};

const catReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SELECT_CATEGORY':
            const activeCategory = payload;
            const categories = [...state.categories, payload];
            const products = [...state.products, payload];
            const selectedProducts = products.filter(product => product.category === activeCategory);
            return { activeCategory, selectedProducts, products, categories };
        default:
            return state;
    }
};

export const selectCategory = (category) => {
    console.log(category);
    return {
        type: 'SELECT_CATEGORY',
        payload: category,
    };
};
export default catReducer;