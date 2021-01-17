import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


export const initialize = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDEhC-h7-PUJv8PZa7fnq8YMaCxQCPzWYc",
    authDomain: "trelolo-react-vkui.firebaseapp.com",
    databaseURL: "https://trelolo-react-vkui-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "trelolo-react-vkui",
    storageBucket: "trelolo-react-vkui.appspot.com",
    messagingSenderId: "747670293435",
    appId: "1:747670293435:web:7d86aba264719ead8b529e",
    measurementId: "G-4BHMEV6X0P"
  });
// Initialize Firebase
  firebase.analytics();
};

const createDesk = (name) => {
    const db = firebase.firestore();

    return db.collection('desks')
        .add({ name })
        .then((docRef) => docRef.get());
};

const editDesk = (id, name) => {
    const db = firebase.firestore();

    return db.collection('desks').doc(id).update({ name });
};

const getDesks = () => {
    const db = firebase.firestore();

    return db.collection('desks').get()
        .then((querySnapshot) => {
            const desks = [];

            querySnapshot.forEach((doc) => {
                desks.push({
                    id: doc.id,
                    name: doc.data().name,
                });
            });

            return desks;
        });
};

const deleteDesk = (id) => {
    const db = firebase.firestore();

    return db.collection('desks')
        .doc(id)
        .delete();
};

const getColumns = (deskId) => {
    const db = firebase.firestore();

    return db.collection('columns').where('deskId', '==', deskId).get()
        .then((querySnapshot) => {
            const columns = [];

            querySnapshot.forEach((doc) => {
                const { deskId, name } = doc.data();

                columns.push({
                    id: doc.id,
                    deskId,
                    name,
                });
            });

            return columns;
        });
};

const deleteColumn = (id) => {
    const db = firebase.firestore();

    return db.collection('columns')
        .doc(id)
        .delete();
};

const editColumn = (id, name) => {
    const db = firebase.firestore();

    return db.collection('columns').doc(id).update({ name });
};

const editCard = (id, data = {}) => {
    const db = firebase.firestore();

    return db.collection('cards').doc(id).update(data);
};

const getCards = (columnId) => {
    const db = firebase.firestore();

    return db.collection('cards').where('columnId', '==', columnId).get()
        .then((querySnapshot) => {
            const cards = [];

            querySnapshot.forEach((doc) => {
                const { columnId, name } = doc.data();

                cards.push({
                    id: doc.id,
                    columnId,
                    name,
                });
            });

            return cards;
        });
};

const getCard = (cardId) => {
    const db = firebase.firestore();

    return db.collection('cards').doc(cardId).get()
        .then((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
};

const deleteCard = (id) => {
    const db = firebase.firestore();

    return db.collection('cards')
        .doc(id)
        .delete();
};

const createCard = (name, columnId) => {
    const db = firebase.firestore();

    return db.collection('cards')
        .add({ name, columnId })
        .then((docRef) => docRef.get());
};

const createColumn = (name, deskId) => {
    const db = firebase.firestore();

    return db.collection('columns')
        .add({ name, deskId })
        .then((docRef) => docRef.get());
};

export const api = {
    createDesk,
    editDesk,
    getDesks,
    deleteDesk,
    getColumns,
    deleteColumn,
    getCards,
    deleteCard,
    createCard,
    createColumn,
    editColumn,
    editCard,
    getCard,
};
