import { kanjiList } from './kanjiList.js'


function test (params) {
    console.log(params);
    const { kanji, ...other} = kanjiList[0]
    console.log(`${kanji} , ${other.grade}`);    
}

function gradeSearch ( inputText ) {
    let counter = 0;
    const list = [];
    let aux = {};

    [...inputText].forEach(element => {
        aux = kanjiList.find( kanji => kanji.kanji === element )
        if(aux !== undefined ){
            list.push(
            {
                kanji: aux.kanji,
                pos: counter++,
                grade: aux.grade
            })
        } else {
            list.push(
            {
                kanji: element,
                pos: counter++,
                grade: 'XX'
            })
        }
    })
    return list
}
export { test, gradeSearch }