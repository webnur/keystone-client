import Header from "@/components/common/Header";
import UserFooter from "@/components/user/UserFooter";
import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <UserFooter />
    </>
  );
};

export default UserLayout;
