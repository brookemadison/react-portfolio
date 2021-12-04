import React from 'react';

const NotFoundPage = () => {
  return (
  <section className="not-found-page">
  <h2>Uh Oh.</h2>
  <p>No page found. Sorry about that! Let's get you back to where you belong.</p>
  <div className='btns'>
            <a href='/react-portfolio'>
              Go Back
            </a>
          </div>
  </section>

  );
};

export default NotFoundPage;