import React, {useState} from "react";
import {Input} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Draggable} from "react-beautiful-dnd";

const Task = ({ task, isLast, index }) => {

    const useStyles = makeStyles((theme) => ({
        text: {
            fontSize: theme.global.fontsize('xxl'),
            cursor: "pointer"
        },
        integer: {
            fontSize: theme.global.fontsize('l'),
            color: /*isFocused ? theme.global.black.value : theme.global.basic['5-grey'].value*/theme.global.basic['5-grey'].value,
            display: "flex",
            alignItems: "center",
        },
        integerWrapper: {
            width: "31px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            marginRight: theme.global.spacing('base'),
        },
        input: {
            cursor: 'pointer',
            padding: 0
        },
        draggable: {
            display: "flex",
            borderBottom: `2px solid ${theme.global.basic['3-grey'].value}`,
            paddingBottom: theme.global.spacing('l'),
            '&:hover': {
                borderBottom: `2px solid ${theme.global.basic['5-grey'].value}`
            },
            marginBottom: theme.global.spacing('l'),
        }
    }));

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const classes = useStyles();
    const serialNumber = index + 1;

    return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classes.draggable}
                    style={{
                        ...provided.draggableProps.style,
                    }}
                >
                    <div className={classes.integerWrapper}>
                        <span className={classes.integer}>{serialNumber}</span>
                    </div>
                    <Input
                        classes={{
                            root: classes.text,
                            input: classes.input,
                        }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        fullWidth
                        disableUnderline
                        value={task.title} // Set the value of the input to the editValue state
                        // onChange={handleEditInputChange} // Add an onChange event handler to update the editValue state
                        // onKeyDown={handleEditInputKeyPress} // Add an onKeyDown event handler to handle the Enter key press
                    />
                </div>
            )}
        </Draggable>
    );
};

export default Task;