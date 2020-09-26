import {createElement, Component, render} from './toy-react'

class Mycompenent extends Component{
    render(){
        return <div>
            <h1>this is atest component</h1>
            {this.children}
        </div>
    }

}
render (<Mycompenent id="a" class = "ccc">
    <p>sss</p>
    <span>fff</span>
</Mycompenent>, document.body);