import Link from 'next/link'
import type {Metadata} from "next"
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {title: "Rick and Morty API"}

const RootLayout: React.FC<React.PropsWithChildren> = ({children}) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body className={inter.className}>
      <header>
        <Link href="/characters" passHref>
          <button>Characters</button>
        </Link>
        <Link href="/episodes" passHref>
          <button>Episodes</button>
        </Link>
        <Link href="/locations" passHref>
          <button>Locations</button>
        </Link>
      </header>
      <main>{children}</main>
    </body>
  </html>
)


export default RootLayout
