$(function() {

  console.log('ft');

  var options = {
    valueNames: ["name", "category"]
  };

  var userList = new List("search-results", options);
  var activeFilters = [];

  // filter
  $(".filter").change(function() {
    var isChecked = this.checked;
    var value = $(this).data("value");
    if (isChecked) {
      // add to list of active filters
      activeFilters.push(value);
    } else {
      // remove from active filters
      activeFilters.splice(activeFilters.indexOf(value), 1);
    }
    userList.filter(function(item) {
      if (activeFilters.length > 0) {
        return activeFilters.indexOf(item.values().category) > -1;
      }
      return true;
    });
  });

});
