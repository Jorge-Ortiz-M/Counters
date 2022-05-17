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
                <button id='btn-danger' onClick={() => (props.decrease(props.number))}><RemoveCircleIcon /></button>
                <button id='btn-success' onClick={() => (props.increase(props.number))}><AddCircleIcon /></button>
            </div>
        </div>
    );
}

export default Counter;
