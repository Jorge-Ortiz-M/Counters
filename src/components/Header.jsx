import headerItems from '../objects/header';

function Header(){
    return (
        <header>
            <nav>
                <p>
                    Counters App
                </p>
                <ul>
                    {headerItems.map((item, index) => {return <li key={index}>{item}</li>})}
                </ul>
            </nav>
        </header>
    );
}

export default Header;