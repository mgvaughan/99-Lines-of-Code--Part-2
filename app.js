document.addEventListener("DOMContentLoaded", function () {
    
    let btn = document.querySelector('button');
    btn.addEventListener("click", function () {

        let friends = ['Nicole', 'Jared', 'Kevin', 'John', 'David'];
        for (i = 0; i < friends.length; i++) {
            let div = document.createElement('div');
            div.className = 'friend';
            let h3 = document.createElement('h3');
            let name = document.createTextNode(friends[i]);
            h3.appendChild(name);
            div.appendChild(h3);
            document.body.appendChild(div);
            for (j = 99; j > 0; j--) {
                if (j == 1) {
                    let text1 = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                    let p1 = document.createElement('p');
                    p1.appendChild(text1);
                    div.appendChild(p1);
                } else if (j == 2) {
                    let text2 = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file")
                    let p2 = document.createElement('p');
                    p2.appendChild(text2);
                    div.appendChild(p2);
                } else {
                    let text3 = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file")
                    let p3 = document.createElement('p');
                    p3.appendChild(text3);
                    div.appendChild(p3);
                }
            }
        }
    })
    let removediv = document.querySelectorAll('.friend');
    
    removediv.forEach(friend => {
        friend.remove();
    });

    // let div = document.createElement('div');
    // div.className('friend');
    // let h3 = document.createElement('h3');
    // let name = document.createTextNode(i);
    // h3.appendChild(name);
    // div.appendChild(h3)
    // document.body.appendChild(div);

})
