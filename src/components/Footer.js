import React from 'react';
// Styles are already imported in App

// bug: extends was misspelled
// code refectoring : class was not needed bacause this is a stateless component so used functional component

const Footer = () => <div>
  <div className='footer-anchor'></div>
  <div className='app-footer'></div>
</div>;

export default Footer;