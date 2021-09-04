const sendButton = document.getElementById("send");
const namer = document.getElementById("Name");
const number = document.getElementById("Number");
const message = document.getElementById("Message");
const alert = document.getElementById("alert");
const flip = document.getElementById("fip");
const suc = document.getElementById("suc");

//cuando le demos click al alert se ocultara
alert.addEventListener("click", () => {
  document.body.style.setProperty("--positionAlert", "30%");
  alert.style.opacity = "0";
});
//cuando hagamos click en enviar buscara el inpur vacio y lo marcara en rojo
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  const elementss = [namer, number, message];
  elementss.map((targ) => {
    targ.addEventListener("focus", () => {
      targ.style.border = "Transparent";
    });
    if (targ.value.length < 1) {
      targ.style.border = "3px solid red";
      alert.style.opacity = "1";
      document.body.style.setProperty("--positionAlert", "-40%");

      return;
    }
  });
  //si los inpunts no esta vacios haremos una peticion fetch y en el body le pasaremos los inputs
  if (
    namer.value.length > 1 &&
    number.value.length > 1 &&
    message.value.length > 1
  ) {
    fetch("http://localhost:1200/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Nombre: namer.value,
        Numero: number.value,
        MSG: message.value,
      }),
    }).then((e) => {
      //aca crearemos una animacion al enviar el formulario, modificando las variables del css
      document.body.style.setProperty("--flipcart", "180deg");
      document.body.style.setProperty("--successAnimation", "0");
      document.body.style.setProperty("--successColor", "#3BA55D");
    });
  }
});
