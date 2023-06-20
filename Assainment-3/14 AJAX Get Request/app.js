function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.example.com/data', true)

    xhr.send();
}