import getClient from '@/lib/apolloClient'
import {CharacterDetailData} from '@/types'
import {GET_CHARACTER} from '@/queries/characters'
import Link from '@/components/link'

const Character = async ({params}: {params: {id: string}}) => {
  const {data} = await getClient().query<CharacterDetailData>({query: GET_CHARACTER, variables: {id: params.id}})
  const {episode, origin, location, ...rest} = data.character
  return (
    <div style={{display: 'flex', gap: 16}}>
      <div><img src={rest.image} /></div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 4, justifyContent: 'space-between'}}>
        <div><strong>Name</strong> {rest.name}</div>
        <div><strong>Status</strong> {rest.status}</div>
        <div><strong>Type</strong> {rest.type || 'Unknown'}</div>
        <div><strong>Gender</strong> {rest.gender}</div>
        <div><strong>Origin</strong> {origin.name === 'unknown' ? 'Unknown' : <Link href={`/locations/${origin.id}`}>{origin.name}</Link>}</div>
        <div><strong>Location</strong> {location.name === 'unknown' ? 'Unknown' : <Link href={`/locations/${location.id}`}>{location.name}</Link>}</div>
        <div><strong>Episodes</strong>
          {episode.length === 0 && 'None'}
          <span style={{display: 'flex', flexWrap: 'wrap', gap: '0 4px', fontSize: '12px', maxWidth: '400px'}}>
            {episode.map(({id, name, episode}) => (
              <Link key={id} href={`/episodes/${id}`} passHref>{episode}</Link>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Character
