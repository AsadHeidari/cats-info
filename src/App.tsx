import CatVideo from "./components/CatVideo";
import CatsInfo from "./components/CatsInfo";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-[100dvh] flex-col md:flex-row mb-52 md:mb-0">
        <CatVideo />
        <CatsInfo />
      </div>
    </>
  );
}

export default App;
