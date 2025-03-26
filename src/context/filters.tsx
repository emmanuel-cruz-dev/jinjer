import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface FiltersProps {
  color: string;
  minPrice: number;
  maxPrice: number;
}

interface FiltersContextType {
  filters: FiltersProps;
  setFilters: Dispatch<SetStateAction<FiltersProps>>;
}

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState<FiltersProps>({
    color: "all",
    minPrice: 10,
    maxPrice: 50,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
