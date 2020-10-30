import React from "react";
import {Grid, makeStyles, Paper, Typography, Button, Divider, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        [theme.breakpoints.down(`sm`)]: {
            marginBottom: theme.spacing(4),
        },
    },
    paper: {
        padding: theme.spacing(2),
        borderRadius: 12,
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            padding: theme.spacing(3),
        },
    },
    formTitle: {
        marginBottom: theme.spacing(4),
    },
    sidebarSectionDivider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    }
}));

const AddingForm = (props) => {
    const {
        title,
        description,
        onSubmit,
        onTitleChange,
        onDescriptionChange
    } = props;
    const classes = useStyles();

    return (
        <Grid className={classes.formContainer} item xs={12} md={8}>
            <Paper variant="outlined" className={classes.paper}>
                <Typography className={classes.formTitle} gutterBottom component="h1" variant="h4" align="center">New product</Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Title"
                            fullWidth
                            variant="outlined"
                            value={title}
                            onChange={onTitleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Description"
                            multiline
                            fullWidth
                            rows={7}
                            variant="outlined"
                            value={description}
                            onChange={onDescriptionChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider className={classes.sidebarSectionDivider}/>
                        <Button variant="contained" color="primary" onClick={onSubmit}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};


export default AddingForm;
