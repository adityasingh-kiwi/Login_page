import Admin from '../component/Admin';



describe('Admin_page',()=>{
   it('addQuestion_button check',()=>{
        let wrapper= shallow(<Admin/>);
        
        expect(wrapper.exists('.button-add-question')).toEqual(true);
        expect(wrapper.length).toEqual(1)
        wrapper.find('.button-add-question').simulate('click');
   
   })
   it('viewScore_button check',()=>{
    let wrapper= shallow(<Admin/>);
    
    expect(wrapper.exists('.button-view-score')).toEqual(true);
    expect(wrapper.length).toEqual(1)
    wrapper.find('.button-view-score').simulate('click');

})
it('Snapshot_Admin',()=>{
    let wrapper=shallow(<Admin/>)
    expect(wrapper).toMatchSnapshot();


  })
  it("Admin_button_test",()=>{
    let wrapper=shallow(<Admin/>)
    expect(wrapper.exists('#view')).toEqual(true);
     wrapper.find('#view').simulate('click');
     expect(
         wrapper.find('#view').prop('defaultValue'),
         ).toBeTruthy();
     })
     it("Admin_button_test",()=>{
      let wrapper=shallow(<Admin/>)
      expect(wrapper.exists('#add')).toEqual(true);
       wrapper.find('#add').simulate('click');
       expect(
           wrapper.find('#add').prop('defaultValue'),
           ).toBeUndefined();
       })

})