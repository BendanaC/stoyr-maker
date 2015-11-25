var storage = window.localStorage;

// Setup
var pageView = storage.getItem('menuPage') ? storage.getItem('menuPage') : 0;
storage.setItem('menuPage', pageView);

menuCreation();

// Set menu options
function menuCreation()
{
   var selectMenu = $('#selectMenu');
   var exitContent = $('#exitContent');
   var goToMenu = $('#goToMenu');

   selectMenu.text('');
   goToMenu.text('');
   if(pageView === 3)
   {
      var exitText = 'Nos vemos pronto!!'
      exitContent.append(
         '<div class="jumbotron">' +
         '<h3>' + exitText + '</div>' +
         '</div>'
      );
   }
   else if(pageView === 1)
   {
      for(var pos in story)
      {
         selectMenu.append(
         '<div class="col-sm-12" style="margin-top:2%; margin-bottom: 2%">' +
         '<a href="story.html?story=' + story[pos].id + '" class="btn btn-success btn-block">' + story[pos].name + '</a>' +
         '</div>'
         );
      }
      goToMenu.append(
         '<div class="row">' +
         '<div class="col-sm-12" style="margin-bottom: 2%">' +
         '<a class="btn btn-warning btn-block" href="index.html">Go back to Menu</a>' +
         '</div>' +
         '</div>'
      );
   }
   else
   {
      for(var num in menuOptions)
      {
         selectMenu.append(
         '<div class="col-sm-12" style="margin-bottom: 2%; margin-top: 2%">' +
         '<button onclick="changePage(' + menuOptions[num].page + ')" class="btn btn-info btn-block">' + menuOptions[num].bText + '</a>' +
         '</div>'
         );
      }
   }
}

function changePage(view)
{
   // Go to next page
   pageView = view;
   storage.setItem('menuPage', pageView);
   menuCreation();
}
