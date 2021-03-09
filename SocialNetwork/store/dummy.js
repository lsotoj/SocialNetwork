const db = {
    'user': [
        {id: '1', name: 'Luis'},
    ],
};

async function list(tabla) {
    if (!db[tabla]) {
        db[tabla] = [];
    }
    return db[tabla]
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    if( !db[tabla] ) {
        db[tabla] = [];
    } 
    db[tabla].push(data);

    console.log(db);
}

async function remove(tabla, id) {
    let col = await list(tabla);

    function getIndex(user) {
        return user.id === id;
    }

    let index = col.findIndex(getIndex)
    let removed = col.splice(index,1);
    console.log(removed);
    return removed;
}

module.exports = {
    list,
    get,
    upsert,
    remove
};