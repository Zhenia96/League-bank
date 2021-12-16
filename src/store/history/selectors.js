import { NameSpace } from '../../constants';

const getHistory = (state) => state[NameSpace.HISTORY].history;

export default getHistory;
