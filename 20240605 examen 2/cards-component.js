class Cards extends HTMLElement {

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
            {
                class: 'free',
                title: 'Gratis',
                price: '$0 /mes',
                features: [
                    '10 Usuarios incluidos',
                    '2 GB de almacenamiento',
                    'Soporte de correo electrónico',
                    'Acceso al centro de ayuda'
                ],
                buttonText: 'Regístrate gratis'
            },
            {
                class: 'pro',
                title: 'Pro',
                price: '$15 /mes',
                features: [
                    '20 Usuarios incluidos',
                    '10 GB de almacenamiento',
                    'Soporte prioritario por correo electronico',
                    'Acceso al centro de ayuda'
                ],
                buttonText: 'Empezar'
            },
            {
                class: 'company',
                title: 'Empresa',
                price: '$29 /mes',
                features: [
                    '30 usuarios incluidos',
                    '15 GB de almacenamiento',
                    'Soporte telefónico y porcorreo lectronico',
                    'acceso al centro de ayuda'
                ],
                buttonText: 'Contáctenos'
            }
        ]
    }
  
    render () {
      
      this.shadow.innerHTML =
        /*html*/`
        <style>

            * {
                box-sizing: border-box;
            }

            h2, span  {
                color: hsl(0, 0%, 100%);
                margin: 0;
            }

            .cards {
                display: flex;
                justify-content: center;
                gap: 1rem;
                width: 100%;
            }

            .column {
                border: 1px solid hsl(214, 0%, 30%);
                border-radius: 0.5rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: 30%;
                text-align: center;
                background-color: hsla(0, 0%, 0%, 0%)
            }

            .title{
                border-bottom: 1px solid hsl(214, 0%, 30%);
                padding: 1rem 0;
            }

            .features{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 0 5rem;
            }
            
            .column button {
                background-color: hsl(215, 100%, 50%);
                color: white;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                font-size: 16px;
                border-radius: 0.2rem;
                margin: 1rem;
            }
        </style>
    
        <section class="cards">
        </section>
      `

        const cards = this.shadow.querySelector('.cards');

        this.data.forEach(card => {
            const column = document.createElement('div');
            column.classList.add('column', card.class);
            cards.appendChild(column);

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('title')
            column.appendChild(titleContainer);

            const title = document.createElement('h2');
            title.textContent = card.title;
            titleContainer.appendChild(title);

            const subtitleContainer = document.createElement('div');
            subtitleContainer.classList.add('subtitle')
            column.appendChild(subtitleContainer);

            const subtitle = document.createElement('h2');
            subtitle.textContent = card.price;
            subtitleContainer.appendChild(subtitle);

            const featuresContainer = document.createElement('div');
            featuresContainer.classList.add('features')
            column.appendChild(featuresContainer);

            card.features.forEach(feature => {
                const features = document.createElement('span');
                features.textContent = feature
                featuresContainer.appendChild(features);
            })

            const buttonContainer = document.createElement('div');
            column.appendChild(buttonContainer);

            const button = document.createElement('button');
            button.textContent = card.buttonText;
            buttonContainer.appendChild(button);
        });
    }
  }
  
  customElements.define('cards-component', Cards);