import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const PeriodSwitcher = () => {

    const useStyles = makeStyles((theme) => ({
        period_switcher: {
            fontSize: theme.global.fontsize('base'),
            fontWeight: theme.global.regular.value,
            color: theme.global.brand.value,
            cursor: 'pointer',
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Typography className={classes.period_switcher}>
                Day
            </Typography>
        </>
    );
};

export default PeriodSwitcher;