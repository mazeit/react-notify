'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createReducer = createReducer;
exports.cutString = cutString;
function createReducer(initialState, fnMap) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var _ref = arguments[1];
        var type = _ref.type,
            payload = _ref.payload;

        var handle = fnMap[type];
        return handle ? handle(state, payload) : state;
    };
}

function cutString(st, limit) {
    var cut = st.indexOf(' ', limit);
    if (cut == -1) {
        return st;
    }

    return st.substring(0, cut) + '...';
}