import { createContext, ReactNode } from "react";

interface FiltersContextType {
  color: string;
  minPrice: number;
  maxPrice: number;
}

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

export function FiltersProvider({ children }: FiltersProviderProps) {
  return (
    <FiltersContext.Provider
      value={{ color: "all", minPrice: 10, maxPrice: 50 }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
