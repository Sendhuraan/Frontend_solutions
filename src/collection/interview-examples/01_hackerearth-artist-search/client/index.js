import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import $ from 'jquery';
import 'bootstrap';

(function() {


	document.getElementById('search-artist-btn').addEventListener('click', openModal);
	document.getElementById('close-btn').addEventListener('click', closeModal);

	document.getElementById('search-btn').addEventListener('click', function() {
		var artistName = document.getElementById('artistName').value;
		var tracks = document.getElementById('tracks').value;
		var url = 'http://itunes.apple.com/search?term='+artistName+'&limit='+tracks;

		doAjaxRequest(url, 'GET')
		.then(processArtistsInfo);
	});


	/*****/

	function openModal(){
		$('#modalBox').show();
		$('#searchBtn').hide();
	}

	function closeModal(){
		$('#searchBtn').show();
		$('#modalBox').hide();
	}

	function doAjaxRequest(url, methodType){

		return new Promise(function(resolve, reject) {

			var xhr = new XMLHttpRequest();
			xhr.open(methodType, url, true);
			xhr.send();
			xhr.onreadystatechange = function(){
				if (xhr.readyState === 4){
					if (xhr.status === 200){
						console.log('xhr done successfully');
						var resp = xhr.responseText;
						var respJson = JSON.parse(resp);
						resolve(respJson);
					}
					else {
						reject(xhr.status);
						console.log('xhr failed');
					}
				}
				else {
					console.log('xhr processing going on');
				}	
			};

			console.log('request sent succesfully');

		});
	}

	function createTab(collection){

		var tabsNavStr = collection.reduce(function(tabNavStr, value, key) {

			if(key === 0) {
				tabNavStr += `<li class='nav-item'>
								<a class='nav-link active' data-toggle='tab' href='#Jack${key}'>Jack</a>
							</li>`;
			}
			else {
				tabNavStr += `<li class='nav-item'>
								<a class='nav-link' data-toggle='tab' href='#Jack${key}'>Jack</a>
							</li>`;
			}
			
			return tabNavStr;

		}, '');

		var tabsContentStr = collection.reduce(function(tabStr, value, key) {

			if(key === 0) {
				tabStr += `<div class='tab-pane active container' id='Jack${key}'>
								<p><img src='${value.artworkUrl30}'</p>
								<p>Artist Name: ${value.artistName}</p>
								<p>Artist Track: ${value.trackName}</p>
							</div>`;
			}
			else {
				tabStr += `<div class='tab-pane container' id='Jack${key}'>
								<p><img src='${value.artworkUrl30}'</p>
								<p>Artist Name: ${value.artistName}</p>
								<p>Artist Track: ${value.trackName}</p>
							</div>`;
			}
			
			return tabStr;

		}, '');

		$('#searchBtn,#modalBox').hide();
		$('#tabSec').show();

		document.getElementById('tabDisplay').innerHTML = tabsNavStr;
		document.getElementById('tabDataDisplay').innerHTML = tabsContentStr;
	}

	function processArtistsInfo(data) {
		var artists = data.results;
		createTab(artists);
	}

})();
