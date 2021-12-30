import Score from "../component/Score";

describe('Score_page',()=>{
    it("Homepage_button_test",()=>{
        let wrapper=shallow(<Score/>)
        expect(wrapper.exists('#home')).toEqual(true);
        wrapper.find('#home').simulate('click');

    })
    it('Snapshot_Score',()=>{
        let wrapper=mount(<Score/>)
        expect(wrapper).toMatchSnapshot();
    })
    it("Homepage_button_test",()=>{
        let wrapper=shallow(<Score/>)
        expect(wrapper.exists('#home')).toEqual(true);
         wrapper.find('#home').simulate('click');
         expect(
             wrapper.find('#home').prop('defaultValue'),
             ).toBeTruthy();

    })
})