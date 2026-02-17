# REST Resource Naming Convention

REST APIs follow standard naming rules:

- Use plural nouns
- Use lowercase
- Avoid verbs in URLs
- Use HTTP methods for actions
- Use versioning when needed

## Correct Naming

GET    /v1/users  
GET    /v1/users/{id}  
POST   /v1/users  
PUT    /v1/users/{id}  
DELETE /v1/users/{id}

## Incorrect Naming Examples

/getUsers  
/createUser  
/deleteUserById  
/UserList  
/user/get