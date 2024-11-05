import Header from "@/components/header/Header";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="relative background-image-container min-h-screen">
      {children}
    </div>
  );
}
