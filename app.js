const id = document.querySelector('#ID');
const advices = document.querySelector('#advice');
const button = document.querySelector('button');

const addNewAdvice = async () => {
    const adviceText = await getRandomAdvice()
    advices.innerHTML = adviceText
    const idNumber = await getIDfromRandomAdvice()
    id.innerHTML = idNumber
}
const getRandomAdvice = async ()=> {
    try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://api.adviceslip.com/advice', config)
        return res.data.slip.advice;
    } catch(e){
        return "NO ADVICE AVAILABLE SORRY :("
    }
   
}

const getIDfromRandomAdvice = async ()=> {
    try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://api.adviceslip.com/advice', config)
        return res.data.slip.id;
    } catch(e){
        return "NO ID AVAILABLE SORRY :("
    }
   
}

button.addEventListener('click', addNewAdvice)