import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Counter(props){
    return (
        <div className='counter-card'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>
                <strong>{props.number}</strong>
            </p>
            <div>
                <button id='btn-success' onClick={() => (props.increase10(props.number))}><AddCircleIcon /></button>
                <button id='btn-danger' onClick={() => (props.decrease10(props.number))}><RemoveCircleIcon /></button>
            </div>
        </div>
    );
}

export default Counter;
