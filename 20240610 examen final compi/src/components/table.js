class Table extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.loadData();
    this.render();
  }

  async loadData() {
    this.data = [
      {
        id: 1,
        name: 'Joe Schilder',
        email: 'sip@gmail.com',
        contact: '+1 (731) 342-9783',
        age: 39,
        country: 'Canada',
        status: 'Rejected'
      },
      {
        id: 2,
        name: 'Phoebe Venturi',
        email: 'ke@gmail.com',
        contact: '+1 (887) 744-6950',
        age: 52,
        country: 'Thailand',
        status: 'Verified'
      },
      {
        id: 3,
        name: 'Caroline Pandolfi',
        email: 'secjavkib@gmail.com',
        contact: '+1 (618) 787-3453',
        age: 45,
        country: 'Barbados',
        status: 'Verified'
      },
      {
        id: 4,
        name: 'Ricardo Marchetti',
        email: 'ho@gmail.com',
        contact: '+1 (415) 628-7505',
        age: 29,
        country: 'Italy',
        status: 'Verified'
      },
      {
        id: 5,
        name: 'Dorothy Hussain',
        email: 'socuih@gmail.com',
        contact: '+1 (856) 459-8945',
        age: 58,
        country: 'Mauritius',
        status: 'Pending'
      },
      {
        id: 6,
        name: 'Eleanor Mann',
        email:'jonvok@gmail.com',
        contact: '+1 (507) 561-6927',
        age: 60,
        country: 'American Samoa',
        status: 'Rejected'
      },
      {
        id: 7,
        name: 'Nina Francini',
        email:'uhudadof@gmail.com',
        contact: '+1 (722) 952-7792',
        age: 27,
        country: 'Gibraltar',
        status: 'Verified'
      },
      {
        id: 8,
        name: 'Caroline Mallet',
        email: 'peg@gmail.com',
        contact: '+1 (675) 882-6307',
        age: 26,
        country: 'Central African Republic',
        status: 'Rejected'
      }
    ];
  }
  render() {
    this.shadow.innerHTML = /*html*/`
      <style>
        th,tr {
          font-family: "Lato", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        .toolbar {
          display: flex;
          padding: 2rem;
          justify-content: space-between;
          border-collapse: collapse;
          border: 1px solid #ddd;
          border-radius: 1rem 1rem  0 0;
        }
        .toolbar input {
          padding: 0.5rem 2rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .selection{
          display:flex;
          gap:2rem;
          align-items: center;
        }
        .selection select{
          padding: 1rem 7rem 1rem 0;
          border: 1px solid #3b82f6;
          border-radius: 4px;
        }
         .addCustomer{
          background-color:#3b82f6;
          border:none;
          border-radius: 10px;
          text-align: center;
          padding:0;
          width: 200px; 
          cursor: pointer;
          font-weight: 500;
          color:white;
          height:90% ;
          justify-content:center;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #ddd;
        }
        thead{
          background-color: #f2f2f2;
        }
        tr{
          border-bottom: 1px solid #ddd;
          
      
        }
        input[type="checkbox"] {
          width: 20px; 
          height: 20px; 
          border-radius: 50%;
        }
        th:not(:first-child):not(:last-child) {
          text-align: left;
          padding-left: 15px; 
        }
        th {
          padding: 1.5rem 0;
          position: relative;
          font-weight: 600;
          white-space: nowrap;
          font-size:16px;
        }
        th::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          height: 50%;
          border-right: 1px solid #ddd;
          width: 5px;
        }
        th:first-child,
        th:last-child {
          text-align: center;
        }
        td {
          padding: 1rem;
        }
        td:first-child{
          display: flex;
          justify-content: center;
          padding:0 1rem;
        }
        .info-container{
          display:grid;
          gap:0.5rem;
        }
        .info-container span{
          color:gray;
          font-size: 13px
        }
        .status {
          padding: 4px 8px;
          border-radius: 5rem;
          color: white;
          font-size: 13px;
        }
        .status.Verified {
          background-color: hsla( 0.25turn , 100% , 50% , 0.5 );
          color:green;
        }
        .status.Pending {
          background-color: hsla( 0.50turn , 100% , 50% , 0.5 );
          color:#008B8B;
        }
        .status.Rejected {
          background-color: hsla(   0turn , 100% ,80% , 0.5 );
          color:red;
        }
     
        td:last-child {
          display: flex;
          justify-content:center;
          gap:0;
          padding-bottom:0;
        }
        td button {
         border:none;
         background:transparent;
         align-items: space-between;
        }
        svg{
          height: 2rem;
          width: 1.5rem;
        }
        .submit svg{
          fill: hsl(0, 2%, 50%);
        }
        .edit svg{
          fill: hsl(225, 100%, 50%);
        }
        .delete svg{
          fill: red;
        }
      </style>
        <div class="toolbar">
          <input type="text" placeholder="Search 100 records..." id="search">
          <div class="selection">
            <label>
              <select>
                <option value="short by">Short by</option>
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="country">Country</option>
              </select>
              </label>
            <button class="addCustomer">+ Add Customer</button>
          </div>
        </div>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox"></th>
                <th>#</th>
                <th>CUSTOMER NAME</th>
                <th>CONTACT</th>
                <th>AGE</th>
                <th>COUNTRY</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
    `;
    const table = this.shadow.querySelector('table');
    const tbody = table.querySelector('tbody');
    
    this.data.forEach(customer => {
        const tr = document.createElement('tr');
    
        const checkboxCell = document.createElement('td');
        const checkboxInput = document.createElement('input');
        checkboxInput.setAttribute('type', 'checkbox');
        checkboxCell.appendChild(checkboxInput);
        tr.appendChild(checkboxCell);
    
        const idCell = document.createElement('td');
        idCell.textContent = customer.id;
        tr.appendChild(idCell);
    
        const infoCell = document.createElement('td');
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container'); 

        const customName = document.createElement('div');
        customName.textContent = customer.name;

        const customEmail = document.createElement('span'); 
        customEmail.textContent = customer.email; 

        infoContainer.appendChild(customName);
        infoContainer.appendChild(customEmail);
        infoCell.appendChild(infoContainer);
        tr.appendChild(infoCell);
    
        const contactCell = document.createElement('td');
        contactCell.textContent = customer.contact;
        tr.appendChild(contactCell);
    
        const ageCell = document.createElement('td');
        ageCell.textContent = customer.age;
        tr.appendChild(ageCell);
    
        const countryCell = document.createElement('td');
        countryCell.textContent = customer.country;
        tr.appendChild(countryCell);
    
        const statusCell = document.createElement('td');
        const statusSpan = document.createElement('span');
        statusSpan.className = `status ${customer.status}`;
        statusSpan.textContent = customer.status;
        statusCell.appendChild(statusSpan);
        tr.appendChild(statusCell);
    
        const actionsCell = document.createElement('td');
        const submitButton = document.createElement('button');
        submitButton.className = 'submit';
        submitButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>';
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-box-outline</title><path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z" /></svg>';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>';
        actionsCell.appendChild(submitButton);
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        tr.appendChild(actionsCell);
        tbody.appendChild(tr);
    }
 ) ;
}
}

customElements.define('table-component', Table)