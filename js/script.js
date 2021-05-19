// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.
// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.

// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).

// BONUS:
// Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
// Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).

var app = new Vue(
    {
        el: "#root",
        data: {
            toDoList: [
                {
                    testo: "Portare giù il cane",
                    completed: false
                },
                {
                    testo: "Fare la spesa",
                    completed: false
                },
                {
                    testo: "Portare l'auto dal meccanico",
                    completed: false
                },
                {
                    testo: "Pagare le bollette",
                    completed: false
                },
                {
                    testo: "Accordare la chitarra",
                    completed: false
                },
                {
                    testo: "Pulire la macchina fotografica",
                    completed: false
                }
            ],
            add: ""
        },
        methods: {
            removeToDo: function (newIndex) {
                var index = newIndex;
                this.toDoList.splice(index, 1);
                // console.log(this.toDoList);
            },
            addToDo: function () {
                if (this.add.trim().length > 0 && isNaN(this.add)) {
                    this.toDoList.push({
                        testo: this.add[0].toUpperCase() + this.add.toLowerCase().slice(1),
                        completed: false
                    });
                }
                this.add = "";
            },
            completedTask: function (list) {
                list.completed = !list.completed;
                console.log(list.completed)
            }
        }
    }
);
