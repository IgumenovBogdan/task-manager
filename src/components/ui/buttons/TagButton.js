import React from 'react';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: theme.global.radius('l'),
        color: theme.global.basic['6-grey'].value,
        fontSize: theme.global.fontsize('base'),
        fontWeight: theme.global.regular.value,
        '&:hover': {
            border: `1px solid ${theme.global.catcolors.green.salat.value}`,
        },
        padding: '10px 14px',
        gap: 8,
        border: `1px solid ${theme.global.basic['2-grey'].value}`,
        cursor: 'pointer'
    },
});

const TagButton = (props) => {
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

TagButton.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default withStyles(styles)(TagButton);