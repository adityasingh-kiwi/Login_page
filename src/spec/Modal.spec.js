import Modal from '../component/Modal';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExceptionMap } from 'antd/lib/result';

configure({ adapter: new Adapter() });

describe('Modal_test',()=>{

   it('input_check_firstname',()=>{
    const wrapper = shallow(<Modal />);
    const input = wrapper.find(".userFirstName");
    input.simulate("change", { target: { value: "Aditya" } });


   })
   it('input_check_firstname and same value',()=>{
    const wrapper = shallow(<Modal />);
    const input = wrapper.find('#firstName_Modal');
    expect(input.exists('#firstName_Modal')).toEqual(true);

    input.find('#firstName_Modal').simulate('change', {
      target: {
        name:"firstName",
        value: 'Aditya',
      },
    }); 

    expect(input.find('#firstName_Modal').prop('value')).toEqual("");


   })
   it('input_check_Lastname',()=>{
    const wrapper = shallow(<Modal />);
    const input = wrapper.find(".userLastName");
    input.simulate("change", { target: { value: "Singh" } });
   })
   it('input_check_Email',()=>{
    const wrapper = shallow(<Modal />);
    const input = wrapper.find(".userEmail");
    input.simulate("change", { target: { value: "adityasingh@gmail.com" } });
   })
   it('input_check_Gender',()=>{
    const wrapper = shallow(<Modal />);
    const input = wrapper.find(".gender"); 
  
    input.at(0).simulate('change', { target: { checked: true } });
   })


it('Snapshot_modal',()=>{
    let wrapper=mount(<Modal/>)
    expect(wrapper).toMatchSnapshot();
    

  })
  
  it('FirstName_handle',()=>{
    let wrapper=shallow(<Modal/>)
     expect(wrapper.exists('#firstName_Modal')).toEqual(true);
     wrapper.find('#firstName_Modal').simulate('change', {
     target: {
       name:"firstName",
       value: 'Aditya',
     },
   })
 expect(
  wrapper.find('#firstName_Modal').prop('defaultValue'),
  ).toBeTruthy();


})
it('LastName_handle',()=>{
  let wrapper=shallow(<Modal/>)
   wrapper.find('#user_lastName').simulate('change', {
   target: {
     name:"lastName",
     value: 'Singh',
   },
 })
expect(
wrapper.find('#user_lastName').prop('defaultValue'),
).toBeTruthy();


})
it('Email_handle',()=>{
  let wrapper=shallow(<Modal/>)
   wrapper.find('#user_Email').simulate('change', {
   target: {
     name:"userEmail",
     value: 'Singh',
   },
 })
expect(
wrapper.find('#user_Email').prop('defaultValue'),
).toBeTruthy();


})
})

