const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
const URL_API = "https://api.telegram.org/bot5584122662:AAHOJ5qeZncbN-0VKx6tcy4MmIHxZwhog3U/sendMessage";
const CHAT_ID = "1662589958";


document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let message = `<b>Xona Bron Kadan</b>\n`;
    message += `<b>Keladigan Kun: </b> ${ this.data.value }\n`;
    message += `<b>Ketadigan Kun: </b> ${ this.data1.value }\n`;
    message += `<b>Odamlar Soni: </b> ${ this.adults.value }\n`;
    message += `<b>Telefon Nomer: </b> ${ this.childrens.value }\n`;
    message += `<b>Xona Soni: </b> ${ this.rooms.value }\n`;

      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
    .then((res) => {
      this.adults.value = "";
      this.data.value = "";
      this.data1.value = "";
      this.childrens.value = "";
      this.rooms.value = "";
      success();  
    })
    .catch((err) => {
      console.warn(err);
      emptyerror();
    })
    .finally(() => {
      console.log('Конец')
    })
})
function emptyerror () {
  swal({
    title: "Oh No... ",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success () {
  swal({
    title: "Message sent successfuly",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}

