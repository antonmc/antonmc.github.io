/*global document google Tabletop Showdown*/
/*jslint browser:true*/

var projects = [ 	{ name:"Picker", thumbnail:"colorpicker.png"}, 
					{ name:"Timeline", thumbnail:"timeline.png"},
					{ name:"Orion", thumbnail:"orion.png"},
					{ name:"Cardinals", thumbnail:"cardinals.png", path:"http://www.hickory.ca/cardinals/" },
					{ name:"Icons", thumbnail:"icons.png", path:"http://goo.gl/eK3q98" },
					{ name:"ShelterBox", thumbnail:"shelterbox.png", path:"http://goo.gl/UMt62l" },
					{ name:"DM", thumbnail:"dmthumb.png", path:"https://jazz.net/products/design-management/" },
					{ name:"Cultura", thumbnail:"culturathumb.png", path:"http://goo.gl/BOqF5s"},
					{ name:"Amnesty", thumbnail:"amnesty.png", path:"http://www.hickory.ca/campaigner/" },
					{ name:"Doodles", thumbnail:"moose.png"},
					{ name:"OrionProduct", thumbnail:"orioneclipse.png"},
					{ name:"TeamBuilder", thumbnail:"teambuilder.png"} ]; 

 
 
function addTile( project ){

	var element = document.createElement( 'a' );
	element.className = 'project';
    
	
	if( project.path ){
		element.href = project.path;
        
       
	}else{
        element.href = '#demoLightbox';   
        element.setAttribute( 'data-toggle', 'lightbox' );
    }
	
	var container = document.createElement( 'div' );

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
	
	var image = document.createElement( 'img' );
	image.style.top = '0';
	image.style.left =  '0';
	image.style.width = '194px';
	image.style.height =  '194px'; 
	image.style.position = 'relative';
	image.src = 'http://www.hickory.ca/portfolio/thumbnails/' + project.thumbnail;
	
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
	container.appendChild( borderedPic );
	container.appendChild( projectTitle );
	element.appendChild( container );
	
	var wrapper = document.getElementById( 'wrapper' );
	
	wrapper.appendChild( element );
} 
 
window.onload = function() {
	projects.forEach( addTile );
};