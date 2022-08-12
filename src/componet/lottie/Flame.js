import { Component } from 'react'
import Lottie from 'react-lottie'

class ControlledLottie  extends  Component {


    _lottieHeartRef;
    onRefLottie = (ref) => {
      this._lottieHeartRef = ref;
    }

    onMouseEnter = () => {
        this._lottieHeartRef && this._lottieHeartRef.play();
    };

    onMouseLeave = () => {
        this._lottieHeartRef && this._lottieHeartRef.pause();
    };
    render(){
      
          const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: this.props.animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
    };
    return(
      
        <Lottie options={defaultOptions} ref={this.onRefLottie}  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}></Lottie>

        
    )
    }

}

export default ControlledLottie