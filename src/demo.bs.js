

import * as List from "../node_modules/bs-platform/lib/es6/list.js";

console.log(List.length({
          hd: 1,
          tl: {
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }
        }));

export {
  
}
/*  Not a pure module */
