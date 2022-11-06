import { React, useState } from 'react';
import Main from '../main/Main';

const FileEdit = () => {

  const [textCode, setTextCode] = useState({});
  const [words, setWords] = useState('');
  const [numRows, setNumRows] = useState(1);


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
    }
  }

  const handleCodeChange = (e) => {
    setTextCode(e.target.value);
    console.log();

    // increment row count with new textarea line
    // if (words == '\r\n') {
    //   setNumRows(() => numRows + 1);
    //   console.log(numRows + " new line ");
    //   console.log('a');
    // }

  }
  console.log(textCode);


  return <Main>
    <div className='p-2 flex w-full h-full  bg-black/30'>

      <div className='flex flex-col'>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>1</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>2</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>3</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>4</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>5</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>6</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>7</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>8</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>9</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>10</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>11</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>12</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>13</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>14</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>15</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>16</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>17</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>18</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>19</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>20</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>21</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>22</div>
        <div className='px-4 text-right  font-semibold text-gray-500 cursor-pointer'>23</div>
      </div>

      <textarea onChange={handleCodeChange} className='px-2 w-full h-fit bg-transparent' name="codeEdit" id="codeEdit" cols="30" rows={numRows}>var x = 10 - 2 ; </textarea>

    </div>

  </Main>;

};

export default FileEdit;
