$(function() {

  let options = {
    valueNames: ["name", "category"]
  };

  let userList = new List("search-results", options);
  let activeFilters = [];

  // filter
  $(".filter").change(function() {
    let isChecked = this.checked;
    let value = $(this).data("value");

    if (isChecked) {
      // add to list of active filters
      activeFilters.push(value);
    } else {
      // remove from active filters
      activeFilters.splice(activeFilters.indexOf(value), 1);
    }
    userList.filter(function(item) {
      if (activeFilters.length > 0) {
        return activeFilters.indexOf(item.values().category.replace(/&amp;/g, "&")) > -1;
      }
      return true;
    });
  });

});
