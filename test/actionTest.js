import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import signUpAction from "../src/actions/signUpAction";
import GetMenuAction from "../src/actions/getMenuActions";
import getAllOrdersAction from '../src/actions/getAllOrdersAction';
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe("TEST SUIT FOR Actions", () => {
  describe("signUpAction Actions Test Suite", () => {
    beforeEach(() => {
      moxios.install(axios);
      store.clearActions();
    });
    afterEach(() => moxios.uninstall(axios));

    it("returns a signed up user when user is signed up correctly", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: [{}]
        });
      });

      const expected = [
        {
          type: "SIGN_UP_ERROR",
          payload: undefined,
          status: "FAILURE"
        }
      ];

      return store
        .dispatch(
          signUpAction({
            email: "victor@yahoo.com",
            password: "ffghdyeh",
            username: "victor",
            address: "10 something street"
          })
        )
        .then(() => {
          expect(store.getActions()).to.eql(expected);
        });
    });



    describe("GetMenu Test Suite", () => {
      beforeEach(() => {
        moxios.install(axios);
        store.clearActions();
      });
      afterEach(() => moxios.uninstall(axios));

      it("returns food menu ERROR", () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 500,
            response: [{}]
          });
        });

        const expected = [
          {
            type: "GET_MENU_ERROR",
            payload: "failure you have an error"
          }
        ];

        return store.dispatch(GetMenuAction({})).then(() => {
          expect(store.getActions()).to.eql(expected);
        });
      });

      it("returns all orders", () => {
        const store = mockStore({});
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: {}
          });
        });

        const expected = [
          {
            type: "GET_MENU",
            payload: undefined
          }
        ];

        return store.dispatch(GetMenuAction({})).then(() => {
          expect(store.getActions()).to.eql(expected);
        });
      });
    });


    describe("Get all orders action Test Suite", () => {
        beforeEach(() => {
          moxios.install(axios);
          store.clearActions();
        });
        afterEach(() => moxios.uninstall(axios));
  
        it("get orders ERROR", () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 500,
              response: [{}]
            });
          });

          const expected = [
            {
              type: "GET_ORDERS_ERROR",
              payload: "failure you have an error"
            }
          ];
  
          return store.dispatch(getAllOrdersAction({})).then(() => {
            expect(store.getActions()).to.eql(expected);
          });
        });
  
        it("get order error", () => {
          const store = mockStore({});
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: {}
            });
          });

          const expected = [
            {
              type: "GET_ORDERS",
              payload: undefined
            }
          ];
  
          return store.dispatch(getAllOrdersAction({})).then(() => {
            expect(store.getActions()).to.eql(expected);
          });
        });
      });
  });
});
