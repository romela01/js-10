
let contents = document.querySelector('.contents')

function requist(url){
    return new Promise( (resolve, reject)=>{
        fetch (url)
        .then(response => response.json())
        .then((response)=>{
            resolve(response.data)
            
        })
    })
}

requist('https://reqres.in/api/users')

 .then( (response)=>{
        console.log(response)
        createCard(response)

    } )
    .catch( (reject)=>{

    } )


    function createCard(items){
            
        items.forEach(item => {
            let div = document.createElement('div')
            div.classList.add('divList')
            let ul = document.createElement('ul')

            let li1 = document.createElement('li');
            li1.textContent ='Name: ' +item.first_name;
            ul.appendChild(li1);

            let li2 = document.createElement('li');
            li2.textContent ='Last Name: ' +item.last_name;
            ul.appendChild(li2);

            let img = document.createElement('img');
            img.src =item.avatar;

            let email = document.createElement('p');
            email.textContent ='Email: '+ item.email;

            div.appendChild(ul)
            div.appendChild(img)
            div.appendChild(email)
            
            contents.appendChild(div)
        });
    }

    