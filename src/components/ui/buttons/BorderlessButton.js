import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: theme.global.radius('l'),
        color: theme.global.basic['7-grey'].value,
        fontSize: theme.global.fontsize('base'),
        fontWeight: theme.global.regular.value,
        padding: '10px 14px',
        gap: 8,
        cursor: 'pointer',
    },
});

const BorderlessButton = (props) => {
    const { classes, title, style, ...rest } = props;

    return (
        <span
            className={classes.button}
            style={style}
            {...rest}>
            {title}
        </span>
    );
};

BorderlessButton.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default withStyles(styles)(BorderlessButton);