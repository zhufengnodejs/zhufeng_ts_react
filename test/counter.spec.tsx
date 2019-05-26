import * as React from 'react';
import {shallow,configure} from 'enzyme';
import * as Adapter  from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});
import Counter from '../src/components/Counter';
test('测试Counter',()=>{
    const rendered = shallow(<Counter name="计数器"/>);
    console.log(rendered.text());
    expect(rendered.text()).toContain('计数器');
});