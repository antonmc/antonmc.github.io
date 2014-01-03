var projects = [ 	{ name:"Picker", thumbnail:"colorpicker.png"}, 
					{ name:"Timeline", thumbnail:"timeline.png"},
					{ name:"Orion", thumbnail:"orion.png"},
					{ name:"Cardinals", thumbnail:"cardinals.png"},
					{ name:"Icons", thumbnail:"icons.png"},
					{ name:"ShelterBox", thumbnail:"shelterbox.png"},
					{ name:"DM", thumbnail:"dmthumb.png"},
					{ name:"Cultura", thumbnail:"culturathumb.png"},
					{ name:"Amnesty", thumbnail:"amnesty.png"},
					{ name:"TeamBuilder", thumbnail:"teambuilder.png"},
					{ name:"OrionProduct", thumbnail:"orioneclipse.png"}]; 
 
 
function addTile( project ){

	var element = document.createElement( 'a' );
	element.className = 'project';

	var borderedPic = document.createElement( 'div' );
	borderedPic.className = 'borderedPic';
	
	var projectImage = document.createElement( 'div' );
	projectImage.className = 'project-image';
	
	var intrinsic = document.createElement( 'div' );
	intrinsic.className = 'intrinsic';
	
	var contentFill = document.createElement( 'div' );
	contentFill.className = 'content-fill';
	contentFill.style.overflow = 'hidden';
	
	var projectTitle = document.createElement( 'div' );
	projectTitle.className = 'project-title';
	projectTitle.innerHTML = project.name;
	
	var image = document.createElement( 'image' );
	image.style.top = '0';
	image.style.left =  '0';
	image.style.width = '194px';
	image.style.height =  '194px'; 
	image.style.position = 'relative';
	image.src = 'portfolio/thumbnails/' + project.thumbnail;
	
	borderedPic.onmouseover = function(){
		projectTitle.style.opacity = 1;
	}
	
	projectTitle.onmouseover = function(){
		projectTitle.style.opacity = 1;
	}
	
	borderedPic.onmouseout = function(){
		projectTitle.style.opacity = 0;
	}
	
	projectTitle.onmouseout = function(){
		projectTitle.style.opacity = 0;
	}
		
	contentFill.appendChild( image );
	intrinsic.appendChild( contentFill );
	projectImage.appendChild( intrinsic );
	borderedPic.appendChild( projectImage );
	element.appendChild( borderedPic );
	element.appendChild( projectTitle );
	
	var wrapper = document.getElementById( 'wrapper' );
	
	wrapper.appendChild( element );
} 
 
window.onload = function() {
	projects.forEach( addTile );
};