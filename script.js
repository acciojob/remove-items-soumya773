function removeSelectedColor() {
    const select = document.getElementById("colorSelect");
    const selectedValue = select.value;

    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === selectedValue) {
        select.remove(i);
        break;
      }
    }
  }