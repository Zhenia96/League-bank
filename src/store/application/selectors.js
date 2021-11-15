import { NameSpace } from '../../constants';

const getDeviceType = (store) => store[NameSpace.APPLICATION].deviceType;

export default getDeviceType;
