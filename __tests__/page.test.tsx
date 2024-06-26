import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import LocationsTable from '@/app/locations/locationsTable'

jest.mock('../components/link', () => ({
  __esModule: true,
  default: ({passHref, ...props}) => <a {...props} />
}))

test('renders table with correct columns', () => {
  const locations = [
    { id: 1, name: 'Location 1', type: 'Type 1', dimension: 'Dimension 1' },
    { id: 2, name: 'Location 2', type: 'Type 2', dimension: 'Dimension 2' }
  ]

  render(<LocationsTable locations={locations} />)

  expect(screen.getByText('Name')).toBeInTheDocument()
  expect(screen.getByText('Type')).toBeInTheDocument()
  expect(screen.getByText('Dimension')).toBeInTheDocument()
  expect(screen.getByText('Actions')).toBeInTheDocument()
})

test('displays data correctly', () => {
  const locations = [
    { id: 1, name: 'Location 1', type: 'Type 1', dimension: 'Dimension 1' },
    { id: 2, name: 'Location 2', type: 'Type 2', dimension: 'Dimension 2' }
  ]

  render(<LocationsTable locations={locations} />)

  locations.forEach((location) => {
    expect(screen.getByText(location.name)).toBeInTheDocument()
    expect(screen.getByText(location.type)).toBeInTheDocument()
    expect(screen.getByText(location.dimension)).toBeInTheDocument()
  })
})

test('renders "View" button with correct link', () => {
  const locations = [{ id: 1, name: 'Location 1', type: 'Type 1', dimension: 'Dimension 1' }]
  render(<LocationsTable locations={locations} />)

  const viewButton = screen.getByText('View')
  expect(viewButton).toBeInTheDocument()
  expect(viewButton.closest('a')).toHaveAttribute('href', '/locations/1')
})
