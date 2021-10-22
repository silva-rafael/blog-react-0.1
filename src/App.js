// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';

function App() {
    return ( 
        <div>
            <header>
                <Menu />
            </header>
            <section className="container">
                <Header />
            </section>
        </div>

    );
}

export default App;