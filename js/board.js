class Board {
    constructor() {
        this.dice = [
            "RIFOBX",
            "IFEHEY",
            "DENOWS",
            "UTOKND",
            "HMSRAO",
            "LUPETS",
            "ACITOA",
            "YLGKUE",
            "QBMJOA",
            "EHISPN",
            "VETIGN",
            "BALIYT",
            "EZAVND",
            "RALESC",
            "UWILRG",
            "PACEMD"
        ];
    }

    shuffle(board) {
        // Shuffle the dice.
        this.dice.shuffle();
        for (var i = 0; i < 16; i++) {
            this.dice[i] = this.dice[i].shuffle();
        }

        // Create the table rows.
        var rows = [];
        for (var i = 0; i < 4; i++) {
            let row = document.createElement("tr");
            for (var j = 0; j < 4; j++) {
                var letter = this.dice[i * 4 + j][0];
                if (letter == "Q") {
                    letter = "Qu";
                }

                let cell = document.createElement("td");
                cell.innerHTML = letter;
                row.appendChild(cell);
            }
            rows.push(row);
        }

        // Display the dice on the board.
        board.replaceChildren(...rows);
    }

    clear(board) {
        const row = "<tr><td>*</td><td>*</td><td>*</td><td>*</td></tr>";
        board.innerHTML = row + row + row + row;
    }
}