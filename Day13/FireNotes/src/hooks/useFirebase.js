import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkRfvjl5BMRu5cPkT8sYE_8nmYdB9YK84",
  authDomain: "firenote-405b1.firebaseapp.com",
  databaseURL:
    "https://firenote-405b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firenote-405b1",
  storageBucket: "firenote-405b1.appspot.com",
  messagingSenderId: "394148010659",
  appId: "1:394148010659:web:3608de75a77759f1c03d16",
};

export function useFirebase() {
  return initializeApp(firebaseConfig);
}
