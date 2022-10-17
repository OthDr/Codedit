import { React, useState } from 'react';
import Main from '../main/Main';

const FileEdit = () => {

  const [textCode, setTextCode] = useState('');
  const [numRows, setNumRows] = useState(0);

  const handleCodeChange = (e) => {
    setTextCode(e.target.value);
    
    // increment row count with new textarea line
    if (e.target.value === '\r\n') {
      setNumRows(() => numRows + 1);
      console.log(numRows+" new line ");
    }

  }
  console.log(textCode);
  return <Main>
    <div className='p-2 flex w-full h-full  bg-black/30'>
      <div className='flex flex-col'>
        <div className='px-4 text-right  font-semibold text-gray-500'>1</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>2</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>3</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>4</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>5</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>6</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>7</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>8</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>9</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>10</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>11</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>12</div>
        <div className='px-4 text-right  font-semibold text-gray-500'>13</div>
      </div>

      <textarea onChange={handleCodeChange} className='px-2 w-full h-full bg-transparent' name="codeEdit" id="codeEdit" cols="30" rows="10">var x = 10 - 2 ; </textarea>
    </div>
  </Main>;
};

export default FileEdit;
