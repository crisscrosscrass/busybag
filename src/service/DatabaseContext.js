import React, { useContext, useState, useEffect } from 'react'
import {firestore} from '../firebase'
import {auth} from '../firebase'

const DatabaseContext = React.createContext()

export function useDB(){
    return useContext(DatabaseContext)
}

export function DatabaseProvider( {children} ) {
    const [projects,setProjects] = useState([]);
    const [loading, setLoading] = useState(false)

    //init values
    useEffect(()=>{

        const unsubscribe = auth.onAuthStateChanged(async function(user) {
            if (user) {
            firestore.collection("projects").where("shared", "array-contains",user.email)
                .onSnapshot(snapshop => setProjects(
                    snapshop.docs.map(
                        doc=>(
                            {id:doc.id,data:doc.data()}
                            )
                        )
                    )
                )
                setLoading(false)
            }else{
                setLoading(false)
            }
          });


        // let isMounted = true;
        // return () => { isMounted = false };
        return unsubscribe
    },[])

    // methods
    // async function loadingProjects(user) {
    //     const projectRef = firestore.collection("projects");
    //     let projectArray = [];
    //     const allOwnedProjects = await projectRef
    //       .where("owner", "==", user.email)
    //       .get();
    //     const allOSharedProjects = await projectRef
    //       .where("shared", "array-contains", user.email)
    //       .get();
    //     if (allOwnedProjects.empty) {
    //       console.log("No matching documents.");
    //     } else {
    //       allOwnedProjects.forEach((doc) => {
    //         console.log(doc.id, "=>", doc.data());
    //         projectArray.push({ id: doc.id, data: doc.data() });
    //       });
    //     }
    //     if (allOSharedProjects.empty) {
    //       console.log("No matching documents.");
    //     } else {
    //       allOSharedProjects.forEach((doc) => {
    //         console.log(doc.id, "=>", doc.data());
    //         projectArray.push({ id: doc.id, data: doc.data() });
    //       });
    //     }
    //     setProjects(projectArray);
    //     setLoading(false);
    // }

    async function shareProjectWithUser(email,docId){
    
        const cityRef = firestore.collection('projects').doc(docId);
        const doc = await cityRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            let data = doc.data()
            data.shared.push(email)
            console.log('Document data:', data.shared);
            firestore.collection('projects').doc(docId).update({
                shared: data.shared
            });
        }
    }

    function addProject(project,description, color, user){
        firestore.collection("projects").add({
            name:project,
            description:description,
            color:color,
            owner: user,
            shared:[user]
        }).then(docRef => {
            return docRef.id            
        })
        .catch(error => console.error("Error adding document: ", error))
    }

    function addTaskToProject(projectId,taskName,taskDescription,user){
        firestore.collection(projectId).add({
            name:taskName,
            description:taskDescription,
            user:user,
        })
    }

    function deleteProject(projectid){
        const ref = firestore.collection(projectid)
        ref.onSnapshot((snapshot) => {
            snapshot.docs.forEach((doc) => {
            ref.doc(doc.id).delete()
            })
        })
        firestore.collection(projectid).doc(projectid).delete()
        firestore.collection("projects").doc(projectid).delete();
    }

    // https://github.com/oghur/React-todo-App-with-connection-to-Firebase/blob/main/src/App.js
    // function deletedata(value){
    //     database.collection("messages").doc(value).delete();
    // }
     
    // function Editdata(id,value){
    //     database.collection("messages").doc(id).set({
    //       message: value,
    //     },{merge:true})
    // }

    const value = {
        projects,
        shareProjectWithUser,
        addProject,
        deleteProject,
        addTaskToProject
    }
    return (
        <DatabaseContext.Provider value={value}>
            {!loading && children}
        </DatabaseContext.Provider>
    )
}
