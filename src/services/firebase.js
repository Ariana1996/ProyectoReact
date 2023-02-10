import {
    initializeApp
} from "firebase/app";
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    query,
    where,
    doc,
    getDoc
} from "firebase/firestore";
import meals from "./mockFood"

const firebaseConfig = {
    apiKey: "AIzaSyCobR8Uagshq0xbj9x_oQouimYcOuMgMhw",
    authDomain: "bd-react-89494.firebaseapp.com",
    projectId: "bd-react-89494",
    storageBucket: "bd-react-89494.appspot.com",
    messagingSenderId: "477613568136",
    appId: "1:477613568136:web:b735f8a1c9458e06d2af3d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getAllItems() {
    const mealsCollection = collection(db, "meals");
    const querySnapshot = await getDocs(mealsCollection);
    const meals = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return meals;
}

export async function getItemsByCategory(category) {
    const q = query(collection(db, "meals"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const mealsByCategory = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }))
    return mealsByCategory;

}

export async function getSingleItem(itemID) {
    const docMeals = doc(db, "meals", itemID);
    const querySnapshot = await getDoc(docMeals);

    //return  {...snapshot.data(), id: snapshot.id};
    const meal = querySnapshot.data();
    meal.id = querySnapshot.id;
    return meal;
}

export async function InsertData() {
    const tableOfCollection = collection(db, "meals");

    for (let meal of meals) {
        delete meal.id;
        addDoc(tableOfCollection, meal).then((res) => console.log("creado"));
    }
}

export async function InsertFormAndGetIdForm(form, cart) {
    const tableOfCollection = collection(db, "forms");
    delete form.emailRepeatHasError;
    form.carrito = cart;
    const docRef = await addDoc(tableOfCollection, form);
    return docRef.id;
}