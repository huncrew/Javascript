const heroes = [
    ['NAME', 'OCCUPATION', 'CHEESE'],
    ['John D Rockefeller', 'Businessman'],
    ['Thomas Edison', 'Inventor'],
    ['Tupac', 'Story-Teller'],
    ['Eminem', 'Rapper'],
    ['Oasis', 'RocknRoll'],
]

// printing a single column of a row
const rowData = (data) => {
    data.forEach((row) => {
        let rowData = row[0].trim();
        console.log(rowData);
    })
}
// pretty printing
const display = (grid) => {
    let output = "\n";
    grid.forEach((row) => {
    output += `${row[0]} | ${row[1]} | ${row[2]}\n`
    });
    console.log(output);
}
const accessColumns = (data) => {
    data.forEach((row) => {
        // forEach() method will make col every next value in the row
        row.forEach((col) => {
        // .trim() method will remove all whitespaces
        col = col.trim();
        console.log(col);
        })
    })
}

//accessing inner array
accessColumns(heroes);


