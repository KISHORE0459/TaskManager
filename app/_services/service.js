import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
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

export async function getTask(id) {
  try {
    const docref = doc(firestore, "Tasks", id);
    const data = await getDoc(docref);
    if (data.exists()) {
      console.log("data fetched");
      return { id: data.id, ...data.data() };
    } else {
      console.log("no data found");
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

export async function updatadata(id, data) {
  try {
    const docref = doc(firestore, "Tasks", id);
    updateDoc(docref, data);
    console.log("Data Updated");
  } catch (e) {
    console.log(e);
  }
}

export async function deletedata(id) {
  try {
    const docref = doc(firestore, "Tasks", id);
    deleteDoc(docref);
    console.log("Data is Deleted");
  } catch (e) {
    console.log(e);
  }
}
