import React from "react";
import SVGpaths from "../SVGpaths/SVGpaths";
import SVG from "../SVG/SVG";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SVGpaths />
      <header className="flex justify-center items-center">
        <SVG
          id={"icon--logo-50th"}
          height="22"
          width="130"
        />
      </header>
      <main className="flex flex-row justify-center items-center grow">
        <SVGpaths />
        {children}
      </main>
      <footer className="text-center mt-auto">
        this is footer
      </footer>
    </div>
  );
}
