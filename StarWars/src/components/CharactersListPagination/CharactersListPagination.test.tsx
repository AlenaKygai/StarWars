// Test file for CharactersListPagination component
// Файл тестов для компонента CharactersListPagination
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CharactersListPagination from './CharactersListPagination'

describe('CharactersListPagination', () => {
    it('displays pagination component', () => {
        // Arrange: create mock handler function
        const handlePageClick = vi.fn()

        // Act: render component with 10 pages
        render(<CharactersListPagination pageCount={10} handlePageClick={handlePageClick} />)

        // Assert: pagination component should be on the page
        const pagination = screen.getByRole('navigation', { hidden: true })
        expect(pagination).toBeInTheDocument()
    })

    it('calls handlePageClick when clicking next page button', async () => {
        // Arrange
        const handlePageClick = vi.fn()
        const user = userEvent.setup()
        render(<CharactersListPagination pageCount={10} handlePageClick={handlePageClick} />)

        // Act: click on "Next page" button
        const nextButton = screen.getByLabelText('Next page')
        await user.click(nextButton)

        // Assert: function should be called
        expect(handlePageClick).toHaveBeenCalled()
    })
})

