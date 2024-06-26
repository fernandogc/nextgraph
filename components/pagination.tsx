import React from 'react'
import Link from '@/components/link'
import {Info} from '@/types'

const Pagination = ({page, info}: {page: number; info: Info}) => {
  return (
    <div style={{marginTop: 32, display: 'flex', justifyContent: 'space-between', maxWidth: 400}}>
      <div>Showing {page} of {info.pages} entries</div>
      <div>
        <Link href={`?page=${info.prev}`} passHref>
          <button disabled={!info.prev}>Previous</button>
        </Link>
        <Link href={`?page=${info.next}`} passHref>
          <button disabled={!info.next}>Next</button>
        </Link>
      </div>
    </div>
  )
}

export default Pagination
