import {Draggable, Droppable} from "react-beautiful-dnd";
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, status }) => {

    return (
        <Droppable droppableId={status}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: "none",
                                        padding: 12,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        borderRadius: "4px",
                                        ...provided.draggableProps.style,
                                    }}
                                >
                                    <Task task={task} isLast={index === tasks.length - 1} index={index} />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;