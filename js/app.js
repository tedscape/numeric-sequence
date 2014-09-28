window.numericSeqGenerator = {};
window.numericSeqGenerator = function () {

    this.getAllNumbersUpto = function ($number) {
        var list = [];
        for (var i = 0; i <= $number; i++) {
            list.push(i);
        }
        return list;
    };

    this.getAllOddNumbersIncluding = function ($number) {
        var list = [];
        list.push(0);
        for (var i = 0; i < $number; i++) {
            if (i % 2 > 0) {
                list.push(i);
            }
        }
        list.push($number);
        return list;
    };
    this.getAllEvenNumbersIncluding = function ($number) {
        var list = [];
        for (var i = 0; i < $number; i++) {
            if (i % 2 == 0) {
                list.push(i);
            }
        }
        list.push($number);
        return list;
    };
    this.getAllNUmbersReplace3ByC = function ($number) {
        var list = [];
        list.push(0);
        for (var i = 1; i <= $number; i++) {
            if (i % 2 == 0) {
                if (i % 5 == 0 && i % 3 == 0) {
                    list.push('Z');
                }
                else if (i % 3 == 0) {
                    list.push('C');
                }
                else if (i % 5 == 0) {
                    list.push('E');
                }
                else {
                    list.push(i);
                }
            }
        }

        return list;
    };
    this.getAllFibonacci = function ($number) {
        var list = [];
        list.push(0);
        var oldNumber = 1;
        var currentNumber = 1;

        var nextNumber = 0;



        while (currentNumber < $number) {
            //document.write(currentNumber + " ");
            list.push(currentNumber);
            // calculate the next number by adding the
            // current number to the old number
            nextNumber = currentNumber + oldNumber;

            oldNumber = currentNumber;
            currentNumber = nextNumber;

        }
        if ($number > 0)
            list.push($number);
        return list;
    };

};


function numbersonly(myfield, e, dec) {
    var key;
    var keychar;
    if (myfield.value.length > 2)
        return false;
    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;
    keychar = String.fromCharCode(key);

    // control keys
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) || (key == 13) || (key == 27))
        return true;

    // numbers
    else if ((("0123456789").indexOf(keychar) > -1))
        return true;

    // decimal point jump
    else if (dec && (keychar == ".")) {
        myfield.form.elements[dec].focus();
        return false;
    }
    else
        return false;
}



$(document).ready(function () {
    $("#submit").bind("click", function () {
        var number = $("#txtInput").val();
        var numericGen = new window.numericSeqGenerator();
        $("#resultAllNUmbers").html((numericGen.getAllNumbersUpto(number)).join(', '));
        $("#resultAllOdd").html((numericGen.getAllOddNumbersIncluding(number)).join(', '));
        $("#resultAllEven").html((numericGen.getAllEvenNumbersIncluding(number)).join(', '));
        $("#resultReplace").html((numericGen.getAllNUmbersReplace3ByC(number)).join(', '));
        $("#resultAllFibonacci").html((numericGen.getAllFibonacci(number)).join(', '));
    });
    $("#clear").bind("click", function () {
        var number = $("#txtInput").val();
        $("#resultAllNUmbers").html(0);
        $("#resultAllOdd").html(0);
        $("#resultAllEven").html(0);
        $("#resultReplace").html(0);
        $("#resultAllFibonacci").html(0);
        $("#txtInput").val('');
    });
});