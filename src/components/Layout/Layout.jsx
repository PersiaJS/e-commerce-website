import React from 'react'
import SVGpaths from '../SVGpaths/SVGpaths'

export default function Layout({children}) {
  return (
    <div className="min-h-screen flex flex-col">
      <SVGpaths />
      <header className='text-center'>this is header</header>
      <main className="flex flex-row justify-center items-center grow">
        <SVGpaths />
        {children}
      </main>
      <footer className="text-center mt-auto">this is footer</footer>
    </div>
  );
}
