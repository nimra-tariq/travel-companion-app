import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
    list: {
        cursor: 'pointer !important',
        padding: '7px 24px',
    },
    label: {
        marginBottom: '20px',
    },
    select: {
        padding: '10px'
    }
    ,
    listItem: {
        height: '75vh',
        overflow: 'auto',

    }
}))