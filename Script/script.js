let is = true;
    let login = document.getElementById("login");
    let singup = document.getElementById("singup");
    let notyetSingup = document.getElementById("notyet-singup");
    let registered = document.getElementById("registered");

    singup.onclick = ()=>{
    
        if(is){
            document.getElementById("login-display").style.display = 'none';
            document.getElementById("singup-display").style.display= 'block';
            document.getElementById("aTagSingup").style.color='#8860D0';
            document.getElementById("aTagSingup").style.borderColor='#8860D0';
            document.getElementById("aTagLogin").style.color='#C1C8E4';
            document.getElementById("aTagLogin").style.borderColor='#C1C8E4';
            is = !is;
        }
    }
    login.onclick = ()=>{
        
        if(!is){
            document.getElementById("login-display").style.display = 'block';
            document.getElementById("singup-display").style.display= 'none';
            document.getElementById("aTagSingup").style.color='#C1C8E4';
            document.getElementById("aTagSingup").style.borderColor='#C1C8E4';
            document.getElementById("aTagLogin").style.color='#8860D0';
            document.getElementById("aTagLogin").style.borderColor='#8860D0';
            is = !is;
        }
    }
    notyetSingup.onclick = ()=>{

        if(is){
            document.getElementById("login-display").style.display = 'none';
            document.getElementById("singup-display").style.display= 'block';
            document.getElementById("aTagSingup").style.color='#8860D0';
            document.getElementById("aTagSingup").style.borderColor='#8860D0';
            document.getElementById("aTagLogin").style.color='#C1C8E4';
            document.getElementById("aTagLogin").style.borderColor='#C1C8E4';
            is = !is;
        }
    }

    registered.onclick = ()=>{
        
        if(!is){
            document.getElementById("login-display").style.display = 'block';
            document.getElementById("singup-display").style.display= 'none';
            document.getElementById("aTagSingup").style.color='#C1C8E4';
            document.getElementById("aTagSingup").style.borderColor='#C1C8E4';
            document.getElementById("aTagLogin").style.color='#8860D0';
            document.getElementById("aTagLogin").style.borderColor='#8860D0';
            is = !is;
        }
    }
