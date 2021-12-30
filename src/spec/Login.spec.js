import Login from '../component/Login';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExceptionMap } from 'antd/lib/result';

configure({ adapter: new Adapter() });

describe('Login_page',()=>{
   it('object check',()=>{
        let wrapper= shallow(<Login/>);
        expect(wrapper.exists('.login_page')).toEqual(true);
           
   
   })

 it('Login_Button_check',()=>{
     let wrapper= shallow(<Login/>);
     const container = wrapper.find(".login_button")
       expect(container.length).toEqual(1)
     wrapper.find('.login_button').simulate('click');


 })
 it("Check_handle_change_userEmail", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.exists('#typeEmailX')).toEqual(true);
    wrapper.find('#typeEmailX').simulate('change', {
      target: {
        name:"userEmail",
        value: 'adityasingh@gmail.com',
      },
    }); 
    expect(wrapper.find('input[type="email"]').prop('value')).toEqual(
      'adityasingh@gmail.com',
    );
    
 
  });
   it("Check_handle_change_userEmail", () => {
     const wrapper = shallow(<Login />);
     const input = wrapper.find(".login_userEmail");
     input.simulate("change", { target: { name:"userEmail",value: " " } }); 
     expect(wrapper.find('input[type="email"]').prop('value')).toEqual(
      '',
    );
    
 
   });
    
  it("Check_handle_change_userPassword", () => {
    const wrapper = shallow(<Login />);
    const input = wrapper.find(".login_userPassword");
    input.simulate("change", { target: { name: 'userPassword',value: " " } });

  
  });


  it("Check_handle_change_userPassword", () => {
    const wrapper = shallow(<Login />);
    const input = wrapper.find(".login_userPassword");
    input.simulate("change", { target: { value: "1234567" } }); 
  
  });
    it('Snapshot_login',()=>{
      let wrapper=shallow(<Login/>)
      expect(wrapper).toMatchSnapshot();


    })
    it('should have the login false by default', () => {
      const container = mount(<Login />);
      expect(
        container.find('.login_button').prop('false'),
      ).toBeFalsy();
    });
     it('checking Login flow',()=>{
       let wrapper=shallow(<Login/>)
       const btn=wrapper.find('.login_button')
       wrapper.find('.login_button').simulate('click');
       expect(
        btn.find('.login_button').prop('false'),
        ).toBeFalsy();

     })



     it('handle-Login flow',()=>{
      let wrapper=shallow(<Login/>)
      expect(wrapper.exists('#typeEmailX')).toEqual(true);
      wrapper.find('#typeEmailX').simulate('change', {
      target: {
        name:"userEmail",
        value: 'adityasingh@gmail.com',
      },
    }); 

    const input = wrapper.find(".login_userPassword");
    input.simulate("change", { target: { value: "1234567" } }); 

    const btn = wrapper.find('.login_button')
     wrapper.find('.login_button').simulate('click');
     expect(
      wrapper.find('#error_paragraph').prop('defaultValue'),
      ).toBeFalsy();
      
    })

      



 })
 

