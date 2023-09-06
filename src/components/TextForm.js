import React, { useState } from 'react'



// ToggleUppercase()
export default function TextForm(props) {
  const [text, SetText] = useState('Enter the text here')

  const togglechange = (event) => {
    console.log("toggle change function runs now ");
    // the event is a javascript keyword .target sets the target 
    SetText(event.target.value)

    console.log(event)
    console.log(event.target)
    console.log(event.target.value)

  }


  const toggleUppercase = () => {

    console.log('the button of enter the text was clicked');
    let newtext = text.toUpperCase();
    SetText(newtext);

  }

  const toggleLowercase = () => {

    console.log('the button of enter the text was clicked');
    let newtext = text.toLowerCase();
    SetText(newtext);

  }


  const toggleClearText = () => {
    // let oldtext = text;
    let newtext = text.replace(text, '');
    SetText(newtext);
  }

  const toggleRemovespace = () => {
    let newString = text.replace(/\s{2,}/g, ' ').trim() 
    SetText(newString);


  }

  let textstyle = { color: props.mode === 'dark' ? 'white' : 'black' }
  return (
    <>




      <div>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
        <div className="form-group "  >
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={togglechange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#3e4042' : 'white' }} rows="5"></textarea>
          <button type="submit" className="btn btn-primary my-3 mx-1" onClick={toggleUppercase} >Uppercase</button>
          <button type="submit" className="btn btn-primary my-3 mx-1" onClick={toggleLowercase} >Lowercase</button>
          <button type="submit" className="btn btn-primary my-3 mx-1" onClick={toggleClearText} >Clear Text</button>
          <button type="submit" className="btn btn-primary my-3 mx-1" onClick={toggleRemovespace} >Remove Extra Spaces</button>
        </div>

        <div >

          <h3 style={textstyle}>Analyzed data from the texts</h3>
          <p style={textstyle}> Total number of {text.split(" ").length - 1} words and {text.length} characters</p>




        </div>

        <div>
          <h3 style={textstyle}>Preview</h3>
          <p style={textstyle}>{text}</p>
        </div>

      </div>


    </>
  )
}
