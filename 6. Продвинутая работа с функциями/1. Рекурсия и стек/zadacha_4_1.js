let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let outputList = list;

    while (outputList != null) {
        console.log(outputList.value);
        outputList = outputList.next;
    }
}

printList(list);