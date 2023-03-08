import React from 'react';
import { observer } from 'mobx-react-lite';
import {Box} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/main/Navbar/Navbar";
import Main from "./pages/Main";
import {makeStyles} from "@material-ui/core/styles";

const App = observer(() => {

    const useStyles = makeStyles((theme) => ({
        app: {
            backgroundColor: theme.global.white.value
        },
    }));

    const classes = useStyles();

    return (

        <>
            <Box
                height="100vh"
                display="flex"
                flexDirection="column"
                className={classes.app}
            >
                <Router>
                    <Navbar />
                    <Main />
                </Router>
            </Box>
        </>
  );
});

export default App;