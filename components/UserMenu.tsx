import Link from "next/link";
import React from "react";
const status = "notauthed";
const UserMenu = () => {
  return (
    <>
      {status === "notauthed" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
    </>
  );
};

export default UserMenu;
