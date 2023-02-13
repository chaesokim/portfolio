import '../css/form.css'

function Form(){
    return(
    <div class="col-md-6 p-5">
        <div class="input-form-backgroud row">
          <div class="input-form col-md-12">
            <form className="validation-form" novalidate> 
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="name">Company</label>
                  <input type="text" className="form-control" id="name" placeholder="" required/>
                  <div className="invalid-feedback">
                    귀사의 회사명을 입력해주세요
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="nickname">Name</label>
                  <input type="text" className="form-control" id="age" placeholder=""  required/>
                  <div className="invalid-feedback">
                    담당자님의 성함을 입력해주세요
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label for="email">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="chaesofedev@gamil.com" required/>
                <div className="invalid-feedback">
                  이메일을 입력해주세요.
                </div>
              </div>

              <div className="mb-3">
                <label for="message">Message<span className="text-muted"></span></label>
                <input type="text" className="form-control" id="address2" placeholder="자유롭게 작성 부탁드립니다." />
              </div>

              <hr className="mb-4"/>
              <div className="custom-control custom-checkbox d-flex justify-content-between align-items-center">
                <div className="checkbox">
                  <input type="checkbox" className="custom-control-input" id="aggrement" required/>
                  <label className="custom-control-label px-3" for="aggrement">개인정보 수집 및 이용에 동의합니다 (<a href="#popagree" id="popClick">약관보기</a>)</label>
                </div>
                <button className="formbtn btn btn-warning btn-md btn-block" type="submit">SUBMIT</button>
              </div>
              
            </form>
            
            
            <div class="mt-3 text-center text-small">
                <p class="mb-1">&copy; CHAEHYUN KIM</p>
            </div>
          </div>
        </div>
    </div>
)}

export default Form;