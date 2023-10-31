import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import {lazy, Suspense, useState} from "react";

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const HOME_URL = process.env.REACT_APP_HOME_URL;
const Header = lazy(() => import('./pages/home/Header.js'))
const Footer = lazy(() => import('./pages/home/Footer.js'))

function App() {
    let [item, setItem] = useState(1)
    return <>
        <Routes>
            <Route path={"/"} element={<>

                <Header></Header>
                <Outlet></Outlet>
                <Suspense fallback={<div>로딩중입니다.</div>}>
                    <Footer></Footer>
                </Suspense>
            </>}>
                <Route path={"/1"} element={<Page1 item={item} setItem={setItem}></Page1>}></Route>
                <Route path={"/2"} element={<main>2번 페이지입니다.</main>}></Route>
                <Route path={"/3"} element={<main>3번 페이지입니다.</main>}></Route>
                <Route path={"/4"} element={<main>4번 페이지입니다.</main>}></Route>
            </Route>


            <Route path={"*"} element={<div>404 페이지입니다.</div>}></Route>

        </Routes>
        {item}

    </>
}

function Page1({item, setItem}) {
    let num = 1;
    return <main>
        <div>1번 페이지입니다.</div>
        <div>
            <button onClick={() => {
                setItem(!item)
            }}>클릭
            </button>
            {item&&<Detail></Detail>}

        </div>
    </main>
}
function Detail() {
    return<>
        <div>상품 디테일입니다.</div></>
}

export default App;
