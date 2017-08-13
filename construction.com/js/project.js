const projects = document.querySelector('#projects');
const projectNav = projects.querySelector('#projNavs');

function hoverState(e){
	if(e.target.tagName === 'LI'){
		const navHover = e.target;
		if(!navHover.classList.contains('selected')){
			e.target.classList.add('selected');
		}else {
			e.target.classList.remove('selected');
		}
	}
		
}

projectNav.addEventListener('mouseover', hoverState);
projectNav.addEventListener('mouseout', hoverState);