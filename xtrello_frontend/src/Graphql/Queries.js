import {gql} from '@apollo/client'


export const LOGIN = gql`
   query Login($data : LoginVars) {
  Login(data: $data){
    _id
    username
    password
    date_naissance
    
  }
}
`

export const GET_TASKS = gql`
   query{
  getTasks{_id title theme photo contenu status date_creation date_viewed creator}
}
`
