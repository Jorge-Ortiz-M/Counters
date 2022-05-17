import {year, owner} from '../objects/footer';

function Footer(){
    return(
        <footer>
            <p>Copyrights @ {year} | {owner.name}</p>
        </footer>
    );
}

export default Footer;
