import React from 'react';
import {Avatar, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LogoIcon from "../../icons/LogoIcon";
import TagPanel from "./TagPanel";
import ProgressIcon from "../../icons/ProgressIcon";
import DayPicker from "./DayPicker";
import PeriodSwitcher from "./PeriodSwitcher";
import theme from "../../../theme";
import ActionButtons from "./ActionButtons";

const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        navbar: {
            padding: theme.global.spacing('xxxxxs'),
            margin: theme.global.spacing('l'),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        navbar_item: {
            display: "inline-flex"
        },
        navbar_left: {
            display: "flex",
            justifyContent: "space-between"
        },
        navbar_right: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        },
        logo: {
            marginRight: theme.global.spacing('l')
        },
        progress: {
            marginLeft: theme.global.spacing('l')
        },
        avatar: {
            height: theme.global.spacing('l'),
            width: theme.global.spacing('l'),
            marginLeft: theme.global.spacing('l'),
        }
    }));

    const classes = useStyles();

    return (
        <Box className={classes.navbar}>
            <Box className={classes.navbar_left}>
                <Box className={classes.navbar_item}>
                    <LogoIcon className={classes.logo} />
                    <DayPicker />
                    <div style={{
                        marginLeft: theme.global.spacing('l'),
                        marginRight: theme.global.spacing('l'),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}>
                        <PeriodSwitcher />
                    </div>
                    <ActionButtons />
                    <div style={{
                        marginLeft: theme.global.spacing('l'),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}>
                        <svg width="94" height="21" viewBox="0 0 94 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.41061 18.2115L10.3963 9.65924C13.4011 6.44134 17.3836 4.30481 21.7264 3.58102L26.6145 2.76633C30.7839 2.07143 35.0662 2.71535 38.8468 4.60567L44.4455 7.40502C46.1594 8.26198 47.9876 8.86818 49.874 9.20504L55.0941 10.1372C58.9651 10.8285 62.9541 10.3633 66.5621 8.79977L73.4777 5.803C75.1709 5.06928 76.9575 4.57343 78.7866 4.32955L91.0297 2.69714" stroke="#95C1D5" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </div>
                </Box>
            </Box>
            <Box className={classes.navbar_right}>
                <Box className={classes.navbar_item}>
                    <TagPanel />
                    <ProgressIcon className={classes.progress} />
                </Box>
                <Avatar
                    alt="Oleksandr Sendziuk"
                    src="/public/img/DSC_0089.jpg"
                    className={classes.avatar}
                />
            </Box>
        </Box>
    );
};

export default Navbar;