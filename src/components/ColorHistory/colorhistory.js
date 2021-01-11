import './colorhistory.css';

export default function ColorHistory(props) {

    const el = props.colorList.map((color, index) => {
        return <div id='item-container' key={index}>
            <div id='item-color' key={`color-${index}`} style={{ backgroundColor: `#${color}` }}></div>
            <p key={`item-${index}`}>#{color}</p>
        </div>
    });

    return <div id='color-history' className='container'>
        <h3>Last colors</h3>
        <div id='color-list'>
            {el}
        </div>
        <button className='button' id='history-clear' onClick={props.clearHistory}>Clear</button>
    </div>;
} 