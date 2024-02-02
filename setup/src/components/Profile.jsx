// Conditional Rendering

import React, { useState } from "react";

function Profile() {
  const [Login, setLogin] = useState(false);

  return (
    <div>
      {Login ? <h1>Thanx plk for login</h1> : <h1>Thanx guest for login</h1>}
    </div>
  );
}

export default Profile;
