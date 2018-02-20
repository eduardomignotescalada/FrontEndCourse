s1 = 0;
s2 = 0;
s3 = 0;
tm1 = 0;
tm2 = 0;
tm3 = 0;



function phoneCall(min1, min2_10, min11, s) {
    if (s >= min1) {
        s1 = s - min1;
        tm1 = 1;
        if (s1 > min2_10) {
            tm2 = Math.min(9, Math.floor(s1 / min2_10))
            s2 = s1 - (tm2 * min2_10)
            if (s2 > min11) {
                tm3 = Math.floor(s2 / min11)
            } else {
                tm3 = 0
            }

        } else {
            tm2 = 0
        }

    } else {
        tm1 = 0;
        tm2 = 0;
        tm3 = 0;
    }
    total = tm1 + tm2 + tm3
    return total;
}
