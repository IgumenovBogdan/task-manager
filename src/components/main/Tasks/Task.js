import React from "react";
import {Input} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const Task = ({ task, isLast, index }) => {

    const useStyles = makeStyles((theme) => ({
        text: {
            fontSize: theme.global.fontsize('xxl'),
            cursor: "pointer"
        },
        inputWrapper: {
            display: "flex",
            borderBottom: `2px solid ${theme.global.basic['3-grey'].value}`,
            paddingBottom: theme.global.spacing('l'),
            '&:hover': {
                borderBottom: `2px solid ${theme.global.basic['5-grey'].value}`
            },
            marginBottom: isLast ? 0 : theme.global.spacing('l'),
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
    const serialNumber = index + 1;

    return (
        <div className={classes.inputWrapper}>
            <span className={classes.integer}>{serialNumber}</span>
            <Input
                className={classes.text}
                fullWidth
                disableUnderline
                value={task.title} // Set the value of the input to the editValue state
                // onChange={handleEditInputChange} // Add an onChange event handler to update the editValue state
                // onKeyDown={handleEditInputKeyPress} // Add an onKeyDown event handler to handle the Enter key press
            />
        </div>
    );
};

export default Task;