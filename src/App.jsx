function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-violet-500">Hello world!</h1>
      <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>

      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    </>
  );
}

export default App;
