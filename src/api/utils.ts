import { api } from "./base";

// Fetches all pages from a paginated API endpoint
export const fetchAllPages = async <T>(endpoint: string): Promise<T[]> => {
  let allItems: T[] = [];
  let page = 1;
  let hasNext = true;

  // Loop through all pages until there are no more pages
  while (hasNext) {
    const response = await api.get<{ results: T[]; next: string | null }>(
      endpoint,
      {
        params: { page },
      }
    );

    // Concatenate current page results to the accumulator
    allItems = allItems.concat(response.data.results);
    // Check if there is a next page
    hasNext = !!response.data.next;
    page++;
  }

  return allItems;
};
