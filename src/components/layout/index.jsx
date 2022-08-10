import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Breadcrumb } from '../Breadcrumb'

export const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <Breadcrumb />
        <main style={{
          padding: '50px'
        }}>
            {children}
        </main>
        <Footer />
    </>
  )
}
