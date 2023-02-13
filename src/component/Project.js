import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import interviewDBlink from '../json/preinterview.json';
import Github from './logo/github';
import Notion from './logo/Notion';

const Preinterview = (props) => {
    
    const interviewjson = interviewDBlink[props.contentid];   
   
    return(
      <section id={props.contentid} className="pjtsection text-center">
          {
              interviewjson.map(function(value, index){
                if(value.imgleft){
                  return(
                    <div className="row mx-0">
                      <div className="col-md-6 pjtheight px-0 d-flex justify-content-center align-items-center">
                        <img src={value.imgsrc} className='' alt="" />
                      </div>
                    
                      <div className="col-md-6 pjtheight d-flex flex-column justify-content-center">
                        <h3 className='songmyung border-bottom py-2'>{value.pjt_name}</h3>
                        <p className='nanummyeongsub py-5 px-5 white-space-prewrap border-bottom'>{value.pjt_detail}</p>
                        <div className="pjtbottom d-flex justify-content-around align-items-center">
                          <div className="logolist d-flex justify-content-center align-items-center">
                            <a href={value.pjt_git} target="_blank"><Github></Github></a>
                            <a href={value.pjt_notion} target="_blank"><Notion></Notion></a>
                          </div>
                          <div className="period">
                            {value.pjt_period}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                else{
                  return(
                    <div className="row mx-0">
                      <div className="col-md-6 pjtheight d-flex flex-column justify-content-center">
                        <h3 className='songmyung border-bottom py-2'>{value.pjt_name}</h3>
                        <p className='nanummyeongsub py-5 px-5 white-space-prewrap border-bottom'>{value.pjt_detail}</p>
                        <div className="pjtbottom d-flex justify-content-around align-items-center">
                          <div className="logolist d-flex justify-content-center align-items-center">
                            <a href={value.pjt_git} target="_blank"><Github></Github></a>
                            <a href={value.pjt_notion} target="_blank"><Notion></Notion></a>
                          </div>
                          <div className="period">
                            {value.pjt_period}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pjtheight px-0 d-flex justify-content-center align-items-center">
                        <img src={value.imgsrc} className='' alt="" />
                      </div>
                    </div>                    
                  )
                }
                })
          }
      </section>
    )
  }

  export default Preinterview;