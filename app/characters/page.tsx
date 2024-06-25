import { GET_CHARACTERS } from '@/queries/characters'
import getClient from '@/lib/apolloClient'
import {CharactersData} from '@/types'
import Pagination from '@/components/pagination'
import Link from 'next/link'

type Props = {searchParams: {page: string}}

const CharactersTable = ({characters}: {characters: CharactersData['characters']['results']}) => {
  return (
    <table style={{width: '100%'}}>
      <thead style={{textAlign: 'left'}}>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Origin</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr key={character.id}>
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.origin.name}</td>
            <td>{character.origin.name}</td>
            <td><Link href={`/characters/${character.id}`} passHref><button>View</button></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Characters: React.FC<Props> = async ({searchParams}) => {
  const page = parseInt(searchParams?.page) || 1
  const {data} = await getClient().query<CharactersData>({query: GET_CHARACTERS, variables: {page}})

  return (
    <div>
      <h1>Characters</h1>
      <CharactersTable characters={data.characters.results} />
      <Pagination page={page} info={data.characters.info} />
    </div>
  )
}

export default Characters
