import Survey from '../component/Survey'
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Survey_page',()=>{
   it('Survey_button check',()=>{
        let wrapper= shallow(<Survey/>);
        expect(wrapper.exists('.content')).toEqual(true);
        expect(wrapper.length).toEqual(1)
        wrapper.find('.content').simulate('click');
   
   })
   it('Snapshot_Survey',()=>{
      let wrapper=shallow(<Survey/>)
      expect(wrapper).toMatchSnapshot();


    })

})