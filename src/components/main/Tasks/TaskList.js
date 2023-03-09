import {Draggable, Droppable} from "react-beautiful-dnd";
import React from "react";
import Task from "./Task";
import {makeStyles} from "@material-ui/core/styles";

const TaskList = ({ tasks, status }) => {
    return (
        <Droppable droppableId={status}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, index) => (
                        <Task key={index} task={task} isLast={index === tasks.length - 1} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;