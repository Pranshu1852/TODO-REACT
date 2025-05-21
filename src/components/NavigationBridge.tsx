import { forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";

import { sharedRef } from "../App";

const NavigationBridge = forwardRef((_, ref) => {
    const navigate = useNavigate();
  
    useImperativeHandle(ref, () => ({
      navigate: (path: string) => {
        navigate(path);
      },
    }));
  
    return null;
  });
  
  export const NavigationBridgeComponent = () => {
    return <NavigationBridge ref={sharedRef} />;
  };