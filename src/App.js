import {useState} from "react"

function App() {

  const [word,setWord] = useState('')

  return (
    <div className="flex h-screen justify-center items-center gap-3">
     <input 
     type="text"
     className="outline-none border border-blue-500 px-4 py-2 rounded-md w-[400px]"
     value={word}
     onChange={(e)=>{setWord(e.target.value)}}
     />
     <button
     type="button"
     className="outline-none rounded-md px-4 py-2 bg-blue-500 text-white"
     >
       Add
     </button>
    </div>
  );
}

export default App;
