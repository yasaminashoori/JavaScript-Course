function formatNumber() {
    
    let numInput = document.getElementById("myNumberInput");

    let num = parseFloat(numInput.value.replace(/,/g, ""));

    if (!isNaN(num)) {
      let formattedNum = num.toLocaleString('en-US');
      numInput.value = formattedNum;
    } else {
      numInput.value = "";
    }
  }
