const LinksSocialMedia = {
    github: "MatheusL03",
    youtube: "channel/UCOHKQe5reCiKdBebf7Q7Q-g",
    instagram: "matheussl3",
    facebook: "www.facebook.com",
    linkedin: "in/matheus-de-lima-alves-565904233/"
}


function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
       const social = li.getAttribute('class')

       li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
    }
    
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        nameGithub.textContent = data.login
        usarLinkGithub.href = data.html_url
    })
}

getGitHubProfileInfos()