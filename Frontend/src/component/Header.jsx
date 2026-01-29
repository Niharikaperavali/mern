import React from 'react';

const Header = () => {
  console.log("Header Called");
  return (
    <div>
      <h1>Header Rendered</h1>
    </div>
  );
};

export default React.memo(Header);
