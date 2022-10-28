import React, { useState } from "react";

function App() {
  const [words, setWords] = useState("");

  function handleWords(e) {
    setWords(() => e.target.value);
  }
  return (
    <div className="App h-screen flex justify-center items-center text-center">
      <div className="flex flex-col rounded-lg shadow-md justify-between border-2 py-4 min-w-[200px] min-h-[300px] bg-gray-100">
        <h1 className="text-2xl">Word Counter</h1>

        <textarea
          className="min-h-[250px] outline-none"
          placeholder="add sentences to count words: "
          value={words}
          onChange={handleWords}
        />
        <p>{words && words.split(" ").length - 1 + " words"} </p>
      </div>
    </div>
  );
}

export default App;
