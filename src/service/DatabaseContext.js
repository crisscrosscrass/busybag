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

        auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              firestore.collection("projects").where("user", "==", user.email).onSnapshot(snapshop => setProjects(
                snapshop.docs.map(
                    doc=>({id:doc.id,data:doc.data()})
                    )
                )
            )
            setLoading(false)
            }
          });


        let isMounted = true;
        // firestore.collection("projects").where("user", "==", "fovem84447@nonicamy.com").onSnapshot(snapshop => setProjects(
        //     snapshop.docs.map(
        //         doc=>({id:doc.id,data:doc.data()})
        //         )
        //     )
        // )
        // setLoading(false)
        return () => { isMounted = false };
    },[])

    //methods
    function loadingProjects(user){
        firestore.collection("projects").where("user", "==", "fovem84447@nonicamy.com").onSnapshot(snapshop => setProjects(
            snapshop.docs.map(
                doc=>({id:doc.id,data:doc.data()})
                )
            )
        )
        setLoading(false)
    }

    function addProject(project,user){
        firestore.collection("projects").add({
            name:project,
            user: user,
          })
    }

    function deleteProject(projectid){
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
        loadingProjects,
        addProject,
        deleteProject
    }
    return (
        <DatabaseContext.Provider value={value}>
            {!loading && children}
        </DatabaseContext.Provider>
    )
}
