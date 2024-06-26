import {LocationsData} from '@/types'
import Link from '@/components/link'

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
        <tr key={location.id} className="hoverHighlight">
          <td>{location.name}</td>
          <td>{location.type}</td>
          <td>{location.dimension}</td>
          <td style={{width: 0}}><Link href={`/locations/${location.id}`} passHref><button>View</button></Link></td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default LocationsTable
