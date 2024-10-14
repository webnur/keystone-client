import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
