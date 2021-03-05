#Nanos Task

#Endpoints

Custom Endpoint Built
1. http://localhost:3000/nanos/client - To get All Clients
2. http://localhost:3000/stripe - To update internal record of stripe using the customer data json
3. http://localhost:3000/nanos/campaign/:id - To get a single campaign
4. http://localhost:3000/nanos/invoice - To  mock the render_invoice endpoint


Solutions

1. 

    a. http://localhost:3000/question1/insert_vat/ - Insert  Vat number for Customer updating the internal record of Stripe 
    
    b. http://localhost:3000/question1/set_tax_attempt/ - Update the Tax Attempt value in stripe internal record
    
    


2. http://localhost:3000/question2/create_tax/ - Create Tax Invoice for a campaign
