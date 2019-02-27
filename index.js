$('body').ready(function(){

    var angka_1;
    var angka_2;
    var hasil = $("#result");
    
    // var operator;
    // var ket_operator = $('#ket_operator');

    // $(".field .operators a").click(function(){
    //     operator = $(this).text();
    //     switch(operator){
    //         case '+':
    //             ket_operator.val('Penjumlahan')
    //             break;
    //         case '-':
    //             ket_operator.val('Pengurangan')
    //             break;
    //         case '/':
    //             ket_operator.val('Pembagian')
    //             break;
    //         case 'x':
    //             ket_operator.val('Perkalian')
    //             break;
    //     }
    // });

    $("#jumlah").click(function(){

        angka_1 = $('#first').val();
        angka_2 = $('#second').val();

        var total;
        var operator = document.getElementById("operator");
        var operator_value = operator.options[operator.selectedIndex].value;

        console.log(angka_1);
        console.log(angka_2);
        console.log(operator_value);

        switch(operator_value){
            case 'tambah':
                total = parseFloat(angka_1) + parseFloat(angka_2);
                break;
            case 'kurang':
                total = parseFloat(angka_1) - parseFloat(angka_2);
                break;
            case 'bagi':
                total = parseFloat(angka_1) / parseFloat(angka_2);
                break;
            case 'kali':
                total = parseFloat(angka_1) * parseFloat(angka_2);
                break;
            default:
                console.log('ga ada operator yg sama');
                break;
        }

        console.log(total)
        hasil.val(total)
    })

    function ulang(){
        angka_1 = $('#first').val(null);
        angka_2 = $('#second').val(null);
        hasil.val(null);
        // ket_operator.val(null);
    }  

    $("#ulang").click(function(){
        ulang();
    });

});
