const sentence = require('./practice2.js')
const { writeFile } = require('fs').promises
const os = require('os');

const writePracticeFile = async () => {
    try {
        await writeFile('./practice.txt', `${sentence.sentence} ${os.userInfo().username}`, {flag: 'a'})
        console.log(sentence.sentence)
    }
    catch (error) {
        console.log(error)
    }
}

writePracticeFile();