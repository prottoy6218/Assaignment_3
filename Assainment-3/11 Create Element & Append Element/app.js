let data = [1, 2, 3, 4, 5]
let list = document.getElementById('unlist');
for(i = 0; i < data.length; i++){
    var li = document.createElement('li');
    li.innerHTML = data[i];
    list.appendChild(li);
}