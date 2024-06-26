import getClient from '@/lib/apolloClient'
import {LocationData} from '@/types'
import {GET_LOCATION} from '@/queries/locations'
import Link from '@/components/link'

const Episode = async ({params}: {params: {id: string}}) => {
  const {data} = await getClient().query<LocationData>({query: GET_LOCATION, variables: {id: params.id}})
  const {residents, ...rest} = data.location
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 4, justifyContent: 'space-between'}}>
      <div><strong>Name</strong> {rest.name}</div>
      <div><strong>Type</strong> {rest.type}</div>
      <div><strong>Dimension</strong> {rest.dimension}</div>
      <div><strong>Residents</strong>
        {residents.length === 0 && 'None'}
        <span style={{display: 'flex', flexWrap: 'wrap', gap: '0 4px', fontSize: '12px', maxWidth: '400px'}}>
          {residents.map(({id, name}) => (
            <Link key={id} href={`/characters/${id}`} passHref>{name}</Link>
          ))}
        </span>
      </div>
    </div>
  )
}

export default Episode
