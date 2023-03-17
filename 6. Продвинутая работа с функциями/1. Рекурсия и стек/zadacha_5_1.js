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

function printReverseList(list) {
    let outputList = list;
    let values = [];
    let value = [];

    while (outputList != null) {
        values.push(outputList.value);
        outputList = outputList.next;
    }

    while (value = values.pop())
        console.log(value);
}

printReverseList(list);