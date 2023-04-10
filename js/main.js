
document.querySelector("button").addEventListener("click", getProfile)

function getProfile(){

  const url = "https://randomuser.me/api/"

  fetch(url) 
      .then(res => res.json()) // parse response as JSON 
      .then(data => { 
        console.log(data) 
  
        let first = data.results[0].name.first
        
        document.querySelector("img").src = data.results[0].picture.large
        document.querySelector('.first').innerText = first
        let last = document.querySelector('.last').innerText = data.results[0].name.last
        let gender = document.querySelector('.gender').innerText = data.results[0].gender
        let location = document.querySelector('.location').innerText = data.results[0].location.state
        let email = document.querySelector('.email').innerText = data.results[0].email
  
  
  
  
  
  
  
        console.log(first)
  
  
  
        let ageUrl = `https://api.agify.io?name=${first}`
  
  
  
  
        fetch(ageUrl) 
        .then(res => res.json()) // parse response as JSON 
        .then(dataAge => { 
          console.log(dataAge) 

          document.querySelector('.age').innerText = dataAge.age

          if(dataAge.age === null){
            document.querySelector('.age').innerText = 'Pick An Age Of Your Choice!'
          }




        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        });
  
  
  
  
      }) 
      .catch(err => { 
          console.log(`error ${err}`) 
      });


}
