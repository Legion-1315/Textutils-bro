import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here');
    const clickForUpper = () =>
    {
        // console.log('clicked');
        let x = text.toUpperCase();
        setText(x);
        props.showAlert('Convertted to UpperCase','danger');
    }
    const handleOnChange = (e) =>
    {
        setText(e.target.value);
        }
    return (
        <>
            <div>
            <h1 className='my-3' style={{color:props.Mode === 'dark' ? '#d9d7d7' : 'grey'}}>Enter your text here</h1>
            <div className="mb-3" >
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.Mode === 'dark' ? '#38383e' : 'white', color:props.Mode === 'dark' ? 'white' : 'grey'}} value={text} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={clickForUpper}>To UPPERCASE</button>
            </div>
        </>
    );
}
