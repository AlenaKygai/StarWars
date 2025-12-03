// Test file for CharactersList component
// Файл тестов для компонента CharactersList
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CharactersList from './CharactersList'
import type { ICharacter } from '../../api/types'

// Replace real hook with mock for testing
const mockUseCharactersList = vi.fn()
vi.mock('../../hooks/useCharactersList', () => ({
    default: () => mockUseCharactersList(),
}))

// Test data for characters (only required fields)
const mockCharacter: ICharacter = {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 1,
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
    image: 'https://example.com/luke.jpg',
}

const mockCharacter2: ICharacter = {
    id: 2,
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 1,
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
    image: 'https://example.com/vader.jpg',
}

// Default mock data for hook (to avoid repetition)
const getDefaultMockData = () => ({
    data: [mockCharacter],
    isLoading: false,
    error: null,
    pageCount: 1,
    handleShowDetails: vi.fn(),
    handlePageClick: vi.fn(),
})

describe('CharactersList', () => {
    // Clear all mocks before each test
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('displays list of characters', () => {
        // Arrange: set up mock hook with data for two characters
        mockUseCharactersList.mockReturnValue({
            ...getDefaultMockData(),
            data: [mockCharacter, mockCharacter2],
        })

        // Act: render component
        render(<CharactersList />)

        // Assert: both characters should be on the page
        expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
        expect(screen.getByText('Darth Vader')).toBeInTheDocument()
    })

    it('shows loading when data is being fetched', () => {
        // Arrange: set up mock with loading state
        mockUseCharactersList.mockReturnValue({
            ...getDefaultMockData(),
            data: undefined,
            isLoading: true,
            pageCount: 0,
        })

        // Act
        render(<CharactersList />)

        // Assert: loading indicator should be displayed
        expect(screen.getByAltText('Loading...')).toBeInTheDocument()
    })

    it('shows error message when loading fails', () => {
        // Arrange: set up mock with error
        const errorMessage = 'Не удалось загрузить персонажей'
        mockUseCharactersList.mockReturnValue({
            ...getDefaultMockData(),
            data: undefined,
            isLoading: false,
            error: new Error(errorMessage),
            pageCount: 0,
        })

        // Act
        render(<CharactersList />)

        // Assert: error message should be displayed
        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument()
    })

    it('displays pagination', () => {
        // Arrange: set up mock with multiple pages
        mockUseCharactersList.mockReturnValue({
            ...getDefaultMockData(),
            pageCount: 5,
        })

        // Act
        render(<CharactersList />)

        // Assert: pagination component should be on the page
        const pagination = screen.getByRole('navigation', { hidden: true })
        expect(pagination).toBeInTheDocument()
    })

    it('calls handleShowDetails when clicking on character card', async () => {
        // Arrange
        const handleShowDetails = vi.fn()
        const user = userEvent.setup()
        mockUseCharactersList.mockReturnValue({
            ...getDefaultMockData(),
            handleShowDetails,
        })

        // Act: render and click on card
        render(<CharactersList />)
        const characterCard = screen.getByText('Luke Skywalker').closest('.CharacterCard')
        await user.click(characterCard!)

        // Assert: function should be called
        expect(handleShowDetails).toHaveBeenCalled()
    })

    it('closes modal when clicking close button', async () => {
        // This test is no longer relevant because the modal has been removed
        // Keeping the test body empty to avoid relying on non‑existent UI
    })

    it('does not show modal when character is not selected', () => {
        // This test is no longer relevant because the modal has been removed
        // Keeping the test body empty to avoid relying on non‑existent UI
    })
})

