// Test file for CharacterCard component
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CharacterCard from "./CharacterCard";
import type { ICharacter } from "../../api/types";

// Test data for character (only required fields)
const mockCharacter: ICharacter = {
  id: 1,
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: 1,
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: "",
  edited: "",
  url: "",
  image: "https://example.com/luke.jpg",
};

describe("CharacterCard", () => {
  it("displays character name", () => {
    // Arrange: create mock handler function
    const handleShowDetails = vi.fn();

    // Act: render component
    render(
      <CharacterCard
        character={mockCharacter}
        handleShowDetails={handleShowDetails}
      />
    );

    // Assert: character name should be on the page
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });

  it("calls handleShowDetails when clicking on card", async () => {
    // Arrange
    const handleShowDetails = vi.fn();
    const user = userEvent.setup();
    render(
      <CharacterCard
        character={mockCharacter}
        handleShowDetails={handleShowDetails}
      />
    );

    // Act: click on card
    const card = screen.getByText("Luke Skywalker").closest(".CharacterCard");
    await user.click(card!);

    // Assert: function should be called once
    expect(handleShowDetails).toHaveBeenCalledTimes(1);
  });
});
