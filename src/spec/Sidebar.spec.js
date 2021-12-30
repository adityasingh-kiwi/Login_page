import Sidebar from "../component/Sidebar";
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Sidebar_test',()=>{

    it('Snapshot_Survey',()=>{
        let wrapper=shallow(<Sidebar/>)
        expect(wrapper).toMatchSnapshot();
  
  
      })
  
})

