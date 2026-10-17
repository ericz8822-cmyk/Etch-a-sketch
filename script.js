const h1 = document.querySelector('h1');
const grids = document.querySelector('.grids');

for (let  i = 0; i < 16; i ++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.id = `row ${i+1}`
    grids.appendChild(row);
    // console.log(`row ${i+1} created`);
    for (let j = 0; j < 16; j ++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.id = `grid ${i+1} ${j+1}`;
        row.appendChild(grid);
        // console.log(`grid ${i+1} ${j+1} created`);
    }
}