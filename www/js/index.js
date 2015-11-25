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
   var pageOptionsLast = $('#pageOptionsLast');
   var currentPage = story[idCurrent];
   var counter = 1;

   pageNumber.text(storage.getItem('page'));
   pageText.text(currentPage.text);

   pageOptions.text('');
   pageOptionsLast.text('');
   for(var id in currentPage.options){
     if(counter < 3)
     {
         pageOptions.append(
         '<div class="col-sm-6">' +
         '<button onclick="changePage(' + currentPage.options[id].nextPage + ')" class="btn btn-primary btn-block">' + currentPage.options[id].text + '</button>' +
         '</div>'
         );
         counter ++;
      }
      else
      {
         pageOptionsLast.append(
            '<div class="col-sm-6">' +
            '<button onclick="changePage(' + currentPage.options[id].nextPage + ')" class="btn btn-primary btn-block">' + currentPage.options[id].text + '</button>' +
            '</div>'
         );
      }
   }
}

function changePage(id)
{
   // Go to next page
   idCurrent = id;
   storage.setItem('page', idCurrent);
   updateView();
}
