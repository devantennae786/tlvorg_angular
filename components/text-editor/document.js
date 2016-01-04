var character_1 = require('./character');
var Document = (function () {
    function Document() {
        this.characters = [];
    }
    Document.prototype.deselectPreviousCharacter = function () {
        if (this.currentChar) {
            var index = this.characters.indexOf(this.currentChar);
            this.characters[index].isCurrent = false;
        }
    };
    Document.prototype.clearSelection = function () {
        this.characters.forEach(function (c) { return c.isSelected = false; });
    };
    Document.prototype.edit = function (character, index) {
        if (character.deleteChar) {
            var deleteIndex = this.characters.indexOf(this.currentChar);
            if (deleteIndex >= 0) {
                this.characters.splice(deleteIndex, 1);
                if (this.characters.length > 0 && deleteIndex >= 1) {
                    this.characters[deleteIndex - 1].isCurrent = true;
                    this.currentChar = this.characters[deleteIndex - 1];
                }
                else {
                    this.currentChar = null;
                }
            }
            return;
        }
        this.characters.splice(index, 0, character);
        if (character.lineBreak) {
            this.deselectPreviousCharacter();
            var placeHolder = new character_1.Character(-1);
            this.characters.splice(index + 1, 0, placeHolder);
            this.placeCursor(placeHolder);
        }
        else {
            this.placeCursor(character);
        }
    };
    Document.prototype.placeCursor = function (character) {
        this.deselectPreviousCharacter();
        var index = this.characters.indexOf(character);
        this.characters[index].isCurrent = true;
        this.currentChar = character;
    };
    Document.prototype.selectCharacter = function (character) {
        var index = this.characters.indexOf(character);
        this.characters[index].isSelected = true;
    };
    Document.prototype.processInput = function (character, operation) {
        if (operation === 'modify') {
            var index = this.characters.indexOf(this.currentChar);
            if (index < 0) {
                index = this.characters.length - 1;
            }
            this.edit(character, index + 1);
        }
        if (operation === 'select') {
            this.placeCursor(character);
        }
        if (operation === 'range') {
            this.selectCharacter(character);
        }
    };
    return Document;
})();
exports.Document = Document;
