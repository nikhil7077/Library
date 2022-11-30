console.log("Conected😊");
 
const tbody = document.getElementsByTagName("tbody")[0];
const alerts = document.getElementsByClassName("alert")[0];
class Book{
    constructor (bookname,authorname,booktype){
        this.bookname=bookname,
        this.authorname=authorname,
        this.booktype=booktype
    }
}

const getData = document.getElementsByClassName("submit_btn")[0];
getData.addEventListener('click', submitted);

var count=0;
function submitted(e) {
    e.preventDefault()
    console.log("Recieved Data");
    const bookname = document.getElementsByClassName("bookname")[0].value;
    const authorname = document.getElementsByClassName("authorname")[0].value;
    const adventure = document.getElementsByClassName("adventure")[0].checked;
    const action = document.getElementsByClassName("action")[0].checked;
    const romantic = document.getElementsByClassName("romantic")[0].checked;


var booktype;
if (adventure) {
    booktype = "Adventure";
}
else if (action) {
    booktype = "Action";
}
else {
    booktype = "Romantic";
}
    const bookdata = new Book(bookname,authorname,booktype)
    console.log(bookdata);
    if(bookname.length>2 && authorname.length>2){
          addrow(bookdata)
    }
    else{
        alerts.classList.remove('hidden')
        setTimeout(()=>{alerts.classList.add('hidden')},2000)
    }
    document.getElementsByTagName("form")[1].reset();
}
function addrow(data){
    count++;
    const newrow=document.createElement("tr");
    newrow.innerHTML=`<th scope="row">${count}</th>
                      <td>${data.bookname}</td>
                      <td>${data.authorname}</td>
                      <td>${data.booktype}</td>`
    tbody.append(newrow)
}
