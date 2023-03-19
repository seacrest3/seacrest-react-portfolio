import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>Lamda 2023</span>
      <div class="col-lg-1 col-md-2 col-sm-2">
        <a href="tel:+44 7716876577" title="+44 1869 168168"><img class="contactImage" src="images/phone.png" alt="phone logo"/></a>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2">
        <a href="mailto:o7716442@gmail.com" title="o7716442@gmail.com"><img class="contactImage" src="images/email.png" alt="email logo"/></a>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2">
        <a href="https://github.com/seacrest3" title="https://github.com/seacrest3"><img class="contactImage" src="images/github.png" alt="GitHub logo"/></a>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2">
        <a href="https://hk.linkedin.com/in/kelvin-lee-8a9929146" title="https://hk.linkedin.com/in/kelvin-lee-8a9929146"><img class="contactImage" src="images/LinkedIn.png" alt="LinkedIn logo"/></a>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2">
        <a href="https://drive.google.com/file/d/1zClOUx388Hq16WJjxkTDxobbfCcNBpbP/view?usp=share_link" title="https://drive.google.com/file/d/1zClOUx388Hq16WJjxkTDxobbfCcNBpbP/view?usp=share_link"><img class="contactImage" src="images/resume.png" alt="Resume logo"/></a>
      </div>
    </footer>
  );
}
export default Footer;