// Shuffle the items using Fisher-Yates.
Array.prototype.shuffle = function () {
    var cidx = this.length;
    var ridx;

    while (cidx != 0) {
        ridx = Math.floor(Math.random() * cidx);
        cidx--;

        [this[cidx], this[ridx]] = [this[ridx], this[cidx]];
    }
}

// Shuffle the letters using Fisher-Yates.
String.prototype.shuffle = function () {
    var array = this.split("");
    array.shuffle();
    return array.join("");
}