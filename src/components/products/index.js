import React from 'react'
import { Card, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'inline-block',
        margin: '10px',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    count: {
        textAlign: 'center',
        color: 'red'
    },
    description: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: 12,
    },
    img: {
        width: '150px',
        height: '150px',
        margin: 'auto',
        display: 'block',
    },
    products: {
        marginLeft: '300px',
    }
});

function Products(props) {
    const classes = useStyles();
    const products = props.selectedProducts.map(product => {
        return (<Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {product.name}
                </Typography>
                <CardMedia >
                    <img src={product.image} className={classes.img} alt={product.name} />
                </CardMedia>
                <Typography className={classes.description} variant="body2" component="p">
                    {product.description}
                </Typography>
                <Typography className={classes.count} variant="small" component="p">
                    We have {product.inventoryCount} in stock
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>)
    })
    return (
        <div className={classes.products}>
            {products}
        </div>
    )
}

export default Products
