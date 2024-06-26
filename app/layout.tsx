import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {ProgressBar, ProgressBarProvider} from "react-transition-progress"
import Header from '@/components/header'
import './global.css'

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {title: "Rick and Morty API Explorer"}

const RootLayout: React.FC<React.PropsWithChildren> = ({children}) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body className={inter.className}>
      <ProgressBarProvider>
        <ProgressBar className="progressBar" />
        <Header />
        <main>{children}</main>
      </ProgressBarProvider>
    </body>
  </html>
)


export default RootLayout
