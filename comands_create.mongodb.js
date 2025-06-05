/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'crud';
const collection = 'comands_create';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);


db.collection.insertOne({ 
    name: 'Wesley SantAnna',
    age: 21,
    department: {
        name: 'P&D',
        profile: {
            knowledges: ['Python', 'C', 'C++'],
            technologies: ['React', 'FastAPI', 'Git', 'GitHub']
        }
    },
    likes: {
        sports: ['Water Polo', 'Soccer', 'Basketball'],
        games: ['Valorant', 'CS2', 'Immortals Fenyx Rising']
    }
});

db.collection.insertMany([
    { 
        name: 'Laura Mendes',
        age: 25,
        department: {
            name: 'Data Science',
            profile: {
                knowledges: ['Python', 'R', 'SQL'],
                technologies: ['Pandas', 'Scikit-learn', 'Docker']
            }
        },
        likes: {
            sports: ['Tennis', 'Running'],
            games: ['Stardew Valley', 'The Sims 4']
        }
    },
    { 
        name: 'Carlos Silva',
        age: 29,
        department: {
            name: 'DevOps',
            profile: {
                knowledges: ['Bash', 'Go', 'Python'],
                technologies: ['Kubernetes', 'Terraform', 'AWS', 'GitLab']
            }
        },
        likes: {
            sports: ['Cycling', 'Swimming'],
            games: ['League of Legends', 'Dota 2']
        }
    }
])
