import { gql } from '@apollo/client';

export const REGISTER = gql`
mutation Register($data : RegisterVars) {
 Register(data: $data){
 _id
 username
 password
 date_naissance
}
}
`


export const ADD_OPERATION = gql`
mutation addTask($data : TaskVars) {
    addTask(data: $data){
 _id
}
}
`

export const ADD_TASK = gql`
mutation addTask($data : TaskVars) {
    addTask(data: $data){
 _id
}
}
`

/* mutation {
    addTask(data:{title: "test task 2",
          theme: "Toptip",
          contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
          status: "completed",
          date_creation: "13/09/1999",
          date_viewed: "13/09/1999",
          creator: "60fe9c0f1a8af10aea71fc3e"}){
      
    }
  } */