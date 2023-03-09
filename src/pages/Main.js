import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@material-ui/core";
import TaskList from "../components/main/Tasks/TaskList";
import store from "../store";
import {DragDropContext} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";
import AddTaskIcon from "../components/icons/AddTaskIcon";
import _ from "lodash";
import AddTaskInput from "../components/main/Tasks/AddTaskInput";

const Main = () => {

    const KEY_CODE_ENTER = 13;
    const KEY_CODE_ESC = 27;


    const [tasks, setTasks] = useState(store.initialTasks);
    const onDragEnd = (result) => {
        const { source, destination } = result;

        // If there is no destination or if the task is dropped back to its original position, do nothing
        if (!destination || (source.index === destination.index && source.droppableId === destination.droppableId)) {
            return;
        }

        // Get the task that was dragged
        const task = _.find(tasks, { id: result.draggableId });

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

    const inputRef = useRef(null);

    const handlePlusClick = () => {
        setIsAdded(true);
        if (addedValue) {
            store.addTask(addedValue);
            setAddedValue('');
            inputRef.current.focus();
        }
    };

    const [isAdded, setIsAdded] = useState(false);
    const [addedValue, setAddedValue] = useState('');
    const serialNumber = tasks.length + 1;

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === KEY_CODE_ENTER) {
                return setIsAdded(true);
            }

            if (event.keyCode === KEY_CODE_ESC) {
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
            <AddTaskInput
                serialNumber={serialNumber}
                handleInputChange={handleInputChange}
                handleKeyPress={handleKeyPress}
                show={isAdded}
                value={addedValue}
            />
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