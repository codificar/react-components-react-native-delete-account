# react-native-delete-account

Componente para a tela de exclusão de usuário.

# Install
add in package.json:

"react-native-delete-account": "git+https://libs:ofImhksJ@git.codificar.com.br/react-components/react-native-delete-account.git#master",


execute the command:

$ yarn
or
$ npm install 


## Properties

| Prop  | Default  | Type | isRequired | Description
| :------------ |:---------------:| :---------------:|:---------------:|--
| url | '' | `string` | ✔️ | API url of the delete account function. |
| id | '' | `number` | ✔️ | Id of user or provider. |
| token | '' | `string` | ✔️ | Token of user or provider. |
| logout_function | '' | `callback function` | ✔️ | Callback to the logout function. |
