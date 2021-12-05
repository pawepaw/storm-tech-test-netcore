function toogleDoneItems(){
    let doneItems = document.querySelectorAll("[data-done='True']");

    for (let i = 0; i< doneItems.length; ++i) {
        doneItems[i].classList.toggle('hidden-done-item');
    }
}