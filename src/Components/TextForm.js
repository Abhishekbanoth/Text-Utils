import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('');
    
    const onclickedup=()=>{
        
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","Success");
    }
    const onclickedlo=()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","Success");
    }
    const onclickedcl=()=>{
        
        setText("");
        props.showAlert("Cleared Text","Success");

    }
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","Success");
    }
    const handlespace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join (" "));
        props.showAlert("Extra Spaces Removed","Success");
    }
    return (
    <>
    <div className="container" style={{color:props.mode==='light'?'Black':'white'}}>
        <center>
            <h3>{props.heading}</h3>
        <div className="texte">
            {/* <label htmlFor='example' className='forclass'>{props.heading}</label><br></br> */}
            <textarea  className='FORM my-3' value={text} id='example' rows={10} cols={80} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#c1c1c1':'white',color:props.mode==='dark'?'white':'black'}}></textarea><br></br>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={onclickedup} >UPPERCASE</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={onclickedlo}>LOWERCASE</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={onclickedcl}>CLEAR</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handlecopy}>COPY</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handlespace}>REMOVE EXTRA SPCAE</button>
            </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>
                Test Summury
            </h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <h3>Preview</h3>
            <p>
                {text.length>0?text:'enter text to preview'}
            </p>
        </div>
        </center>
        </div>
    </>
    );
}
