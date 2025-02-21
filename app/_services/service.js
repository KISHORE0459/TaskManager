import { collection, addDoc, getDocs } from "firebase/firestore";
import firestore from "../firebase";

export async function addtask(task) {
  try {
    const doc = await addDoc(collection(firestore, "Tasks"), task);
    console.log("data is added");
  } catch (e) {
    console.log(e);
    console.log("error in uploading the data ");
  }
}

export async function fetchtasks() {
  try {
    const res = await getDocs(collection(firestore, "Tasks"));
    const data = await res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (e) {
    console.log(e);
  }
}
