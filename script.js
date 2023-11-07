const user=[
    {username:"user1", password:"pass1"},
    {username:"user2", password:"pass2"},
    ];
    document.getElementById('login-form').addEventListener('submit',function(e){e.preventDefault();
    const username=document.getElementById('login-user').value;
    const password=document.getElementById('login-pass').value;
    const users=user.find(u => u.username===username && u.password===password);
    if(users)
    {
    document.getElementById('login-status').textContent='Login Sucessful';
    }
    else
    {
    document.getElementById('login-status').textContent='Invaild Credentials!';
    }
    });
    document.getElementById('reg-form').addEventListener('submit',function(e){e.preventDefault();
    const regUsername=document.getElementById('reg-user').value;
    const regPassword=document.getElementById('reg-pass').value;
    if(regUsername==='' || regPassword===''){ document.getElementById('reg-status').textContent="Please fill the both Fields!"
    }
    else
    {
        user.push({Username: regUsername,Password:regPassword});
        document.getElementById('reg-status').textContent='Registration Successful !'
        }
        });
        let cartItems = [];

function addToCart(product, price) {
    cartItems.push({product, price});
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");
    let total = 0;

    cartList.innerHTML = "";
    cartItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerText = `${item.product} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalElement.innerText = total;
}




// Add product and cart logic similar to the previous example

function checksout() {
    alert('Thank you for your purchase!');
}    