function cadastrar() {  
  
    const name = document.getElementById('nome').value;
    const username = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
  
    const data = {
      name,
      username,
      email,
      password
    };
  
    // alert(JSON.stringify(data)); '
  
    fetch('http://localhost:3006/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json' 
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      alert("Cadastro criado com sucesso!")
      window.location.href = "../PaginaLogin/Login.html";  
    });
  }