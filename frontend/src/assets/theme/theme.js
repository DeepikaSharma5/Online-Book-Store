import {createMuiTheme, makeStyles} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const PrimaryTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#0166fe"
        },
        secondary:{
            main: "#fff9d1"
            // main: "#b2d0ff"
        }
    }
});

export const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)
        }

    }
}))

export const useStyles = makeStyles(theme =>({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export const customStyles = {
    control: (base) => ({
        ...base,
        height: 55,
        minHeight: 35
    })
};

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.info.dark,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);




