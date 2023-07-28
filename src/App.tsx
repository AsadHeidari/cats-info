import CatVideo from "./components/CatVideo";
import CatsInfo from "./components/CatsInfo";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-[100dvh]">
        <CatVideo />
        <CatsInfo />
      </div>
    </>
  );
}

export default App;
