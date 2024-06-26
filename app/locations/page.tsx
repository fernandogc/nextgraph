import {GET_LOCATIONS} from '@/queries/locations'
import getClient from '@/lib/apolloClient'
import {LocationsData} from '@/types'
import Pagination from '@/components/pagination'
import LocationsTable from '@/app/locations/locationsTable'

type Props = {searchParams: {page: string}}


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
