import { createContext, useState } from 'react';

interface ContextProps {
  selectedTechnology: string;
  setSelectedTechnology: (value: string) => void;
}

interface TechnologyProviderProps {
    children: React.ReactNode
}

export const MainTechnologyContext = createContext<ContextProps>({
  selectedTechnology: '',
  setSelectedTechnology: () => {},
});

export const MainTechnologyProvider = ({ children }: TechnologyProviderProps) => {
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');

  return (
    <MainTechnologyContext.Provider value={{ selectedTechnology, setSelectedTechnology }}>
      {children}
    </MainTechnologyContext.Provider>
  );
};
