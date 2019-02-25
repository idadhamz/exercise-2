$('body').ready(function(){
    var angka_1;
    var angka_2;
    var operator;
    var ket_operator = $('#ket_operator');
    var hasil = $("#result");

    $(".field .operators a").click(function(){
        operator = $(this).text();
        switch(operator){
            case '+':
                ket_operator.val('Penjumlahan')
                break;
            case '-':
                ket_operator.val('Pengurangan')
                break;
            case '/':
                ket_operator.val('Pembagian')
                break;
            case 'x':
                ket_operator.val('Perkalian')
                break;
        }
    });

    $("#jumlah").click(function(){
        var total;

        angka_1 = $('#first').val();
        angka_2 = $('#second').val(); 

        console.log(angka_1);
        console.log(angka_2);

        switch(operator){
            case '+':
                total = parseFloat(angka_1) + parseFloat(angka_2);
                break;
            case '-':
                total = parseFloat(angka_1) - parseFloat(angka_2);
                break;
            case '/':
                total = parseFloat(angka_1) / parseFloat(angka_2);
                break;
            case 'x':
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
        ket_operator.val(null);
    }  

    $("#ulang").click(function(){
        ulang();
    });

});
