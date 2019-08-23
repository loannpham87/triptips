import React from "react";
import "./footer.css";

function Footer(){
    return(
      <React.Fragment>
        <div className="dev-cred">
        <footer>
          For more info on the devs of this project, please check out our GitHub
          portfolios:{" "}
          <a href="https://github.com/AmandaLuane"> Amanda Johnson |</a>
          <a href="https://github.com/loannpham87"> Loann Pham |</a>
          <a href="https://github.com/rdweston1995"> Robert Weston</a>
        </footer>
      </div>
      </React.Fragment>
    )
}

export default Footer;
