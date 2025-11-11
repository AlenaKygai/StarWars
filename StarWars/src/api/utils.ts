import { api } from "./base";

export const fetchAllPages = async <T>(endpoint: string): Promise<T[]> => {
  let allItems: T[] = [];
  let page = 1;
  let hasNext = true;

  while (hasNext) {
    const response = await api.get<{ results: T[]; next: string | null }>(
      endpoint,
      {
        params: { page },
      }
    );

    allItems = allItems.concat(response.data.results);
    hasNext = !!response.data.next;
    page++;
  }

  return allItems;
};
