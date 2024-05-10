import './App.css'
import Timer from './components/Timer.jsx'
import Translit from "./components/Translit";

function App() {
    return (
        <>
            <div className='block'>
                <Timer/>
                <Translit/>
            </div>

        </>
    );
}

export default App;
