class Table extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
  
      this.data =[]
    }
  
    async connectedCallback () {
      await this.loadData()
      await this.render()
    }
  
    loadData () {
      this.data =  [
          
        ]
    }
  
    render () {
      
      this.shadow.innerHTML =
        /*html*/`
        <style>

            * {
                box-sizing: border-box;
            }
            body {
    font-family: Arial, sans-serif;
}

#menu {
    display: flex;
    background-color: white;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    border-radius: 0.8rem;
}

#menu > div {
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 0.4rem;
}

#menu > div filter, add customer {
fle}

#title {
    display: flex;
    background-color: #e4e4e4;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.title-div {
    flex: 1;
    padding: 10px;
    border-right: 1px solid #ccc;
}

.title-div:last-child {
    border-right: none;
}

#customer-list {
    padding: 10px;
}

            
        </style>
    
        <section class="table">
            
        <div id="menu">
        <div id="seek">Seek</div>
        <div id="filter">Filter</div>
        <div id="add-customer">Add Customer</div>
    </div>
    <div id="title">
        <div class="title-div" id="selector">Selector</div>
        <div class="title-div" id="id">ID</div>
        <div class="title-div" id="customer-name">Customer Name</div>
        <div class="title-div" id="contact">Contact</div>
        <div class="title-div" id="age">Age</div>
        <div class="title-div" id="country">Country</div>
        <div class="title-div" id="status">Status</div>
        <div class="title-div" id="actions">Actions</div>
    </div>
          
        </section>
        
      `
    }
  }
  
  customElements.define('table-component', Table);