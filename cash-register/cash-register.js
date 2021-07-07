
function checkCashRegister(price, cash, cid) {
    const moneyArray = [
        [1, 'PENNY'],
        [5, 'NICKEL'],
        [10, 'DIME'],
        [25, 'QUARTER'],
        [100, 'ONE'],
        [500, 'FIVE'],
        [1000, 'TEN'],
        [2000, 'TWENTY'],
        [10000, 'ONE HUNDRED']
    ]

    let cidTotal = cid.reduce((total, [currencyUnit, amount]) => total + amount, 0);

    let change = (cash - price) * 100;

    let i = moneyArray.length - 1;
    let cashOut = [];


    // No change or exact change:
    if ((change / 100) === 0 || (change / 100) === cidTotal) {
        return {
            status: "CLOSED",
            change: cid
        }
    }

    // Change is greater than cash in drawer:
    if (cidTotal < (change / 100)) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }

    while (i >= 0 && (change / 100) >= 0) {
        let unit = moneyArray[i][1];
        let unitSize = moneyArray[i][0];
        let cashInDrawer = cid[i][1] * 100;
        let multiplier = 0;

        if (change - unitSize >= 0 && cashInDrawer > 0) {
            // Give as many bills as possible
            while (change - unitSize >= 0 && cashInDrawer > 0) {
                multiplier += 1;
                cashInDrawer = cashInDrawer - unitSize;
                change = change - unitSize;
            }
        }

        if (multiplier > 0) {
            cashOut.push([unit, (multiplier * unitSize) / 100]);
        }

        i--;
    }

    console.log(cashOut);
    if (change == 0) {
        let moneyBool = false;

        // Check if any money's been taken out of the drawer
        if (cashOut.length > 0) {
            moneyBool = true;
        }

        if (moneyBool && change === 0) {
            return {
                status: "OPEN",
                change: cashOut
            }
        } else {
            return {
                status: "CLOSED",
                change: cid
            };
        }
    }
    return {
        status: "INSUFFICIENT_FUNDS",
        change: []
    }
}




