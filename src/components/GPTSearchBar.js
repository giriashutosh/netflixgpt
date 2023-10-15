import React,{useRef} from 'react';
import openai
 from '../utils/openai';
const GPTSearchBar = () => {
 const searchText = useRef(null);
 const getGptSuggestionHandler = async() => {
    console.log(searchText.current.value)
    //make an api call and get gpt results
    const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResult.choices);
 }
  return (
    <div className='bg-black absolute flex justify-center items-center w-1/2 h-20 mt-40 p-2 ml-96'>
      <form className='w-full flex gap-2 h-10' onSubmit={(e) => e.preventDefault()}>
        <input ref = {searchText} type="text" className="w-full rounded-lg p-2" placeholder="Search any type of movies here..." />
        <button className='bg-red-900 p-2 rounded-lg text-white w-24' onClick={getGptSuggestionHandler}>Search</button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
