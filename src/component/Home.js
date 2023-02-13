import naviDB from '../json/navidb.json';
import '../css/Hd.css'

function Home(){
    return(
        <section id="home" class="">
            <Banner></Banner>
            <UpdateDate></UpdateDate>
            <HomeFE></HomeFE>
        </section>
)}

function Banner(){
return(
    <div class="flow-container">
        <div class="flow-text">
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
        </div>
    </div>
)}

function UpdateDate(){
    return(
    <div className="updateDate d-flex align-items-center px-5">
        <img src="./img/shape1.png" alt=""/>
        <div>LAST UPDATE IS<br></br>NOV 12, 2022</div>
    </div>
)}

function HomeFE(){
    return(
        <div id="myjob" class="d-flex justify-content-center letter-spacing">FRONTEND ENGINEER</div>
)}

export default Home;