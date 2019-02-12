import getAllOrdersReducer from '../src/reducers/getAllOrdersReducer';
import getMenuReducer  from '../src/reducers/getmenuReducer';
import placeAnOrderReducer from '../src/reducers/placeAnOrderReducer';
import loginReducer from '../src/reducers/loginReducers';
import addtocartReducer from '../src/reducers/addtocartReducer';

describe('get all orders Reducers test suite', () => {
    it('returns SUCCESS  status when an orders are fetched successfully', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = getAllOrdersReducer(initialState,
          {
            type: 'GET_ORDERS',
            payload: [{}],
          });
        expect(state).to.eql({ payload: [ {} ], status: 'SUCCESS' });
      });

      it('returns inital state ', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = getAllOrdersReducer(initialState,
          {
            type: '',
            payload: '',
          });
        expect(state).to.eql({ payload: '', status: '' });
      });

      it('returns inital state when state is ndefined', () => {
        const state = getAllOrdersReducer(undefined,
          {});
        expect(state).to.eql({ payload: '', status: '' });
      });

      it('returns SUCCESS  menu has been fetched successfully', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = getMenuReducer(initialState,
          {
            type: 'GET_MENU',
            payload: [{}],
          });
        expect(state).to.eql({ payload: [ {} ], status: 'SUCCESS' });
      });

      it('returns inital state ', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = getMenuReducer(initialState,
          {
            type: '',
            payload: '',
          });
        expect(state).to.eql({ payload: '', status: '' });
      });

      it('returns inital state when state is ndefined', () => {
        const state = getMenuReducer(undefined,
          {});
        expect(state).to.eql({ payload: '', status: '' });
      });

      it('returns SUCCESS  order has been placed successfully', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = placeAnOrderReducer(initialState,
          {
            type: 'PLACE_AN_ORDER',
            payload: [{}],
          });
        expect(state).to.eql({ payload: [ {} ], status: 'SUCCESS' });
      });

    //   it('returns FAILURE status when  orders was not fetched successfully', () => {
    //     const initialState = {
    //         payload: '',
    //         status: '',
    //       };
    //     const state = placeAnOrderReducer(initialState,
    //       {
    //         type: 'PLACE_AN_ORDER_ERROR',
    //         payload: '',
    //       });
    //     expect(state).to.eql({ payload: [undefined],
    //     status: "FAILURE"});
    //   });

      it('returns inital state ', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = placeAnOrderReducer(initialState,
          {
            type: '',
            payload: '',
          });
        expect(state).to.eql({ payload: '', status: '' });
      });

      it('returns inital state when state is ndefined', () => {
        const state = placeAnOrderReducer(undefined,
          {});
        expect(state).to.eql({ payload: '', status: '' });
      });
// login reducer test
      it('returns SUCCESS  status when an orders are fetched successfully', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = loginReducer(initialState,
          {
            type: 'LOG_IN',
            payload: [{}],
          });
        expect(state).to.eql({ payload: [{}], status: 'SUCCESS' });
      });

      it('returns SUCCESS  status when an orders are fetched successfully', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = loginReducer(initialState,
          {
            type: 'LOG_IN_ERROR',
            payload: [{}],
          });
        expect(state).to.eql({ payload: [{}], status: 'FAILURE' });
      });

      it('returns inital state ', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = loginReducer(initialState,
          {
            type: '',
            payload: '',
          });
        expect(state).to.eql({ payload: '', status: '' });
      });

      it('returns inital state when state is ndefined', () => {
        const state = loginReducer(undefined,
          {});
        expect(state).to.eql({ payload: '', status: '' });
      });


      it('returns inital state ', () => {
        const initialState = {
            payload: '',
            status: '',
          };
        const state = addtocartReducer(initialState,
          {
            type: '',
            payload: '',
          });
        expect(state).to.eql({ payload: '', status: '' });
      });
});