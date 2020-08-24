function predict(evt, kappa, cRemain, cKarma) {
    let max = 100.;


    let karma = parseInt(document.forms["mainform"].karma.value);
    let v1 = parseInt(document.forms["mainform"].task1.value);
    let v2 = parseInt(document.forms["mainform"].test.value);
    let maxim = parseInt(document.forms["mainform"].maxim.value);

    let remain = (v2 == -1) ? 40 : 10;
    if (v2 == -1) v2 = 0;
    let v = v1 + v2;
    let ratio=v/maxim;

    let coeff=cRemain*ratio+cKarma*karma*0.01;
    let r = v + remain*coeff * kappa;
    alert(
        "Акумульовані бали: " + v + "\n" +
        "Коефіцієнт балу: " + cRemain + "\n"+
        "Карма: " + karma + "\n" +
        "Коефіцієнт карми: " + cKarma + "\n"+
        "Параметр дисконту: " + kappa + "\n\n" +
        "Рекомендований бал: " + r);
    evt.preventDefault();
    evt.stopPropagation();
}