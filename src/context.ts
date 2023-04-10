import { createContext } from 'react';

export const HomeContext = createContext<{ foundHandler: (params: string) => void }>({
  foundHandler: () => '',
});
