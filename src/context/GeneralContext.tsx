import {
  createContext,
} from 'react';

import type { GeneralContextType } from '../types/GeneralContextType';


const GeneralContext = createContext<GeneralContextType | null>(null);


export default GeneralContext;
