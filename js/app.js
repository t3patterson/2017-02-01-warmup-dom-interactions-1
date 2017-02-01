// console.log('wired up!')

//--------------------------------------------------------
//TASK 1: Add the text 'List of Friends' to .title element  
//--------------------------------------------------------

var titleEl = document.querySelector('.title')
titleEl.textContent += ' List of Friends'

//--------------------------------------------------------
//TASK 2: Put this array of strings as <li> elements
//        onto the friends list 
//
//     BONUS: do it in reverse order.
//--------------------------------------------------------
var friendsListEl = document.querySelector('.friends-list')

var friendsListArr = ['Jimmy G.', 'Scotty M.', 'Patty L.', 'Kelly F.', 'Kitty S.']
var friendsListArrReversed = friendsListArr.reverse()

var bigHtmlStr = '' 

forEach(friendsListArrReversed , function(arrayElement, index, theArray){
	bigHtmlStr += "<li>" + arrayElement   + "</li>"
})

friendsListEl.innerHTML = bigHtmlStr


//--------------------------------------------------------
//TASK 3: Capitalize the text in the <li> elements with a 
//        class of 'urgent'
//     
//        BONUS: Capitalize AND make bold the elements with
//               a class of 'urgent' 
//--------------------------------------------------------
var liTaskEls = document.querySelectorAll('.task-list li.urgent')

forEach( liTaskEls , function(domElement, index, theArray){
	//PART 1 
	console.log(domElement)
	console.log( domElement.textContent.toUpperCase() )
	var upperCaseTextContent = domElement.textContent.toUpperCase() 
	domElement.textContent = upperCaseTextContent 

	//BONUS
	// domElement.innerHTML = '<strong>'  + upperCaseTextContent + '</strong>'
	
	console.log('---------')
}) 

