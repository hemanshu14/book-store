import {shallowMount, createLocalVue} from '@vue/test-utils'
import VueRouter from 'vue-router'
import Logo from '../../assets/images/srtimm-logo.svg';
import AuthorizedHeaderView from "@/components/AuthorizedHeaderView/AuthorizedHeaderView";

const localVue = createLocalVue()
localVue.component('logo', Logo);
localVue.use(VueRouter)


describe("AuthorizedHeaderView Test", () => {
    let cmp;
    describe("AuthorizedHeaderView computed method path", () => {

        it("returns path from the router", () => {

            const $route = {
                path: '/some/path',
                params: {
                    search: 'hello'
                }
            }

            cmp = shallowMount(AuthorizedHeaderView, {
                stubs: ['router-link', 'font-awesome-icon'],
                mocks: {
                    $route
                }
            });
            expect(cmp.vm.path).toBe($route.path);
        });
    });
});