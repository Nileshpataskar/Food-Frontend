import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserPage = () => {
  const { user, isAuthenticated } = useAuth0(); // Access user and isAuthenticated from Auth0

  return (
    <div>
      <div className="w-full h-60 sm:h-80 md:h-80 bg-gradient-to-tr text-white from-[#892074] via-[#77E2E1] to-[#892074]"></div>
      {isAuthenticated ? (
        <h1>Welcome, {user.given_name}</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
};

export default UserPage;
