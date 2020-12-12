import React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css';

function Footer(){
    return (
        <Grid item container xs={12} className="footerGrid">
          <h4> Made with <span role="img" aria-label="heart"> 💜</span> by Anuradha Aggarwal </h4>
          <Grid item container xs={12} className="footerGrid" >
            <a href="https://github.com/anuradha9712"  ><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/anuradha-aggarwal-4a2751107/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com/Anuradh06359394/"><FontAwesomeIcon icon={faTwitter} /></a>
          </Grid>
        </Grid>

    )
}

export default Footer;