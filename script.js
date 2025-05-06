//your JS code here. If required.
function removeSelectedColor() {
      const selectElement = document.getElementById("colorSelect");
      const selectedIndex = selectElement.selectedIndex;

      if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
      }
    }