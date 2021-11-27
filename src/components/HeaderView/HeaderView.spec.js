import { shallowMount, createLocalVue } from "@vue/test-utils";
import HeaderView from "./HeaderView.vue";
import Vuex from 'vuex';

const localVue = createLocalVue()

localVue.use(Vuex);

describe("HeaderView Test", () => {
    let cmp;


    describe("HeaderView isUserAuthenticated", () => {

        it("returns false if the user is null or undefined in the vuex store", () => {

            let store = new Vuex.Store({
                getters: {
                    user() {
                        return null;
                    },
                }
            })
            cmp = shallowMount(HeaderView, { store, localVue });
            expect(cmp.vm.isUserAuthenticated).toBe(false);
        });

        it("returns true if valid value of user is present", () => {
            let store = new Vuex.Store({
                getters: {
                    user() {
                        return {
                            id: 1,
                            name: 'demo user'
                        };
                    },
                }
            });
            cmp = shallowMount(HeaderView, { store, localVue });
            expect(cmp.vm.isUserAuthenticated).toBe(true);
        });
    });
});