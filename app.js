$("#bin").on("change", function () {
  if (
    $("#bin")
      .val()
      .match(/^[0-1]+$/g) === null
  ) {
    $("#bin").val("");

    return alert("Either 0 or 1 only");
  }

  $dec = parseInt($("#bin").val(), 2);

  return setInterval(() => {
    $("#result").val($dec);
  }, 100);
});
