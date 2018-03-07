
import Demo from './Demo'
import BkgColor from './BkgColor'

export default function install(Vue) {
    Vue.directive('demo', Demo);
    Vue.directive('bkg-color', BkgColor);
}
