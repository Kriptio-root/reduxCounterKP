import './scss/app.scss';
import ClassCounter from '../class-counter/class-counter';
import FunctionalCounter from '../functional-counter/functional-counter';

function App() {
    return (
        <div className="app">
            <ClassCounter count={0}/>
            <FunctionalCounter count={0}/>
        </div>
    )
}

export default App;