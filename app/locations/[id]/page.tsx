import getClient from '@/lib/apolloClient'
import {LocationData} from '@/types'
import {GET_LOCATION} from '@/queries/locations'
import Link from 'next/link'

const Episode = async ({params}: {params: {id: string}}) => {
  const {data} = await getClient().query<LocationData>({query: GET_LOCATION, variables: {id: params.id}})
  const {residents, ...rest} = data.location
  return (
    <>
      <pre>Location {JSON.stringify(rest, null, 2)}</pre>
      <div>Residents</div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '12px'}}>
        {residents.map(({id, name}) => (
          <Link key={id} href={`/characters/${id}`} passHref>{name}</Link>
        ))}
      </div>
    </>
  )
}

export default Episode
