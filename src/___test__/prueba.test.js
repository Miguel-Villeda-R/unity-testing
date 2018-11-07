
import React from 'react'
import Panel from '../IncrementPanel';
import { shallow, mount, render } from 'enzyme';


describe('<IncrementPanel/>',() =>
 {
  it('el contador inicia desde cero', function(){
      const wrapper = shallow(<Panel />);
      expect(wrapper.state('valueNumber')).toBe(0);
    
  });

  it('al hacer click, incrementa una unidad', function(){
    const spy = jest.fn();
    const tree =shallow()
    });
    

})





