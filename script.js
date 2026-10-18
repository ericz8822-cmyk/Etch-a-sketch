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
        grid.setAttribute('r', Math.floor(Math.random() * 50 + 50));
        grid.setAttribute('g', Math.floor(Math.random() * 76 + 180));
        grid.setAttribute('b', Math.floor(Math.random() * 30 + 40));
        grid.setAttribute('opacity', 0.3);
        row.appendChild(grid);
        // console.log(`grid ${i+1} ${j+1} created`);
    }
}



function hovereffect(individual){
    individual.addEventListener('mouseenter', function() {
        const max = 76;
        let r = individual.getAttribute('r');
        let g = individual.getAttribute('g');
        let b = individual.getAttribute('b');
        let a = individual.getAttribute('opacity');
        individual.style['background-color'] = `rgba(${r}, ${g}, ${b}, ${a})`;
        if (a <= 0.9) {
            individual.setAttribute('opacity', Number(a) + 0.1);
            // console.log('opacity changed');
        }
        // console.log(a)
    })
    individual.addEventListener('mouseleave', function() {
        let r = individual.getAttribute('r');
        let g = individual.getAttribute('g');
        let b = individual.getAttribute('b');
        let a = individual.getAttribute('opacity');
        individual.animate(
            [
                {backgroundColor:`rgba(${r}, ${g}, ${b}, ${a})`},
                {backgroundColor:'rgb(238, 237, 237)'}
            ],
            {
                duration: 10000,
                fill: 'forwards',
                easing: 'ease-in-out'
            }
        )
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
            grid.setAttribute('r', Math.floor(Math.random() * 50 + 50));
            grid.setAttribute('g', Math.floor(Math.random() * 76 + 180));
            grid.setAttribute('b', Math.floor(Math.random() * 30 + 40));
            grid.setAttribute('opacity', 0.3);
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
    if (num < 1) {
        alert('please enter an integer above 1')
    } else if (num > 100) {
        alert('please enter a number below 100 to prevent from delaying or freezing');
    } else {
        let old = document.querySelector('div');
        old.remove();
        addGrids(num);
    }
})


