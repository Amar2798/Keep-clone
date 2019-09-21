var counter = 0;

function handleButton(index) {
    document.getElementById(index).remove();
}

function getCardHTML(title, contents) {
    return '<div class="card my-1">\
                <div class="card-body">\
                    <h5 class="card-title">' + title + '</h5>\
                    <p class="card-text">' + contents + '</p>\
                    <div class="text-center">\
                    <button type="button" onclick="handleButton(' + counter + ')" class="btn btn-outline-danger">Complete</button>\
                    </div>\
                </div>\
            </div>';
}

function createCard(title, contents) {
    var newCard = document.createElement('div');
    newCard.classList.add('col-4');
    newCard.id = counter;
    document.getElementById('row').appendChild(newCard);
    document.getElementById(newCard.id).innerHTML = getCardHTML(title, contents);
    counter++;
}

function handleClick() {
    var title = document.querySelector('#title').value;
    var contents = document.querySelector('#contents').value;
    console.log(title);
    console.log(contents);

    if(counter == 0) {
        /* Create new row
        Then, create card and append */
        var newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.id = 'row';
        document.getElementById('cardContents').appendChild(newRow);
    } 

    createCard(title, contents);

    //Clear input fields
    document.querySelector('#title').value = document.querySelector('#contents').value = '';
}