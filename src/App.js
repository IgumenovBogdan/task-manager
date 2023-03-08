import React from 'react';
import { observer } from 'mobx-react-lite';
import {Box} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/main/Navbar/Navbar";
import Main from "./pages/Main";

const App = observer(() => {
    return (

        <>
            <Box
                height="100vh"
                display="flex"
                flexDirection="column"
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