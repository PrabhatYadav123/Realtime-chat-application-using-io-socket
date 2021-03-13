const socket=io('http://localhost:80');
const form=document.getElementById('sendcontainer');
const mesinput=document.getElementById('input');
const mcontainer=document.querySelector('.container');
const append =(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message')
    messageElement.classList.add('position');
    mcontainer.append(messageElement);
    const name=prompt("Enter name to joined");
}
socket.emit('new-user-joined', name);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append(`You: ${message}`,right)
    socket.emit('send',message);
})

socket.on('user-joined',name=>{
append(`${name} joined the chat`, 'right')
})
socket.on('receive',data =>{
    append(`${data.message}: ${data.name}`);
})
socket.on('left',name =>{
    append(`${name}: left the chat`,'right');
})
