const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'adding to the notes',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'describe',
            demandOption: true,
            type: 'string',
        }

    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing notes',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'description of list',
    handler(){
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'description od read',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
