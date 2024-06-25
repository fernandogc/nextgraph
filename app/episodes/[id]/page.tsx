import getClient from '@/lib/apolloClient'
import {EpisodeData} from '@/types'
import {GET_EPISODE} from '@/queries/episodes'
import Link from 'next/link'

const Episode = async ({params}: {params: {id: string}}) => {
  const {data} = await getClient().query<EpisodeData>({query: GET_EPISODE, variables: {id: params.id}})
  const {characters, ...rest} = data.episode
  return (
    <>
      <pre>Episode {JSON.stringify(rest, null, 2)}</pre>
      <div>Characters</div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '12px'}}>
        {characters.map(({id, name}) => (
          <Link key={id} href={`/characters/${id}`} passHref>{name}</Link>
        ))}
      </div>
    </>
  )
}

export default Episode
