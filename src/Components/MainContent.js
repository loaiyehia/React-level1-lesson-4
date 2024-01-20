import React from "react";
import "./MainContent.css"


const MainContent = ({ namepage, desginer }) => {
  return (
    <div>
      <main>
        {namepage} Page
        <br />
        {desginer}
      </main>
    </div>
  );
};

export default MainContent;
