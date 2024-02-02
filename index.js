curl -X POST \
https://api.fedapay.com/v1/transactions \
-H 'Authorization: Bearer sk_live_CaZH-pW0S9lqhGldYsaQf0C2' \
-H 'Content-Type: application/json' \
-d '{
      "description" : "Transaction for john.doe@example.com",
      "amount" : 2000,
      "currency" : {"iso" : "XOF"},
      "callback_url" : "https://maplateforme.com/callback",
      "customer" : {
          "firstname" : "John",
          "lastname" : "Doe",
          "email" : "john.doe@example.com",
          "phone_number" : {
              "number" : "+22996769716",
              "country" : "bj"
          }
        }
    }'



curl -X POST \
https://sandbox-api.fedapay.com/v1/transactions/96026951/token \
-H 'Authorization: Bearer sk_live_CaZH-pW0S9lqhGldYsaQf0C2' \
-H 'Content-Type: application/json'