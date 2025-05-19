import type { ReactNode } from "react";


import GeneralContextProvider from "../context/GeneralContextProvider";
import { TodoContextProvider } from "../features/Todos/context/TodoContext";

function ContextWrapper({ children }: { children: ReactNode }) {
    return (
      <GeneralContextProvider>
        <TodoContextProvider>{children}</TodoContextProvider>
      </GeneralContextProvider>
    );
  }

export default ContextWrapper;