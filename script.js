//your JS code here. If required.
const text = document.getElementById('text')
const delay = document.getElementById('delay')
const button = document.getElementById('btn')
const output = document.getElementById('output')

button.addEventListener('click',async ()=>{
	const msg = await getData(text.value, delay.value)
	output.innerText = msg
})

 function getData(text, delay){
	return new Promise((res, rej)=>{
		setTimeout(()=>{
			res(text)
		}, delay)
	})
}