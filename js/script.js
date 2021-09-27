const getData = () => {
   fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data => {

        console.log(data);
        for(let user of data){
            let pId = document.createElement('p');
            let pName = document.createElement('p');
            let pWebsite = document.createElement('p');

            pId.innerText = `User ID: ${user.id}`
            pName.innerText = `User Name: ${user.name}`
            pWebsite.innerHTML = `User URL: ${user.website}<br /> --------`

            document.body.appendChild(pId);
            document.body.appendChild(pName);
            document.body.appendChild(pWebsite);
        }

    })
    .catch(error => {
        console.error(error);
    })
}


const scrollToEndOfPage = () => {

    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;

    let sumScrollClientHeigth = Math.ceil(scrollTop + clientHeight);

    if(sumScrollClientHeigth >= scrollHeight){

        getData();
    }

}


window.addEventListener('scroll', scrollToEndOfPage);