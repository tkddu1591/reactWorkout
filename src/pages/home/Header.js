import {Link, useNavigate} from "react-router-dom";
import {HOME_URL} from "../../App";

function Header() {
    let navigate = useNavigate();
    let prodNo = 1;
    return <>
        <header>
            <div>헤더입니다.</div>
            <div>
                <Link to={`${HOME_URL}/1?prodNo=`+prodNo}>1번 페이지</Link>
                <Link to={`${HOME_URL}/2?prodNo=`+prodNo}>2번 페이지</Link>
                <Link to={`${HOME_URL}/3?prodNo=`+prodNo}>3번 페이지</Link>
                <span onClick={() => {
                    navigate('/4')
                }}>4번페이지</span>
                <span onClick={() => {
                    navigate(+1)
                }}>앞으로가기</span>
                <span onClick={() => {
                    navigate(-1)
                }}>뒤로가기</span>
                <span onClick={() => {
                    navigate("/")
                }}>홈</span>
            </div>
        </header>
    </>
}

export default Header