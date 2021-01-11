import { useState, useEffect } from 'react';
import ColorHistory from '../ColorHistory/colorhistory';
import './generator.css';

export default function Generator() {

    const [previousColorList, previousGeneratedColor] =
        [
            JSON.parse(localStorage.getItem("color-history")) || [],
            JSON.parse(localStorage.getItem("generated-color")) || 'FFFFFF'
        ];

    const [colorList, setColorList] = useState(previousColorList);
    const [generatedColor, setGeneratedColor] = useState(previousGeneratedColor);

    useEffect(() => {
        localStorage.setItem("color-history", JSON.stringify(colorList));
    }, [colorList]);

    useEffect(() => {
        localStorage.setItem("generated-color", JSON.stringify(generatedColor));
    }, [generatedColor]);

    const colorListLimit = 30;

    function generateNewColor() {
        setGeneratedColor(
            (Math.floor(Math.random() * 0xFFFFFF))
                .toString(16)
                .toUpperCase()
        );
    }

    function saveColor() {
        const newColorList = [generatedColor, ...colorList];
        if (newColorList.length > colorListLimit) newColorList.length = colorListLimit;

        setColorList(newColorList);
    }

    function clearHistory() {
        setColorList([]);
    }

    return <div id='main'>
        <ColorHistory
            colorList={colorList}
            clearHistory={clearHistory}
        />

        <div id='generator'>
            <div className='container' id='generator-container'>
                <h1>#{generatedColor}</h1>
                <div id='generator-color' style={{ backgroundColor: `#${generatedColor}` }}></div>
                <button className='button' id='generator-generate' onClick={generateNewColor}>Generate</button>
                <button className='button' id='generator-save' onClick={saveColor}>Save</button>
            </div>
        </div>
    </div>
}