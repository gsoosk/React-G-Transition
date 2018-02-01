import React,{Component} from 'react';
import {Transition} from 'react-transition-group';


const duration = 300;
const defaultStyle = {
    transition: `margin-left  ${duration}ms ease-in-out, opacity  ${duration}ms ease-in-out`,
    display: "inline-block",
    opacity: "0",
    width:"100%",
    marginLeft: "-200px"
};
const transitionStyles = {
    entering: { opacity: "0",
            marginLeft: "-200px" },
    entered: { opacity: "1",
        marginLeft: "0px" },
};
class EnterTransition extends Component
{



    constructor(props)
    {
        super(props);
        this.state = {
            transitionInProp : false
        }
    }
    componentDidMount()
    {
        this.setState({
            transitionInProp : true
        });
    }
    render()
    {
        return(
            <div>
                <Transition in={this.state.transitionInProp} timeout={duration}>
                    {(state) => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            {this.props.children}
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}
export default EnterTransition;