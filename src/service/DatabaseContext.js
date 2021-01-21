import React, { useContext, useState, useEffect } from 'react'
import {firestore} from '../firebase'
import {auth} from '../firebase'

const DatabaseContext = React.createContext()

export function useDB(){
    return useContext(DatabaseContext)
}

export function DatabaseProvider( {children} ) {
    const [projects,setProjects] = useState([]);
    const [loading, setLoading] = useState(true)

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

    async function shareProjectWithUser(email,docId){
        const projectRef = firestore.collection('projects').doc(docId);
        const doc = await projectRef.get();
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

    function modifyProject(projectId,project){
        firestore.collection("projects").doc(projectId).update({

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
    

    const value = {
        projects,
        shareProjectWithUser,
        addProject,
        modifyProject,
        deleteProject,
        addTaskToProject,
        loading
    }
    return (
        <DatabaseContext.Provider value={value}>
            {loading && children}
            {!loading && children}
        </DatabaseContext.Provider>
    )
}
