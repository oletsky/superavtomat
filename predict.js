function predict(evt, kappa) {
    let max = 100.;


    let karma = parseInt(document.forms["mainform"].karma.value);
    let v1 = parseInt(document.forms["mainform"].task1.value);
    let v2 = parseInt(document.forms["mainform"].test.value);
    let maxim = parseInt(document.forms["mainform"].maxim.value);

    let remain = (v2 == -1) ? 40 : 10;
    if (v2 == -1) v2 = 0;
    let v = v1 + v2;
    let r = v + (v/maxim)*remain * karma * 0.01 * kappa;
    alert(
        "Акумульовані бали: " + v + "\n" +
        "Карма: " + karma + "\n" +
        "Параметр дисконту: " + kappa + "\n\n" +
        "Рекомендований бал: " + r);
    evt.preventDefault();
    evt.stopPropagation();
}