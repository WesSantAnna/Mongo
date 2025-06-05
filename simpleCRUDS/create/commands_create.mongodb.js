const database = 'crud';

use(database);

db.create_commands.insertOne({ 
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

db.create_commands.insertMany([
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
