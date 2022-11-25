import { SliceNameSpace } from 'src/store/constants';
import { State } from 'src/store/types/state';

export const getTitle = (state: State) => state[SliceNameSpace.MainPage].title;
