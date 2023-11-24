function logar() { 
    // alert('teste'); 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    console.log(email);
    console.log(senha);
  
    const data = {
      email,
      senha
    };
  
    console.log(data);
  
    fetch('http://localhost:3006/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json' 
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res => {
        window.location.href = "../Home/index.html"
    });
}