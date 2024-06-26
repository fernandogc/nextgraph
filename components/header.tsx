import Link from '@/components/link'

const Header = () => (
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
)

export default Header
