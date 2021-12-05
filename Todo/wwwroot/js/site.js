function toogleDoneItems(){
    let doneItems = document.querySelectorAll("[data-done='True']");

    for (let i = 0; i< doneItems.length; ++i) {
        doneItems[i].classList.toggle('hidden-done-item');
    }
}

function orderByRank() {
    orderBy(rankComparator);
}

function orderByImportance() {
    orderBy(importanceComparator);
}

function orderBy(comparator){
    let todoitems = document.querySelectorAll("[data-importance]");
    let todoItemsArray = Array.from(todoitems);
    let sorted = todoItemsArray.sort(comparator);
    sorted.forEach(e => document.querySelector("#todo-items").appendChild(e));
}

function rankComparator(a,b) {
    if (a.dataset.rank > b.dataset.rank)
        return -1;
    if (a.dataset.rank < b.dataset.rank)
        return 1;
    return 0;
}

function importanceComparator(a,b) {
    if (a.dataset.importance < b.dataset.importance)
        return -1;
    if (a.dataset.importance > b.dataset.importance)
        return 1;
    return 0;
}