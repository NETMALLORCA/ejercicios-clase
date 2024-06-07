document.addEventListener('DOMContentLoaded', function() {
    const plans = [
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
    ];

    const general = document.getElementById('general');

    plans.forEach(plan => {
        const column = document.createElement('div');
        column.classList.add('column', plan.class);

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        const h2Title = document.createElement('h2');
        h2Title.textContent = plan.title;
        priceDiv.appendChild(h2Title);
        column.appendChild(priceDiv);

        const priceTextDiv = document.createElement('div');
        const h2Price = document.createElement('h2');
        h2Price.textContent = plan.price;
        priceTextDiv.appendChild(h2Price);
        column.appendChild(priceTextDiv);

        const featuresDiv = document.createElement('div');
        const spanFeatures = document.createElement('span');
        spanFeatures.innerHTML = plan.features.join('<br>');
        featuresDiv.appendChild(spanFeatures);
        column.appendChild(featuresDiv);

        const buttonDiv = document.createElement('div');
        const button = document.createElement('button');
        button.textContent = plan.buttonText;
        buttonDiv.appendChild(button);
        column.appendChild(buttonDiv);

        general.appendChild(column);
    });
});