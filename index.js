for (i = 0; i < 64; i++) {
    const row = document.createElement('div');
    row.className = 'row'
    document.querySelector('.container').appendChild(row);

    for (j = 0; j < 64; j++) {
        const col = document.createElement('div');
        col.className = 'col'
        col.id = `square-${i + 1}-${1 + j}` 
        row.appendChild(col);

    }
}


document.querySelectorAll('.col').forEach(col => {
    col.addEventListener("mouseover", function() {
        document.getElementById(col.id).style = "background-color: red"
        
        
    })
})

function new_sketch(grid_size) {


}