const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};
const displayUsers = (users) => {
  const userConatiner = document.getElementById("users-container");
  for (const user of users) {
    console.log(user);
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
    <h3>User Name  ${user.name.first} ${user.name.last}</h3>    
    <p>Email ${user.email}</p>
    <p>img${user.picture.large}</p>
    <p> User location ${user.location.city} ${user.location.country}</p>
    
    <p> User info</p>
    `;
    userConatiner.appendChild(userDiv);
  }
};

loadUsers();
