import React from "react";

class Header extends React.Component {
  render() {
    return(
<div className="jumbotron text-center p-3 mb-2 bg-info text-white" >
  <h1 className="display-4 text-center "><strong>Employee Directory</strong></h1>
  <div class="shadow-sm p-3 mb-5 bg-white rounded">Regular shadow</div>
</div>
    );
  }
}

export default Header
