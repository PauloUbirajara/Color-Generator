import { useState } from 'react';
import './generator.css';

export default function Generator() {
    const [generatedColor, setGeneratedColor] = useState('FFFFFF');

    function generateNewColor() {
        setGeneratedColor(
            (Math.floor(Math.random() * 0xFFFFFF))
                .toString(16)
                .toUpperCase()
        );

        // const color = document.getElementById('generator-color');
        // console.log(color);
        // console.log(generatedColor);
    }

    function saveGeneratedColor() {
        console.log()
    }

    return <div id='generator'>
        <div className='container' id='generator-container'>
            <h1>#{generatedColor}</h1>
            <div id='generator-color' style={{ backgroundColor: `#${generatedColor}` }}></div>
            <button className='generator-button' id='generator-generate' onClick={generateNewColor}>Generate</button>
            <button className='generator-button' id='generator-save' onClick={saveGeneratedColor}>Save</button>
        </div>
    </div>
}