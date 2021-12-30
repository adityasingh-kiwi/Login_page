import { Addquestion } from "../component/Addquestion";


describe('addQuestion_page',()=>{
    it("Check_handle_change_Addquestion", () => {
        const wrapper = shallow(<Addquestion />);
        const input = wrapper.find(".addQuestion");
        input.simulate("change", { target: { value: "who is the prime minister of india" } });  // 'value' instead of 'num'
       
      });
      it("Check_handle_change_userEmail", () => {
        const wrapper = shallow(<Addquestion />);
        const input = wrapper.find(".addChoices");
        input.simulate("change", { target: { value: "Manmohan singh" } });  
       
      });
      it("Check_handle_change_userEmail", () => {
        const wrapper = shallow(<Addquestion />);
        const input = wrapper.find(".addAnswer");
        input.simulate("change", { target: { value: "Modi" } }); 
       
      });

    it('addQuestion_button check',()=>{
         let wrapper= shallow(<Addquestion/>);
         expect(wrapper.exists('.addChoices_button')).toEqual(true);
         expect(wrapper.length).toEqual(1)
         wrapper.find('.addChoices_button').simulate('click');
    
    })
    it('viewScore_button check',()=>{
     let wrapper= shallow(<Addquestion/>)
     expect(wrapper.exists('.addAnswer_button')).toEqual(true);
     expect(wrapper.length).toEqual(1)
     wrapper.find('.addAnswer_button').simulate('click');
 
 })
 it('Snapshot_AddQuestion',()=>{
  let wrapper=shallow(<Addquestion/>)
  expect(wrapper).toMatchSnapshot();


})
it('addd_button check',()=>{
  let wrapper= shallow(<Addquestion/>)
  expect(wrapper.exists('#addAnswer')).toEqual(true);
  expect(wrapper.length).toEqual(1)
  wrapper.find('#addAnswer').simulate('click');
  expect(
    wrapper.find('#addAnswer').prop('defaultValue'),
    ).toBeTruthy();

})
it('addchoices_button check',()=>{
  let wrapper= shallow(<Addquestion/>);
  expect(wrapper.exists('#addChoices')).toEqual(true);
  expect(wrapper.length).toEqual(1)
  wrapper.find('#addChoices').simulate('click');
  expect(
    wrapper.find('#addChoices').prop('defaultValue'),
    ).toBeTruthy();

})
it("Check_handle_Question_change_Function", () => {
  const wrapper = shallow(<Addquestion />);
  const input = wrapper.find("#add_question");
  input.simulate("change", { target: 
    { name:"question",
      value: "who is the prime minister of india"
     }
    }) 

    expect(
      wrapper.find('#add_question').prop('defaultValue'),
      ).toBeTruthy();
      
    
    
    
    

   
});
it("Check_handle_Question_change_Function", () => {
  const wrapper = shallow(<Addquestion />);
  const input = wrapper.find("#add_question");
  input.simulate("change", { target: 
    { name:"question",
      value: "who is the prime minister of india"
     }
    }) 

    expect(
      wrapper.find('#add_question').prop('defaultValue'),
      ).toBeTruthy();
      
    
    
    
    

   
});
it("Check_handle_Question_change_Function", () => {
  const wrapper = shallow(<Addquestion />);
  const input = wrapper.find("#choices");
  input.simulate("change", { target: 
    { name:"choices",
      value: "india"
     }
    }) 

    expect(
      wrapper.find('#choices').prop('defaultValue'),
      ).toBeTruthy();
      
    
    
    
    

   
});
it("Check_handle_Question_change_Function", () => {
  const wrapper = shallow(<Addquestion />);
  const input = wrapper.find("#answers");
  input.simulate("change", { target: 
    { name:"answer",
      value: "india"
     }
    }) 

    expect(
      wrapper.find('#answers').prop('defaultValue'),
      ).toBeTruthy();
      
    
    
    
    

   
});



 
 })