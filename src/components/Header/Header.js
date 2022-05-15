import './Header.scss';


import logo from './logo.svg';

export function Header() {
    return (
        <header>
          
            
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <h2 className="App-link">
                Course Rank<br/>
                </h2>
                <p>
                    Helping students all over the world<br/>
                    with a place to compare and discus for rating online courses.<br/>
                    You can leave here your opinion and your experience as a costumer and student.
                </p>
            </div>
        </header>
    )
};