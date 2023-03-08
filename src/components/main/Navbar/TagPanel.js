import React from 'react';
import store from "../../../store";
import TagButton from "../../ui/buttons/TagButton";
import { useTheme } from '@material-ui/core/styles';
import BorderlessButton from "../../ui/buttons/BorderlessButton";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    tagPanel: {
        display: "flex",
    }
});

const TagPanel = (props) => {

    const { classes } = props;

    const theme = useTheme();

    const customStyle = theme => ({
        marginRight: theme.global.spacing('xxs')
    });

    return (
        <div className={classes.tagPanel}>
            {store.initialTags.map((tag) => (
                <TagButton
                    key={tag.id}
                    title={tag.title}
                    style={customStyle(theme)}
                />
            ))}
            <BorderlessButton
                title="Add tag"
            />
        </div>
    );
};

export default withStyles(styles)(TagPanel);