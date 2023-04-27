import React, {useState} from 'react'

export default function Textform(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
   const handleUpClick =()=>
    {
        //console.log("Uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLowClick =()=>
    {
        //console.log("Uppercase was clicked"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handleClearClick =()=>
    {
        //console.log("Uppercase was clicked"+text)
        let newText=''
        setText(newText)
        props.showAlert("Text has been cleared","success")
    }
    const handleCopyClick= ()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been copied","success")
    }

    const [text, setText]=useState('');
  return (
    <>
<div>
<div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>Your text summary</h1>
    <p>{text.split(" ").length}Words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>

</div>
</>
  )
}
