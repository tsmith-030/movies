import * as _ from "lodash";

export function* withApiErrorHandling(generator, action) {
    const sender = _.get(action, "sender", "");
    try {
        yield* generator();
    } catch (e1) {
        console.log("Unable to post an app error to /error.  Reason: ", e1);
    }
}
