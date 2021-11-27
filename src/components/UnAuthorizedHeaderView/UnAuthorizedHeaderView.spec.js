import {shallowMount, createLocalVue} from '@vue/test-utils'
import VueRouter from 'vue-router'
import Logo from '../../assets/images/srtimm-logo.svg';
import UnauthorizedHeaderView from "@/components/UnauthorizedHeaderView/UnauthorizedHeaderView";

const localVue = createLocalVue()
localVue.component('logo', Logo);
localVue.use(VueRouter)


describe("UnauthorizedHeaderView Test", () => {
    let cmp;
    describe("UnauthorizedHeaderView computed method routePath", () => {

        it("returns path from the router", () => {

            const $route = {
                path: '/some/path'
            }

            cmp = shallowMount(UnauthorizedHeaderView, {
                stubs: ['router-link'],
                mocks: {
                    $route
                }
            });
            expect(cmp.vm.routePath).toBe($route.path);
        });
    });
});