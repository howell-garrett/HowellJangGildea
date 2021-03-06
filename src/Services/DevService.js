export default class DevService {

    static getInstance() {
        if (DevService.myInstance == null) {
            DevService.myInstance =
                new DevService();
        }
        return this.myInstance;
    }


findDevById = did => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${did}`)
    .then(response => response.json())

findAllDevs = () => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/developers`)
    .then(response => response.json())

findDevGamesById = did => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${did}/games`)
    .then(response => response.json())

deleteDev = did =>
fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${did}`, {
    method: 'DELETE'

}).then(response => response.json())

updateDev = ( newUser, id) => {
  console.log(id)
  fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${id}`, {
     method: 'put',
     body: JSON.stringify(newUser),
     headers: {
        'content-type': 'application/json'
     }
      })
}

}