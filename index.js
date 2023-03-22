const names = ['Guadalupe','Ollie', 'Aki'];

function writeCards(names, event) {
    let messages =[]
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }

    return messages;
  }

  console.log(writeCards(names));



function countDown(n) {
    console.log(n);
    return n? countDown(n -1) :0;
  }
  countDown(10);



