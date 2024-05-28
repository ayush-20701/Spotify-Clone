const search = document.getElementById('search')
const home = document.getElementById('home')
const searchSvg = document.getElementById('searchSvg')

//hover over search button
search.addEventListener('mouseover', function() {
    search.style.color = '#ffffff'
    searchSvg.querySelector('path').setAttribute('fill', '#ffffff')
});
search.addEventListener('mouseout', function() {
    search.style.color = '#b3b3b3'
    searchSvg.querySelector('path').setAttribute('fill', '#b3b3b3')
    search.style.textDecoration = 'underline'
    setTimeout(() => {
        search.style.textDecoration = 'none'
    }, 70);
})

//hover out from home button
home.addEventListener('mouseout', function() {
    home.style.textDecoration = 'underline'
    setTimeout(() => {
        home.style.textDecoration = 'none'
    }, 70);
})

//hover over login button
const loginBtn = document.getElementById('login')
const loginDiv = loginBtn.querySelector('div')
loginBtn.addEventListener('mouseover', function() {
    loginBtn.style.transform = 'scale(1.04)'
    loginDiv.style.backgroundColor = '#f6f6f6'
})
loginBtn.addEventListener('mouseout', function() {
    loginBtn.style.transform = 'scale(1)'
    loginDiv.style.backgroundColor = '#ffffff'
})

//hover over plus button
const plusBtn = document.getElementById('plusBtn')
plusBtn.addEventListener('mouseover', function() {
    plusSvg.querySelector('path').setAttribute("fill", "white")
    plusBtn.style.backgroundColor = "#1a1a1a";
})
plusBtn.addEventListener('mouseout', function() {
    plusSvg.querySelector('path').setAttribute("fill", "default")
    plusBtn.style.backgroundColor = "transparent";
})