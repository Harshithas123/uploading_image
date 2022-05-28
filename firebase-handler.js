import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsGG_PVQNaWKcS2-pU7-oROFnzbI_39rs",
  authDomain: "fir-cdff2.firebaseapp.com",
  databaseURL: "https://fir-cdff2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-cdff2",
  storageBucket: "fir-cdff2.appspot.com",
  messagingSenderId: "441449813816",
  appId: "1:441449813816:web:c5895ae3b5754fcdcfd3cd",
  measurementId: "G-EB1MNTM8TJ"
};

const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);
