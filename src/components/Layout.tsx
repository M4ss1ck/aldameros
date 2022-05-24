import React, { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full overflow-none">
      <Header />
      <main className="container flex flex-col items-center min-h-full px-2">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
