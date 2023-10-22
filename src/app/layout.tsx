import type { Metadata } from 'next'
import { Fira_Code, Courier_Prime } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { cx, sva } from 'styled-system/css'
import './global.css'

const body = Courier_Prime({ weight: '400', subsets: ['latin'] })
const code = Fira_Code({ subsets: ['latin'], variable: '--font-code' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const styles = sva({
  slots: ['main', 'header', 'showcase'],
  base: {
    header: {
      bg: { base: 'bg.canvas', lg: 'transparent' },
      display: 'flex',
      flexDirection: 'column',
      left: '0',
      position: 'fixed',
      right: '0',
      top: '0',
      zIndex: 'sticky',
      borderBottomWidth: { base: '1px', lg: '0px' },
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      justifyContent: 'center',
      pt: '16',
      overflow: { lg: 'hidden' },
    },
    showcase: {
      height: { base: 'auto', lg: 'calc(100vh - 96px)' },
      width: '1312px',
      px: { base: '4', md: '6' },
      transform: { base: 'none', lg: 'rotate(8deg) translateX(50px)' },
    },
  },
})()

const RootLayout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={cx(body.className, code.variable)}>
        {/* <header className={styles.header}>
          
        </header> */}
        {children}
        </body>
    </html>
  )
}

export default RootLayout
