import React, {useEffect, useState} from 'react';
import {Box, Input} from "@material-ui/core";
import TaskList from "../components/main/Tasks/TaskList";
import store from "../store";
import {DragDropContext} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";
import AddTaskIcon from "../components/icons/AddTaskIcon";

const Main = () => {

    const [tasks, setTasks] = useState(store.initialTasks);
    const onDragEnd = (result) => {
        const { source, destination } = result;

        // If there is no destination or if the task is dropped back to its original position, do nothing
        if (!destination || (source.index === destination.index && source.droppableId === destination.droppableId)) {
            return;
        }

        // Get the task that was dragged
        const task = tasks.find((task) => task.id === result.draggableId);

        // Remove the task from its original position
        const newTasks = tasks.filter((task) => task.id !== result.draggableId);

        // Insert the task into its new position
        newTasks.splice(destination.index, 0, {
            ...task,
            status: destination.droppableId,
        });

        // Update the state with the new tasks array
        setTasks(newTasks);
    };

    const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: theme.global.spacing('base'),
            paddingRight: theme.global.spacing('l'),
            paddingLeft: theme.global.spacing('l'),
            paddingBottom: theme.global.spacing('l'),
        },
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

    const handleKeyPress = (event) => {
        if (addedValue) {
            if (event.key === 'Enter') {
                const title = event.target.value;
                store.addTask(title);
                setIsAdded(false);
                setAddedValue('');
            }
        }
    };

    const handleInputChange = (event) => {
        setAddedValue(event.target.value);
    }

    const handlePlusClick = () => {
        setIsAdded(true);
    };

    const [isAdded, setIsAdded] = useState(false);
    const [addedValue, setAddedValue] = useState('');
    const serialNumber = tasks.length + 1;

    function addTaskInput() {
        if (isAdded) {
            return <div className={classes.inputWrapper}>
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
            </div>;
        }
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 13) { // 13 is the key code for Enter key
                setIsAdded(true);
            } else if (event.keyCode === 27) { // 27 is the key code for Esc key
                setIsAdded(false);
                setAddedValue('');
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Box className={classes.main}>
            <DragDropContext onDragEnd={onDragEnd}>
                <TaskList tasks={tasks} status="todo" />
            </DragDropContext>
            {addTaskInput()}
            <Box style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
            }}>
                <AddTaskIcon onClick={handlePlusClick} />
            </Box>
        </Box>
    );
};

export default Main;