import React, {Component} from 'react'
import Button from './IncrementButton'





export class Panel extends Component{

 constructor(props){
   super(props)

   this.state = {
    valueNumber: 0,
    }
 }
        
      
    
      onIncrementClick = (more) => {
       let valueNumber;
       valueNumber = more ? this.state.valueNumber +1:
       this.setState({valueNumber})
      }
    
      onDecrementClick = (menos) => {
        let valueNumber;
        valueNumber = menos ? this.state.valueNumber -1:
        this.setState({valueNumber})
      }
    
      render() {
        const { more, menos } = this.props;
        return (
          <div className="App">
            <div className='counter'>
              <div className='counter__buttons'>
                <Button   handleClick={() => this.onIncrementClick(more)}>+</Button>
                <Button   handleClick={() => this.onDecrementClick(menos)}>-</Button>
                
                {this.state.valueNumber}
              
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default Panel


