var storage = window.localStorage;

// Setup
var idCurrent = storage.getItem('page') ? storage.getItem('page') : 0;
storage.setItem('page', idCurrent);

updateView();

function updateView()
{ 
  var pageNumber = $('#pageNumber');
  var pageText = $('#pageText');
  var pageOptions = $('#pageOptions');
  var currentPage = story[idCurrent];
  
  pageNumber.text(storage.getItem('page'));
  pageText.text(currentPage.text);

  pageOptions.text('');
  for(var id in currentPage.options){
    pageOptions.append(
      '<button onclick="changePage(' + currentPage.options[id].nextPage + ')" class="btn btn-primary">' + currentPage.options[id].text + '</button>' + '<br>' + '<br>'
    );
  }
}

function changePage(id)
{
  // Go to next page
  idCurrent = id;
  storage.setItem('page', idCurrent);
  updateView();
}
