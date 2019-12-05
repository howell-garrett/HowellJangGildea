export default class ReviewService {

    static getInstance() {
        if (ReviewService.myInstance == null) {
            ReviewService.myInstance =
                new ReviewService();
        }
        return this.myInstance;
    }


createReview = (content, game, user) => {
    console.log(content + " gameName: " + game.name + " userName: " + user.name)
    let newReview;
    newReview = {reviewContent:content, game: game ,consumer:user}
   fetch("https://damp-hollows-38137.herokuapp.com/api/reviews", {
    // fetch(`http://localhost:8080/api/reviews`, {
     method: 'post',
     body: JSON.stringify(newReview),
     headers: {
            'content-type': 'application/json'
     }
  });
  }


findReviewById = rid => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/reviews/${rid}`)
    .then(response => response.json())


deleteReview = rid =>
fetch(`https://damp-hollows-38137.herokuapp.com/api/reviews/${rid}`, {
    method: 'DELETE'

}).then(response => response.json())

}