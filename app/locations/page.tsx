import {GET_LOCATIONS} from '@/queries/locations'
import getClient from '@/lib/apolloClient'
import {LocationsData} from '@/types'
import Pagination from '@/components/pagination'
import Link from 'next/link'

type Props = {searchParams: {page: string}}

const LocationsTable = ({locations}: {locations: LocationsData['locations']['results']}) => {
  return (
    <table style={{width: '100%'}}>
      <thead style={{textAlign: 'left'}}>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Dimension</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location) => (
          <tr key={location.id}>
            <td>{location.name}</td>
            <td>{location.type}</td>
            <td>{location.dimension}</td>
            <td><Link href={`/locations/${location.id}`} passHref><button>View</button></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Locations: React.FC<Props> = async ({searchParams}) => {
  const page = parseInt(searchParams?.page) || 1
  const {data} = await getClient().query<LocationsData>({query: GET_LOCATIONS, variables: {page}})

  return (
    <div>
      <h1>Locations</h1>
      <LocationsTable locations={data.locations.results}/>
      <Pagination page={page} info={data.locations.info} />
    </div>
  )
}

export default Locations
