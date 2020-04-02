const rcfn = require.context('./modules', true, /\.js$/);
const utils = rcfn.keys().map(item=> rcfn(item).default);
export default {
    ...utils
}
