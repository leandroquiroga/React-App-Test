import React from 'react';
import { shallow } from 'enzyme';
import CounterAPP from '../CounterApp';


describe('Testing on componentes <CounterApp />', () => {
    const value = 0;
    let wapper = shallow(<CounterAPP value={value} />);                                                                                                                                                                                                                                                                     

    beforeEach(() => {
        wapper = shallow(<CounterAPP value={value} />);
    });

    test('This test must show the component correctly', () => {
        expect(wapper).toMatchSnapshot();
    });

    test('This test must show the defect value (0) ', () => {
        const valueDefect = wapper.find('h2').text().trim();
        expect(Number(valueDefect)).toBe(value);
    });

    test('This test must increment of the value (+1)', () => {
        wapper.find('button').at(0).simulate('click');
        const value = wapper.find('h2').text().trim();
        expect(value).toBe('1')
    });

    test('This test must decrement of the value (-1)', () => {
        wapper.find('button').at(1).simulate('click');
        const valueDefault = wapper.find('h2').text().trim();
        expect(valueDefault).toBe('-1');
    });

    test('This test must reset of value by defect', () => {
        const wapper = shallow(<CounterAPP value={0} />);

        wapper.find('button').at(0).simulate('click');
        wapper.find('button').at(2).simulate('click');

        const valueCurrently = wapper.find('h2').text().trim();

        expect(valueCurrently).toBe('0')
    })
});