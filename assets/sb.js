const specialCellsDoubleLetter = [[3,0], [6,2], [6,6], [7,3]];
const specialCellsTripleLetter = [[5,1], [5,5]];
const specialCellsDoubleWord = [[1,1], [2,2], [3,3], [4,4], [7,7]];
const specialCellsTripleWord = [[0,0], [7,0]];

/*>>> dl = complete( [[3,0], [6,2], [6,6], [7,3]])
>>> dl
[(0, 3), (0, 11), (2, 6), (2, 8), (3, 0), (3, 7), (3, 14), (6, 2), (6, 6), (6, 8), (6, 12), (7, 3), (7, 11), (8, 2), (8, 6), (8, 8), (8, 12), (11, 0), (11, 7), (11, 14), (12, 6), (12, 8), (14, 3), (14, 11)]
>>> len(dl)
24
>>> tl = complete([[5,1], [5,5]])
>>> tl
[(1, 5), (1, 9), (5, 1), (5, 5), (5, 9), (5, 13), (9, 1), (9, 5), (9, 9), (9, 13), (13, 5), (13, 9)]
>>> len(tl)
12
>>> 
>>> dw = complete([[1,1], [2,2], [3,3], [4,4], [7,7]])
>>> dw
[(1, 1), (1, 13), (2, 2), (2, 12), (3, 3), (3, 11), (4, 4), (4, 10), (7, 7), (10, 4), (10, 10), (11, 3), (11, 11), (12, 2), (12, 12), (13, 1), (13, 13)]
>>> len(dw)
17
>>> tw = complete([[0,0], [7,0]])
>>> tw
[(0, 0), (0, 7), (0, 14), (7, 0), (7, 14), (14, 0), (14, 7), (14, 14)]
>>> 
def complete(l):
    s = set()
    for i, j in l:
        s.add((i, j))
        s.add((j, i))
    l = list(s)
    s = set()
    for i, j in l:
        s.add((i, j))
        s.add((14-i, j))
        s.add((14-i, 14-j))
        s.add((i, 14-j))
    l = list(s)
    l.sort()
    return l
    
    */


const specialCells = [];

for (i=0; i<15; i++) {
    specialCells.push([]);
}

for (i=0; i<15; i++) {
    for (j=0; j<15; j++) {
        let sC = specialCellsDoubleLetter;
        if (sC.contains([i, j])
    }
}

function createGrid() {
    for (i=0; i<15; i++) {
        for (j=0; j<15; j++) {
            let cell = createSVGElement('rect');
            let class = "grd-cel";
            
            cell.setSVGAttributes({
                class: "grd-cel"
                x: i*20,
                y: j*20,
                width: 20,
                height: 20
            });
        }
    }
}
