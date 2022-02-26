// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KXVCwIGUDw8P9Qpp8FnY3zP2mh97Iqbgp7dRRy2zKuKNOJAHKFAwvFQPXajXh8ypydNwlr22I8GiS0QXiJAv2rx00afPHa4Ch');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));