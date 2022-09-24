import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('')
    const changetoup = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.seeAlert("converted to uppercase", "success")
    }
    const changetolo = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.seeAlert("Converted to lower case", "success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        

    }
    const copy = () => {
        var text = document.getElementById('myCopy');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.seeAlert("copied to clipboard", "success")
    }
    const clear = () => {
        setText('')
        props.seeAlert("your text cleared", "success")
    }
    const onChangefunc = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white', marginTop: '20px' }}>Check Out differnt text utilities..</h2>
                <h4 className="my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h4>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="myCopy" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#5779ad', color: props.mode === 'light' ? 'black' : 'white', caretColor: 'white' }} rows="6" value={text} onChange={onChangefunc}></textarea>

                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={changetoup}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={changetolo}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={speak}>Listen your Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={copy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clear}>Clear the Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Summary Of Your Text</h3>
                <p>The total words in your text <b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> and characters are <b>{text.length}</b>.</p>
                <p>Time required to read the text <b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b></p>
                <h3>Text Preview</h3>
                <p>{text.length > 0 ? text : "Please add something to preview!!"}</p>
            </div>
        </>
    )
}
