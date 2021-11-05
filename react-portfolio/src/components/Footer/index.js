import React from 'react';

function Footer (){
    const handleClick = () => {
            console.log("click handled")
          }
        
          return (
            <footer data-testid="header" className="flex-row px-1">
              <h2>
                <a className="footer" href="/">
                 Brooke Madison
                </a>
              </h2>
              <nav>
                <ul className="flex-row">
                  <li className="mx-2">
                    <a className="footer" href="#contact" onClick={() => handleClick()}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </footer>
          );
        }

export default Footer;