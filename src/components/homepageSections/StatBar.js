import React from "react";
import "../../styles/StatBar.css";

function StatBar() {
  return (
    <div className="statBar-Container">
      <div className="delivered-Packages">
        <div className="num-Section" data-number="890">
          890
        </div>
        <div className="text-Section">Delivered packages</div>
      </div>
      <div className="countries-Covered">
        <div className="num-Section" data-number="137">
          137
        </div>
        <div className="text-Section">Countries covered</div>
      </div>
      <div className="tons-of-goods">
        <div className="num-Section" data-number="740">
          740
        </div>
        <div className="text-Section">Tons of Goods</div>
      </div>
      <div className="satisfied-Clients">
        <div className="num-Section" data-number="600">
          600
        </div>
        <div className="text-Section">Satisfied Clients</div>
      </div>
    </div>
  );
}

export default StatBar;
