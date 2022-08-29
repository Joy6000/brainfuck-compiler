const {
    readFileSync
} = require("fs");


const interpret = async (filename) => {

    if (!filename.endsWith('.bf')) return console.warn('Filename must end with .bf');
    const filepath = `${require.main.path}\\bf\\${filename}`;
    const data = readFileSync(filepath, 'utf-8');
    if (!data) return console.warn('File not found');



        const allowed = ['>', '<', '+', '-', '.', ',', '[', ']'];
        const code = data.split('');
        let cells = [0];
        let thisCell = 0;
        let loops = [0];
        let output = '';
        let looping = false;

        for (let i = 0; i < code.length; i++) {
            if (looping) {
                if (code[i] === '[') loops++
                if (code[i] === ']') {
                    if (loops == 0) looping = false
                    else loops--
                }
            }
            if (allowed.includes(code[i])) {
                switch (code[i]) {
                    case ">":
                        thisCell++
                        if (!cells[thisCell]) cells.push(0)
                        break
                    case "<":
                        thisCell--
                        if (thisCell < 0) {
                            beginning();
                            return 'Error: You can\'t go back with "<" before the first cell.'
                        }
                        break
                    case "+":
                        cells[thisCell]++
                        if (cells[thisCell] > 255) {
                            beginning();
                            return 'Cells can\'t have a value higher value than 255'
                        }
                        break
                    case "-":
                        cells[thisCell]--
                        break
                    case ".":
                        output = output + String.fromCharCode(cells[thisCell])
                        break
                    case ",":
                        cells[thisCell] = prompt().charCodeAt(1);
                        break;
                    case "[":
                        if (cells[thisCell] == 0) {
                            looping = true
                        } else {
                            loops.push(i);
                        }
                        break
                    case "]":
                        if (cells[thisCell] != 0) {
                            i = loops[loops.length - 1]
                        } else {
                            loops.pop()
                        }


                }

        }
        function beginning() {
            thisCell = 0
            cells = [0]
        }

    }
    return output

}



module.exports = interpret