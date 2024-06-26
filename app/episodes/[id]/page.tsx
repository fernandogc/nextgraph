import getClient from '@/lib/apolloClient'
import {EpisodeData} from '@/types'
import {GET_EPISODE} from '@/queries/episodes'
import Link from '@/components/link'

const Episode = async ({params}: {params: {id: string}}) => {
  const {data} = await getClient().query<EpisodeData>({query: GET_EPISODE, variables: {id: params.id}})
  const {characters, ...rest} = data.episode
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 4, justifyContent: 'space-between'}}>
      <div><strong>Name</strong> {rest.name}</div>
      <div><strong>Air Date</strong> {rest.air_date}</div>
      <div><strong>Episode</strong> {rest.episode}</div>
      <div><strong>Characters</strong>
        {characters.length === 0 && 'None'}
        <span style={{display: 'flex', flexWrap: 'wrap', gap: '0 4px', fontSize: '12px', maxWidth: '400px'}}>
          {characters.map(({id, name}) => (
            <Link key={id} href={`/characters/${id}`} passHref>{name}</Link>
          ))}
        </span>
      </div>
    </div>
  )
}

export default Episode
