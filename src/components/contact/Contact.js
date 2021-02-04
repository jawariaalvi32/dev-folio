import React, { useContext } from 'react';
import './Contact.css';
import SocialMedia from '../socialmedia/SocialMedia.js';
import { contactInfo } from '../../portfolio';
import mail from '../../assets/images/mail.svg';
import Grid from '@material-ui/core/Grid';

export default function Contact() {
  return (
    <Grid container className="main" id="contact">
      <div className="main contact-margin-top">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className='subTitle contact-subtitle'>
              {contactInfo.subtitle}
            </p>
            <div className='contact-text-div'>
              <a
                className="contact-detail-email"
                href={'mailto:' + contactInfo.emailAddress}
              >
                {contactInfo.emailAddress}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
          <img src={mail}/>
          </div>
        </div>
      </div>
    </Grid>
  );
}