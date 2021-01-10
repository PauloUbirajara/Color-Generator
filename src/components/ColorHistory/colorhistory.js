import { useState } from 'react';
import './colorhistory.css';

export default function ColorHistory() {

    const [colorList, setColorList] = useState([]);

    function addNewColor(newColor) {
        setColorList([...colorList, newColor]);
    }

    const el = colorList.map((color, index) => {
        return <div>
            <div id='item-color' key={index}></div>
            <p>{color}</p>
        </div>
    });

    return <div id='color-history' className='container'>
        <h3>Last colors</h3>
        <div id='color-list'>
            {el}
        </div>
    </div>;
} 