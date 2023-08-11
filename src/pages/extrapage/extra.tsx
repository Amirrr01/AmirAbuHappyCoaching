import './extra.css'
import img1 from './images/massage.svg'
interface extraProps{

}

const Extra =() => {
    return(
       <section className='sct-1'>
         <p className="how_it">How does it work?</p>
         <p className="you_ready">Are you ready to transform your life?</p>
         <div className="center">
           <p className="lorem1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
         </div>
         <div className="elements">
            <div className="box">
                <div className="center">
                    <div className="oval">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="center">
                    <p className='readyP'>Ready to start? Let’s talk!</p>
                </div>
                <div className="center">
                    <p className='lorem2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="box">
                <div className="center">
                    <div className="oval">

                    </div>
                </div>
            </div>
            <div className="box">
                <div className="center">
                    <div className="oval">

                    </div>
                </div>
            </div>
            <div className="box">
                <div className="center">
                    <div className="oval">

                    </div>
                </div>
            </div>
            <div className="box">
                <div className="center">
                    <div className="oval">

                    </div>
                </div>
            </div>
            <div className="box">
                <div className="center">
                    <div className="oval">

                    </div>
                </div>
            </div>
         </div>
       </section>
    )
}
export default Extra