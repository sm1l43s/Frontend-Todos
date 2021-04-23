import {makeStyles} from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

const TaskItemStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    smallIcon: {
        fontSize: 20,
    },
    green: {
        color: green[500],
    },
    red: {
        color: red[500],
    },
    bgGreen: {
        backgroundColor: green[50],
    },
}));

export default TaskItemStyles;