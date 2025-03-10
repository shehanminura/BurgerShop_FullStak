

function addCustomer() {
    let name = document.getElementById("name").value;
    let phoneNum = document.getElementById("phoneNum").value;
    let email = document.getElementById("email").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        name: name,
        phoneNumber: phoneNum,
        email: email,
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch("http://localhost:8080/customer/add", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            alert("Customer added Successfully")
            console.log(result)
            document.getElementById("name").value ="";
            document.getElementById("phoneNum").value="";
            document.getElementById("email").value="";
        })
        .catch((error) => console.error(error));

    document.getElementById("txtName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtSalary").value = "";
}


function searchCustomer() {

    let id = document.getElementById("search-input").value;

    if (!id) {
        alert("Please enter a customer ID.");
        return;
    }

    fetch(`http://localhost:8080/customer/search-by-id/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert("Customer Found")
                document.getElementById("Id").value = data.id || "";
                document.getElementById("Name").value = data.name || "";
                document.getElementById("PhoneNum").value = data.phoneNumber || "";
                document.getElementById("email").value = data.email || "";
            }
        })
        .catch(error => console.error("Error fetching customer:", error));
}


function deleteCustomer() {
    let id = document.getElementById("Id").value;
    const raw = "";

    const requestOptions = {
        method: "DELETE",
        body: raw,
        redirect: "follow"
    };

    fetch(`http://localhost:8080/customer/delete/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            alert("Customer Deleted Successfully")
            console.log(result)
            clear();
        })
        .catch((error) => {
            console.log(error)
        });
}

function updateCustomer() {
    let id = document.getElementById("Id").value;
    let name = document.getElementById("Name").value;
    let phoneNum = document.getElementById("PhoneNum").value;
    let email = document.getElementById("email").value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id": id,
        "name": name,
        "phoneNumber": phoneNum,
        "email": email

    });

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:8080/customer/update_customer", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            alert("Customer Updated Successfully")
            document.getElementById("Id").value = "";
            document.getElementById("Name").value = "";
            document.getElementById("PhoneNum").value = "";
            document.getElementById("email").value = "";
            
        })
        .catch((error) => {

            alert("Customer Updated not Successfully")
            console.error(error)
        });
}

function clear() {
    document.getElementById("viewId").value = "";
    document.getElementById("viewName").value = "";
    document.getElementById("viewPhoneNum").value = "";
    document.getElementById("viewEmail").value = "";
}

function getAll() {
    fetch("http://localhost:8080/customer/getAll", {
        method: "GET",
        redirect: "follow"
    })
        .then(response => response.json()) // Parse JSON instead of text
        .then(result => {
            console.log(result);

            let table = document.getElementById("tbl");

            let body = `<thead style="position: sticky; top: 0; z-index: 1;">
                <tr style="background-color: rgb(255, 191, 42);">
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                 
                </tr>
            </thead>
            <tbody class="table-group-divider">`;

            result.forEach(Customer => {
                body += `
                <tr style="background-color: #ffd32a;">
                    <th scope="row">${Customer.id}</th>
                    <td>${Customer.email}</td>
                    <td>${Customer.name}</td>
                    <td>${Customer.phoneNumber}</td>
               </tr>`;
            });

            table.innerHTML = body;

        })
        .catch(error => console.error("Error fetching items:", error));
}
