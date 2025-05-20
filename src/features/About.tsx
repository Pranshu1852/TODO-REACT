import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";

function About() {
    const { showBoundary } = useErrorBoundary();

    useEffect(()=>{
        showBoundary('About page error')
    },[])

    return (
        <h1>About</h1>
    );
}

export default About;