import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" w-full bg-white">{children}</div>;
};

export default UserLayout;
