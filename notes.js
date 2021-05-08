const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()


    debugger
    const dublicateNote = notes.find((note) => note.title === title)
    if (!dublicateNote) {
        notes.push({
            title : title,
            body : body
        })
    
        saveNotes(notes)    
        console.log(chalk.green.inverse('Note added succesfully'))   
    }else{
        console.log(chalk.red.inverse('Note title alredy taken!'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()

    const dublicateNotes = notes.filter((note) => note.title !== title)
    if (dublicateNotes.length < notes.length){
            saveNotes(dublicateNotes) 
            console.log(chalk.green.inverse('removed succesfully'))   
    }else{
        console.log(chalk.red.inverse('Note title not exist!'))
    }
}
const listNotes = ()=>{
    const notesList = loadNotes()
    console.log(chalk.inverse('Your Notes'))

    notesList.forEach(note => {
        console.log(note.title)
    });

}
const readNote = (title) => {
    const list = loadNotes()
    const findedOne = list.find((note) => note.title === title)

    if (findedOne) {
        console.log(chalk.inverse(findedOne.title))
        console.log(findedOne.body)
    }else{
        console.log(chalk.red.inverse('no Note Found!..'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =() => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}




module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes: listNotes,
    readNote: readNote
}