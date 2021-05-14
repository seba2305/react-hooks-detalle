import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

    const user = {
        name: 'Seba',
        email: 'sebastian.vega.23@gmail.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>

    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        
        const user = {
            id: 1234,
            name: 'Sebastian'
        };

        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith(user);
    
    });


})
