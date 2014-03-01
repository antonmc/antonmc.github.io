/* global document window Tabletop globaldata */

var globaldata;

window.onload = function() { 
	var spreadsheet = 'https://docs.google.com/spreadsheet/pub?key=0AhLgoEUzhCg_dHo1RmRfWkgzMzNBbEJibjJWLUpPUlE&output=html';
	Tabletop.init( { key: spreadsheet, callback: showInfo } );
}


function getLexicalContent( details ){

	var lexicalContent = '';
	
	if( details ){
		
		for( var d= 0; d < details.elements.length; d++ ){
			lexicalContent = lexicalContent + '<p>' + details.elements[d].lexicalcontent + '<p>';
		}
	}
	
	return lexicalContent;
}

function getGrammarContent( details ){

	var grammarContent = '';
	
	if( details ){
		
		for( var d= 0; d < details.elements.length; d++ ){
			grammarContent = grammarContent + '<p>' + details.elements[d].grammar + '<p>';
		}
	}
	
	return grammarContent;
}


var terms =	'<p>TELL ME MORE is an independent program, made accessible ' +   
			'to you through Cultura Española. By completing a purchase with ' + 
			'us you agree to follow these Terms of Use and to be bound by them.' + 
			'Cultura Española reserves the right to update the Terms at any time without notice.</p>' +
			'<p class="description"><strong>Service Operation</strong></p>' +
			'<p>Cultura Española does not guarantee the availability of the Service or that any aspect of the service will operate without fault or delay. Cultura Española is not responsible, in any way, for delays or problems incurred, with particular reference to Internet communications services and equipment, third party services and Internet Service Providers. The Service is provided on an “as is” basis without any obligation or liabilities to Cultura Española other than those expressly laid out in these Terms.</p>' + 
			'<p class="description"><strong>Personal use</strong></p>' +
			'<p>Unless otherwise specified, the Services are for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from the Services</p>' +
			'<p class="description"><strong>Software available on this site</strong></p>' +
			'<p>TELL ME MORE, a software made available through Cultura Española’s site is the copyrighted work of Rosetta Stone Inc. Any reproduction or redistribution of the Software is expressly prohibited by law, and may result in severe civil and criminal penalties.</p>' +					
			'<p class="description"><strong>Technical Support</strong></p>' +	
			'<p>Technical support is provided directly by Tell Me More: 1888 388 3535,ext 617</p>' +					
			'<p class="description"><strong>Period of use</strong></p>' +
			'<p>3 months without exceptions, including any technical failure experienced during the validity of the course.</p>' + 			
			'<p class="description"><strong>Payment</strong></p>' +
			'<p>All prices are quoted in Canadian dollars, and are valid and effective only in Canada. The total order amount, including tax will be charged to your credit card in full at the time the order is placed. No exchanges or refunds are available.</p>' + 
			'<p>We accept Visa and Master Card.</p>' + 						
			'<p class="description"><strong>Cancellations or Returns</strong></p>' +
			'<p>We do not accept order cancellations. We do not accept returns due to the nature of product.</p>' +					
			'<p class="description"><strong>Warranty</strong></p>' +
			'<p>No warranty is provided, due to the nature of the product.</p>';


function showDetails( identifier ){

	var lexicalContent = getLexicalContent( globaldata[ identifier.target.id ] );
	var grammarContent = getGrammarContent( globaldata[ identifier.target.id ] );
	
	var storeitem;
	
	for( var item=0; item < globaldata.Overview.elements.length; item++ ){
	
		if( globaldata.Overview.elements[item].identifier === identifier.target.id ){
			storeitem = globaldata.Overview.elements[item];
			break;		
		}
	}
	
	var header = document.getElementById( 'modalHeader' );
	
	header.className = 'modal-header ' + storeitem.level ;
				
	var label = document.getElementById( 'myModalLabel' );
	label.innerHTML = 'Terms of Use - ' + storeitem.description + ' course';
				
	var body = document.getElementById( 'modalBody' );
	body.innerHTML = terms
//	var addButton = document.getElementById( 'addButton' );
//	addButton.className = 'btn btn-primary ' + storeitem.level;
				
	$('#myModal').modal('show');

}


function showInfo(data) {

	globaldata = data;

	var overview = data.Overview;
	
	var store = document.getElementById("storefront");

	for( var row = 1; row <5; row++ ){

		var rowElement = document.createElement( 'div' );
		rowElement.className = 'row-fluid';
		rowElement.innerHTML = '<ul class="thumbnails" id="classes">';
		
		var entries = [];
		var count = 0;
		var className = 'span3';
	
		for( var element = 0; element < overview.elements.length; element++ ){
	
			if( parseInt( overview.elements[element].row ) === row ){
			
				var listItem = document.createElement( 'li' );
				
				var lexicalContent = getLexicalContent( data[ overview.elements[element].identifier ] );
				var grammarContent = getGrammarContent( data[ overview.elements[element].identifier ] );
				
				var buttonClass = overview.elements[element].level + 'Btn';
				
				var template = 	'<div class="thumbnail">' +
									'<div class="caption">' + 
										'<h3 class="' + overview.elements[element].level + '">' + overview.elements[element].description + '</h3>' +
										'<p class="description"><strong>Situations</strong></p>' +
										lexicalContent +
										'<p class="description"><strong>Grammar</strong></p>' +
										grammarContent +
										'<p><strong>Price: ' + overview.elements[element].cost + '</strong></p>' +
										'<p><strong>Valid for: ' + overview.elements[element].duration + '</strong></p>' + 
										
										'<div class="modal-footer">'+
											'<button style="" id="' + overview.elements[element].identifier + '" onclick=showDetails(event) class="' + buttonClass + '">Purchase program licence for the ' + overview.elements[element].description + ' Course</button>' +
										'</div>' +
									'</div>' +
								'</div>';
								
	            listItem.innerHTML = template;
	            
	            entries[ count ] = listItem;
	            
	            count = count + 1;
			}
		}

		switch( entries.length ){
			
			case 1:
				className = 'span12';
				break;
			
			case 2:
				className = 'span6';
				break;
			
			case 3:
				className = 'span4';
				break;
			
			case 4:
				className = 'span3';
				break;
		}
		
		for( var e = 0; e < entries.length; e++ ){
			entries[e].className = className;
			rowElement.firstChild.appendChild( entries[e] );
		}

		store.appendChild( rowElement );
	}
}