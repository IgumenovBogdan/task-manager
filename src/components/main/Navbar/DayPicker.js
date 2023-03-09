import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const DayPicker = () => {

    const theme = useTheme();

    const useStyles = makeStyles((theme) => ({
        day_picker: {
            display: "flex",
            marginLeft: theme.global.spacing('base'),
            maxHeight: 40 //not standard value, need to be added in design (maybe)
        },
        date_title: {
            fontSize: theme.global.fontsize('l'),
            fontWeight: theme.global.regular.value,
            color: theme.global.brand.value
        },
        arrow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: theme.global.radius('l'),
            color: theme.global.basic['6-grey'].value,
            fontSize: theme.global.fontsize('base'),
            fontWeight: theme.global.regular.value,
            '&:hover': {
                border: `2px solid ${theme.global.basic['3-grey'].value}`,
            },
            padding: '8px 13px 8px 11px',
            gap: 8,
            border: `2px solid ${theme.global.basic['1-grey'].value}`,
            cursor: 'pointer'
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Typography className={classes.date_title}>
                Today, 29 Mar, Sat
            </Typography>
            <Box className={classes.day_picker}>
                <span className={classes.arrow}>

                    {/*todo need to refactor with normal svg icon import*/}

                    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.55077 19.681L0.420222 11.039C-0.140073 10.5086 -0.140073 9.64883 0.420222 9.11851L9.55077 0.476475C10.1111 -0.0538445 11.0195 -0.0538445 11.5798 0.476475C12.1401 1.00679 12.1401 1.86661 11.5798 2.39693L3.46374 10.0787L11.5798 17.7605C12.1401 18.2909 12.1401 19.1507 11.5798 19.681C11.0195 20.2113 10.1111 20.2113 9.55077 19.681Z" fill="#C3C3C3"/>
                    </svg>
                </span>
                <span className={classes.arrow} style={{marginLeft: theme.global.spacing('base'), padding: '8px 11px 8px 13px'}}>
                    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.44923 19.681L11.5798 11.039C12.1401 10.5086 12.1401 9.64883 11.5798 9.11851L2.44923 0.476475C1.88894 -0.0538445 0.980518 -0.0538445 0.420222 0.476475C-0.140074 1.00679 -0.140074 1.86661 0.420222 2.39693L8.53626 10.0787L0.420222 17.7605C-0.140074 18.2909 -0.140074 19.1507 0.420222 19.681C0.980518 20.2113 1.88894 20.2113 2.44923 19.681Z" fill="#C3C3C3"/>
                    </svg>
                </span>
            </Box>
        </>
    );
};

export default DayPicker;