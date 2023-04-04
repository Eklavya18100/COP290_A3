// index.tsx
import { all } from "redux-saga/effects"


// import plans from "./plans";
// import pms from './pms.ts';
// import transaction from "./transaction";
import resetPassword from './iam/resetPassword.ts';
import verifyMail from './iam/verifyMail.ts'
import auth from './iam/auth.ts'
import companies from './companies.ts';
import bookmarks from './bookmarks.ts';
// import subscriptions from "./subscriptions";
// import article from "./articles/article";
// import structure from "./articles/structure";
// import updateArticle from "./articles/updateArticle";
import user from './user.ts';
import search from './search.ts';
// import myPolicy from './myPolicy.ts';
import dna from './dna.ts';
import product from './product.ts';
import history from "./history";
// import adminProduct from '../actions/admin/product.ts';
// import addProduct from './admin/addProduct.ts';
// import restartProduct from './admin/restartProduct'

export default function* rootSaga() {
  yield all([
    ...auth,
    // ...plans,
    // ...pms,
    // ...transaction,
    // ...subscriptions,
    // ...article,
    // ...structure,
    // ...updateArticle,
    ...user,
    // ...search,
    // ...resetPassword,
    // ...companies,
    ...bookmarks,
    ...verifyMail,
    // ...myPolicy,
    // ...dna,
    // ...product,
    // ...history,
    // ...adminProduct,
    // ...addProduct,
    // ...restartProduct
  ])
}
