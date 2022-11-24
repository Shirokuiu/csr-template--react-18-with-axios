import { NameSpace } from 'src/store/constants';
import { State } from 'src/store/types/state';

export const getTitle = (state: State) => state[NameSpace.MainPage].title;
