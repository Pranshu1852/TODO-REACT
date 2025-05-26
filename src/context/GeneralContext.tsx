import { createContext } from 'react';

import type { GeneralContextType } from '../types/GeneralContextType';

const GeneralContext = createContext<GeneralContextType>({
  state: {
    language: '',
    themeMode: '',
  },
  dispatch: () => {},
});

export default GeneralContext;
