// - - - - - - - - - -
setTheme(title = 'destructuring');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    let tuple = {
        x: 11,
        y: 12,
        z: 13
    }

    // - - -
    {
        let {
            x,
            y,
            z
        } = tuple;

        log(x, y, z);
    }
    // - - -
    // skipping values
    {
        let {
            x,
            z
        } = tuple;
        log(x, z);
    }

    // use aliases
    let {
        x: a,
        y: b,
        z: c,
        d = 14
    } = tuple;
    log(a, b, c, d);
    // - - - - - - - - - -

    // Example
    let data = {
        prename: 'john',
        name: 'doe',
        email: 'john@doe.org'
    }

    let {
        prename,
        name,
        email,
        fullname = `${prename} ${name}`,
        bestTime = "in the morning"
    } = data;

    log(`Hello, my name is ${fullname}`);
    log(`You can send me an Email to ${email}`);
    log(`The best time would be ${bestTime}`);

    // Array destructure
    let rgb = [255, 20, 100];
    let [red, green, blue] = rgb;
    log(red, green, blue);

    // Skip values
    let rgba = [255, 200, 100, 1];
    let [, , _blue] = rgba;
    log(_blue);

    // Use the spread operator
    let colors = ['red', 'green', 'yellow', 'blue', 'orange', 'brown', 'violet'];
    let [_red, , _yellow, ...rest] = colors;

    log(_red, _yellow);
    log(rest);

    log(Array.isArray(rest));

    // Example
    function add(...rest) {
        let result = 0;
        
        // for (i = 0; i < rest.length; i++) {
        //     result += rest[i];
        // };

        for (summand of rest) result += summand;
        return result;
    }

    result = add(1, 5, 1230);
    log(result);
}