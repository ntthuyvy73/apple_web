import {
    Features,
    Footer,
    Hero,
    Hightlights,
    Model,
    Navbar,
} from "./components";
import HowItWork from "./components/HowItWork";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Hightlights />
            <Model />
            <Features />
            <HowItWork />
            <Footer />
        </>
    );
}

export default App;
