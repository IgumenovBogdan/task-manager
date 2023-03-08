import React from 'react';
import {Input} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const AddTaskInput = ({show, serialNumber, handleKeyPress, handleInputChange}) => {

    const useStyles = makeStyles((theme) => ({
        addInput: {
            fontSize: theme.global.fontsize('xxl'),
        },
        inputWrapper: {
            display: "flex",
            borderBottom: `2px solid ${theme.global.basic['3-grey'].value}`,
            paddingBottom: theme.global.spacing('l'),
            '&:hover': {
                borderBottom: `2px solid ${theme.global.basic['5-grey'].value}`
            },
            marginTop: theme.global.spacing('l'),
        },
        integer: {
            marginRight: theme.global.spacing('l'),
            fontSize: theme.global.fontsize('l'),
            color: theme.global.basic['5-grey'].value,
            display: "flex",
            alignItems: "center"
        }
    }));

    const classes = useStyles();

    if (show) {
        return (
            <div className={classes.inputWrapper}>
                <span className={classes.integer}>{serialNumber}</span>
                <Input
                    autoFocus
                    className={classes.addInput}
                    placeholder="Add task"
                    fullWidth
                    disableUnderline
                    onKeyDown={handleKeyPress}
                    onChange={handleInputChange}
                />
            </div>
        )
    }

    if (!show) {
        return <></>
    }
};

export default AddTaskInput;