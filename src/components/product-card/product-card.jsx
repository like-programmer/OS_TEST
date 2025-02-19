import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import {makeStyles} from "@material-ui/core/styles";
import {TextLimits, UserRole} from "../../const.js";

const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        padding: 12,
        height: '100%',
        // minHeight: 355,
        borderRadius: 12,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        borderRadius: 6,
    },
    cardContent: {
        flexGrow: 1,
    },
    cardActions: {
        display: `flex`,
        justifyContent: `flex-end`,
        padding: `0 0 12px`,
    },
}));

const ProductCard = (props) => {
    const {
        product,
        accessLevel,
        onDeleteBtnClick,
    } = props;

    const classes = useStyles();

    const trimmedTitle = product.title.length > TextLimits.TITLE ? `${product.title.slice(0, TextLimits.TITLE)}...` : product.title;

    const trimmedDescription = product.description.length > TextLimits.DESCRIPTION ? `${product.description.slice(0, TextLimits.DESCRIPTION)}...` : product.description;

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card} variant="outlined">
                {accessLevel === UserRole.ADMIN &&
                <Fragment>
                    <CardActions className={classes.cardActions}>
                        <IconButton aria-label="delete" size="small"
                        onClick={() => {
                            onDeleteBtnClick(product.id);
                        }}>
                            <ClearIcon/>
                        </IconButton>
                    </CardActions>
                </Fragment>
                }

                <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.title}
                />

                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">{trimmedTitle}</Typography>
                    <Typography variant="body2">{trimmedDescription}</Typography>
                    <br/>
                    <Typography component="h2" variant="h6" color="primary">{`$${product.price}`}</Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    accessLevel: PropTypes.string.isRequired,
    onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ProductCard;
