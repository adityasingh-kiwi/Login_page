import { mount } from "enzyme";
import Header from "../component/Header";



describe('Header_page_test',()=>{
    it('userDeatils_button',()=>{
        let wrapper=shallow(<Header/>)
      const container = wrapper.find(".active")
       expect(container.length).toEqual(1)
     wrapper.find('.active').simulate('click');


    })
    it('Logout_button',()=>{
        let wrapper=shallow(<Header/>)
      const container = wrapper.find(".logout")
       expect(container.length).toEqual(1)
     wrapper.find('.logout').simulate('click');


    })
      it('Admin_button',()=>{
          let wrapper= mount(<Header/>)
        const container = wrapper.find("#admin")
      //    expect(container.length).toEqual(0);
      //  wrapper.find('#admin').simulate('click');


      })
     it('Snapshot_login',()=>{
      let wrapper=shallow(<Header/>)
      expect(wrapper).toMatchSnapshot();
      
  
    })

    it('userDeatils_button',()=>{
      let wrapper=shallow(<Header/>)
    const container = wrapper.find(".active");
   wrapper.find('.active').simulate('click');
   expect(
    wrapper.find('.active').prop('defaultValue'),
    ).toBeTruthy();


  })
  it('Logout_button',()=>{
    let wrapper=shallow(<Header/>)
    const container = wrapper.find(".logout")
       expect(container.length).toEqual(1)
     wrapper.find('.logout').simulate('click');
 expect(
  container.find('.logout').prop('defaultValue'),
  ).toBeFalsy();


})
    

})