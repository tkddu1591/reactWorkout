import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import {lazy, Suspense, useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {changeMember, insertMember} from "./slice/memberSlice";

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
                <Route path={"/1"} element={<Page1 item={1} setItem={setItem}></Page1>}></Route>
                <Route path={"/2"} element={<Page1 item={2} setItem={setItem}></Page1>}></Route>
                <Route path={"/3"} element={<Page1 item={3} setItem={setItem}></Page1>}></Route>
                <Route path={"/4"} element={<Page2 item={4} setItem={setItem}></Page2>}></Route>
            </Route>


            <Route path={"*"} element={<div>404 페이지입니다.</div>}></Route>

        </Routes>
        {item}

    </>
}

function Page1({item, setItem}) {
    let user = useSelector((state) => state.user)
    let dispatch = useDispatch();
    let [item2, setItem2] = useState("유저")
    return <main>
        <div>{item}번 페이지입니다.</div>
        <div>
            <button onClick={() => {
                setItem(item)
                dispatch(changeMember("member"));
                setItem2("item2")
            }}>클릭
            </button>
            {item&&<Detail></Detail>}
            {user}<br/>
            {item2}
        </div>
    </main>
}
function Page2({item, setItem}) {
    let user = useSelector((state) => state.user)
    let dispatch = useDispatch();
    let [item2, setItem2] = useState("유저")
    return <main>
        <div>{item}번 페이지입니다.</div>
        <div>
            <button onClick={() => {
                setItem(item)
                dispatch(changeMember("member"));
                setItem2("item2")
            }}>클릭
            </button>
            {item&&<Detail></Detail>}
            {user}<br/>
            {item2}
        </div>
    </main>
}
function Detail() {
    return<>
        <div>상품 디테일입니다.</div></>
}

export default App;
