import { createContext, useState } from "react";
import {
  FiltersContextType,
  FiltersProps,
  FiltersProviderProps,
} from "../types/types";

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState<FiltersProps>({
    color: "all",
    minPrice: 8,
    maxPrice: 40,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
