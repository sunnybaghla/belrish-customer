import { firestore } from "@nativescript/firebase";
var data = [];
export class FirestoreService {
    getData(collection: any) {
        collection.get().then((querySnapshot: firestore.QuerySnapshot) => {
            querySnapshot.forEach(doc => {
                var dataTosave = doc.data();
                dataTosave.id = doc.id;
                data.push(dataTosave);
            });
        }).catch(err => {
            console.log("Get failed, error" + err);
            return err;
        });
    }
}