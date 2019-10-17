import React from 'react';
import {shallow} from 'enzyme';
import App from './index.jsx';
test('test', () => {
    const TestApp = shallow(<App/>);
    expect(TestApp.exists()).toBe(true);
});