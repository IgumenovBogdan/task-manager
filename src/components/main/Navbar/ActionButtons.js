import React from 'react';
import {Box} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import {makeStyles} from "@material-ui/core/styles";

const ActionButtons = () => {

    const theme = useTheme();

    const useStyles = makeStyles((theme) => ({
        group: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        button: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            '&:hover': {
                transform: 'scale(1.1)'
            },
        }
    }));

    const classes = useStyles();

    return (
        <>
            <Box className={classes.group}>
                <span className={classes.button}>

                    {/*todo need to refactor with normal svg icon import*/}

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.57874C3.10457 4.57874 4 3.6833 4 2.57874C4 1.47417 3.10457 0.578735 2 0.578735C0.895431 0.578735 0 1.47417 0 2.57874C0 3.6833 0.895431 4.57874 2 4.57874Z" fill="#C3C3C3"/>
                        <path d="M4 9.57874C4 10.6833 3.10457 11.5787 2 11.5787C0.895431 11.5787 0 10.6833 0 9.57874C0 8.47417 0.895431 7.57874 2 7.57874C3.10457 7.57874 4 8.47417 4 9.57874Z" fill="#C3C3C3"/>
                        <path d="M0 17.5787C0 16.4742 0.895431 15.5787 2 15.5787L18 15.5787C19.1046 15.5787 20 16.4742 20 17.5787C20 18.6833 19.1046 19.5787 18 19.5787L2 19.5787C0.895431 19.5787 0 18.6833 0 17.5787Z" fill="#C3C3C3"/>
                        <path d="M10 11.5787C11.1046 11.5787 12 10.6833 12 9.57874C12 8.47417 11.1046 7.57874 10 7.57874C8.89543 7.57874 8 8.47417 8 9.57874C8 10.6833 8.89543 11.5787 10 11.5787Z" fill="#C3C3C3"/>
                        <path d="M20 9.57874C20 10.6833 19.1046 11.5787 18 11.5787C16.8954 11.5787 16 10.6833 16 9.57874C16 8.47417 16.8954 7.57874 18 7.57874C19.1046 7.57874 20 8.47417 20 9.57874Z" fill="#C3C3C3"/>
                        <path d="M12 2.57874C12 3.6833 11.1046 4.57874 10 4.57874C8.89543 4.57874 8 3.6833 8 2.57874C8 1.47417 8.89543 0.578735 10 0.578735C11.1046 0.578735 12 1.47417 12 2.57874Z" fill="#C3C3C3"/>
                        <path d="M18 4.57874C19.1046 4.57874 20 3.6833 20 2.57874C20 1.47417 19.1046 0.578735 18 0.578735C16.8954 0.578735 16 1.47417 16 2.57874C16 3.6833 16.8954 4.57874 18 4.57874Z" fill="#C3C3C3"/>
                    </svg>
                </span>
                <span className={classes.button} style={{marginLeft: theme.global.spacing('l')}}>
                    <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.3992 8.66233L11 2.07874L7.60081 8.66233L0 9.71806L5.5 14.8427L4.20163 22.0787L11 18.6623L17.7984 22.0787L16.5 14.8427L22 9.71806L14.3992 8.66233ZM17.8575 11.0046L13.1191 10.3465L11 6.24223L8.88092 10.3465L4.14251 11.0046L7.57126 14.1994L6.76184 18.7104L11 16.5806L15.2382 18.7104L14.4287 14.1994L17.8575 11.0046Z" fill="#C3C3C3"/>
                    </svg>
                </span>
            </Box>
        </>
    );
};

export default ActionButtons;