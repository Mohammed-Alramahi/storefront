import { Button } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { selectCategory } from '../../redux/reducer';
import Products from '../products';
function Categories(props) {
    const selectedProducts = props.products.filter(product => product.category === props.activeCategory);

    return (
        <>
            {props.categories.map(cat => (
                <Button color="secondary" onClick={() => props.selectCategory(cat.normalizedName)}>{cat.displayName}</Button>
            ))}
            <Products selectedProducts={selectedProducts} />
        </>
    )
}
const mapStateToProps = (state) => {
    return state.catReducer;
}
const mapDispatchToProps = { selectCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
