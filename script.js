//panels variable created for all panels on viewport
//puts panels into a node list or array
//panels is 0 indexed
const panels = document.querySelectorAll('.panel')

//loop through panels using arrow function
//listen for when user clicks on a panel
//when user clicks show panel clicked and then
//remove other panel that was showing on viewport
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}