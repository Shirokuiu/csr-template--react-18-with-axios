import { InitialState } from 'src/store/types/main-page-process';
import { clearState, mainPageProcess } from 'src/store/main-page-process/reducer/main-page-process';

describe('Проверка редьюсера mainPageProcess', () => {
  const initialState = (): InitialState => ({
    title: 'test',
  });

  describe('Проверка экшена clearState', () => {
    it('Сбрасывает стор в дефолтное состояние', () => {
      const state = initialState();

      expect(mainPageProcess.reducer(state, clearState())).toEqual({
        title: 'State is cleared',
      });
    });
  });
});
