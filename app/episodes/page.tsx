import {GET_EPISODES} from '@/queries/episodes'
import getClient from '@/lib/apolloClient'
import {EpisodesData} from '@/types'
import Pagination from '@/components/pagination'
import Link from 'next/link'

type Props = {searchParams: {page: string}}

const EpisodesTable = ({episodes}: {episodes: EpisodesData['episodes']['results']}) => {
  return (
    <table style={{width: '100%'}}>
      <thead style={{textAlign: 'left'}}>
      <tr>
        <th>Name</th>
        <th>Episode</th>
        <th>Air Date</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {episodes.map((episode) => (
        <tr key={episode.id}>
          <td>{episode.name}</td>
          <td>{episode.episode}</td>
          <td>{episode.air_date}</td>
          <td><Link href={`/episodes/${episode.id}`} passHref><button>View</button></Link></td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

const Episodes: React.FC<Props> = async ({searchParams}) => {
  const page = parseInt(searchParams?.page) || 1
  const {data} = await getClient().query<EpisodesData>({query: GET_EPISODES, variables: {page}})

  return (
    <div>
      <h1>Episodes</h1>
      <EpisodesTable episodes={data.episodes.results} />
      <Pagination page={page} info={data.episodes.info} />
    </div>
  )
}

export default Episodes
