const functions = {
    lookup(array, key, name) {
        for(let i in array) {
            // console.log(array[i]);
            if(array[i].key === key) {
                // console.log(array[i].fname);
                return array[i][name];
            }
        }
    }

    createCard(person) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(person.fname));
        div.className = 'clCard';
        return div;
    }
};

export default functions;