const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/questions.json');

const getAllQuestions = (req, res) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao ler o ficheiro de perguntas." });
        }
        
        try {
            const questions = JSON.parse(data);
            res.status(200).json(questions);
        } catch (parseError) {
            res.status(500).json({ error: "Erro" });
        }
    });

};

module.exports = { getAllQuestions };
