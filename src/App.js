import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Detail from "./Pages/Detail";
import ResultPage from "./Pages/ResultPage";
import SearchCar from "./Pages/SearchCar";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SearchCar />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Layout>
  );
}

export default App;
