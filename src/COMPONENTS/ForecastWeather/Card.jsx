import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: "whitesmoke",
        boxShadow: "10px 10px 55px white",
        borderRadius: "8px",
        border: "2px dotted blue"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard({ temp, url, alt, ampm, feels_like, hour, description, units }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    <h4>{temp}{units === "metric" ? '℃' : '℉'}</h4>

                </Typography>
                <Typography variant="h5" component="h2">
                    {hour}{ampm}
                    <img src={url} alt={alt} />

                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    FEELS LIKE:{feels_like}{units === "metric" ? '℃' : '℉'}
                </Typography>
                <Typography variant="body2" component="p">
                    <h5>{description}</h5>
                </Typography>
            </CardContent>

        </Card>
    );
}
