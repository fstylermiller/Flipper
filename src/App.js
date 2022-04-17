import './App.css';

function App() {
  const handleClick = () => {
    const dialogConfig = {
      title: 'Select images, or a folder',
      properties: [
        'openFile',
        'openDirectory',
        'multiSelections'
      ],
    };
    electron.openDialog('showOpenDialog', dialogConfig)
      .then(result => console.log("RESULT: ", result));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>
        Open Dialog
      </button>
    </div>
  );
}

export default App;
