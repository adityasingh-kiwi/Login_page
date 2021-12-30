import Question from "../component/Question";

describe('Question_page',()=>{
    it("next_button_test",()=>{
        let wrapper=shallow(<Question/>)
        expect(wrapper.exists('.button_next'))
       

    })

})