var storage = window.localStorage;

// Setup
var storyToTell = getParameter('story'); //Get story
var currentPage = storage.getItem('page') ? storage.getItem('page') : '0'; //Set story page
storage.setItem('page', currentPage);

updateView();

//Get parameter from URL to know which story to tell
function getParameter(param)
{
   var url = window.location.search.substring(1);
   var getParam = url.split('=');
   if(getParam[0] === param) return getParam[1];
}

function updateView()
{
   var selectedStory = story[storyToTell];
   var storyTittle = $('#storyTittle');
   var pageNumber = $('#pageNumber');
   var pageText = $('#pageText');
   var pageOptions = $('#pageOptions');
   var storyPage = selectedStory.pages[currentPage];
   var counter = 1;

   storyTittle.text(selectedStory.name);
   pageNumber.text('Página: ' + storyPage.pageNumber);
   pageText.text(storyPage.text);

   pageOptions.text(''); //Reset options
   for(var id in storyPage.options){
      pageOptions.append(
         '<div class="col-sm-6" style="margin-top: 4%; margin-bottom: 4%">' +
         '<button onclick="changePage(' + storyPage.options[id].nextPage +
         ')" class="btn btn-primary btn-block">' + storyPage.options[id].text +
         '</button>' +
         '</div>'
      );
      counter ++;
   }
}

function changePage(page)
{
   // Go to next page
   currentPage = page;
   storage.setItem('page', currentPage);
   updateView();
}
