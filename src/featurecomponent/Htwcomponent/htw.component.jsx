import './htw.component.css';
import htw1 from "../../Assests/htw1.jpg";
import htw2 from "../../Assests/htw2.png";
import htw3 from "../../Assests/htw3.png";
export function HowItWorks() {
    return (
        <div className='how-it-works-main'>
            <div className='how-it-works-title'>
                <h1>How It Work</h1>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <div className='how-it-works-body mt-3'>
                        <div>
                            <img src={htw1}></img>
                        </div>
                        <div>
                            <h3>Choose What To Do</h3>
                            <p style={{color:'#949494'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='how-it-works-body  mt-3'>
                        <div>
                            <img src={htw2}></img>
                        </div>
                        <div>
                            <h3>Find What You Want</h3>
                            <p style={{color:'#949494'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <div className='how-it-works-body  mt-3'>
                        <div>
                            <img src={htw3}></img>
                        </div>
                        <div>
                            <h3>Explore Amazing Places</h3>
                            <p style={{color:'#949494'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}