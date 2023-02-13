import Form from './Form'

function Contact(){
    return(
        <section id="contact" class="pt-5">
            <div className="col-md-12 lemontitle text-align-right px-5">Always Trying</div>
            <div className="col-md-12 juasub text-align-right px-5">#도전적인 #열정적인 #책임감 있는 #리더십 있는<br/>항상 끈임없이 노력하는 프론트엔드 개발자가 되겠습니다. <br/>저에 대해 더 궁금하시다면 아래 폼을 작성해주시면 감사하겠습니다.</div>
            <div className="row">
                <Form></Form>
                <div className="col-md-6">
                    <img src="./img/arrow.png" alt="" className='pt-5'/>
                </div>
            </div>            
        </section>
)}


export default Contact;