import {ChildAsFC} from './Child'

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
    luhighu
  </ChildAsFC>
}

export default Parent