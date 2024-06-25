import getClient from '@/lib/apolloClient'
import {CharacterDetailData} from '@/types'
import {GET_CHARACTER} from '@/queries/characters'
import Link from 'next/link'

const Character = async ({params}: {params: {id: string}}) => {
  const {data} = await getClient().query<CharacterDetailData>({query: GET_CHARACTER, variables: {id: params.id}})
  const {episode, image, origin, location, ...rest} = data.character
  return (
    <>
      <img src={image} height={100} />
      <pre>Character {JSON.stringify(rest, null, 2)}</pre>
      <div>Origin</div>
      <div><Link href={`/locations/${origin.id}`}>{origin.name}</Link></div>
      <div>Location</div>
      <div><Link href={`/locations/${location.id}`}>{location.name}</Link></div>
      <div>Episodes</div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '12px'}}>
        {episode.map(({id, name, episode}) => (
          <Link key={id} href={`/episodes/${id}`} passHref>{episode}</Link>
        ))}
      </div>
    </>
  )
}

export default Character
