exports.handler = async function (event, context) {
  console.log(JSON.stringify(event));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(event.contact);
      if (event.contact === 'Jinal') {
        resolve(true)
      } else {
        resolve(false);
      }
    }, 2000)
  })
}