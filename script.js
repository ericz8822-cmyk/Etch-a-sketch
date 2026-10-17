const body = document.querySelector('body');
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



function hovereffect(individual){
    individual.addEventListener('mouseenter', function() {
        individual.style['background-color'] = 'black';
    })
    individual.addEventListener('mouseleave', function() {
        individual.style['background-color'] = 'rgb(238, 237, 237)';
    })
    console.log('hover effect added');
}

let grid = document.querySelectorAll('.grid');
grid.forEach((individual) => {hovereffect(individual)});



function addGrids(num) {
    let grids = document.createElement('div');
    grids.classList.add('grids');
    for (let  i = 0; i < num; i ++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.id = `row ${i+1}`
        grids.appendChild(row);
        // console.log(`row ${i+1} created`);
        for (let j = 0; j < num; j ++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            grid.id = `grid ${i+1} ${j+1}`;
            row.appendChild(grid);
            // console.log(`grid ${i+1} ${j+1} created`);
        }
    }
    body.appendChild(grids);

    let grid = document.querySelectorAll('.grid');
    grid.forEach((individual) => {hovereffect(individual)});
}

let btn = document.querySelector('button')
btn.addEventListener('click', function() {
    let num = prompt('Enter the number of squares per side you want for the new grids', 16);
    let old = document.querySelector('div');
    old.remove();
    addGrids(num);
})


