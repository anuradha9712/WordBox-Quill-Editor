import React from 'react';
import readingtime from 'reading-time';
import { Grid } from '@material-ui/core';
import '../../App.css';

function ReadingAnalysis({ content }) {
    return (
        <Grid item container spacing={2} className="description">
            <Grid item container xs={12} md={6} className="itemGrid" >
                <div className="card para ">
                    <p>{readingtime(content).minutes} minutes</p>
                    <h3>Reading Time</h3>
                </div>
            </Grid>
            <Grid item container xs={12} md={6} className="itemGrid">
                <div className="card para">
                    <p>{readingtime(content).words} words</p>
                    <h3>Words</h3>
                </div>
            </Grid>
        </Grid>
    )
}

export default ReadingAnalysis;
