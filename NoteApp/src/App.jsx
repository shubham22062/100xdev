import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setNotes([...notes, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  const handleDeleteAll = () => {
    setNotes([]);
  };

  const handleEditNote = (index, newValue) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newValue;
    setNotes(updatedNotes);
    setEditingIndex(null);
  };

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/28/e4/49/28e4493121ed9697ba2059069322b5aa.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="min-h-screen bg-gray-100/90">
        {/* Navbar */}
        <nav className="bg-black/60 text-white px-4 md:px-6 py-4 shadow-md flex items-center gap-2">
          <img
            src="https://i.pinimg.com/736x/47/43/02/4743021d28bf0ae3e37c76edde47190c.jpg"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="italic text-lg md:text-2xl font-bold">JotDown</h1>
        </nav>

        {/* Input Container */}
        <div className="p-4 md:p-7 max-w-md md:max-w-lg mx-auto mt-6 bg-gray-100 rounded-lg shadow-lg">
          <form onSubmit={handleAddNote} className="flex flex-col gap-2 mb-4">
            <label htmlFor="myInput" className="text-sm md:text-base">
              Enter Text
            </label>
            <input
              type="text"
              id="myInput"
              value={inputValue}
              onChange={handleChange}
              placeholder="Type Something.."
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600"
            >
              Add Note
            </button>
          </form>
          <button
            onClick={handleDeleteAll}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600"
          >
            Delete All
          </button>
        </div>

        {/* Notes Container */}
        <div className="max-w-md md:max-w-lg mx-auto mt-4 space-y-4 px-2 md:px-0">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
            >
              {/* Editing Mode */}
              {editingIndex === index ? (
                <input
                  type="text"
                  defaultValue={note}
                  autoFocus
                  onBlur={(e) => handleEditNote(index, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleEditNote(index, e.target.value);
                    }
                  }}
                  className="flex-1 w-full md:w-auto border px-2 py-1 rounded-md focus:ring-2 focus:ring-green-400"
                />
              ) : (
                <>
                  <span className="flex-1 break-words">{note}</span>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => setEditingIndex(index)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-sm md:text-base"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteNote(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm md:text-base"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
