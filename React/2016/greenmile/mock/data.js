let Data = 
 {
    "sections": [
      {
            "description": "Dados de autenticação",
                  "fields": [
                        {"name": "login", "mandatory": true, "type": "text"},
                        {"name": "password", "mandatory": true, "type": "password"},
                        {"name": "expirationDate", "mandatory": true, "type": "date"},
                        {"name": "enabled", "mandatory": false, "type": "checkbox" }
            ]
      },
      {
            "description": "Dados de contato",
            "fields": [
                  {"name": "rua","mandatory": false,"type": "text"},
                  {"name": "complemento","mandatory": false,"type": "text"},
                  {"name": "bairro","mandatory": false,"type": "text"},
                  {"name": "telefone","mandatory": false,"type": "tel"}
                  ]
      },
      {
            "description": "",
            "fields": [
                  {"name": "submit","type": "button"}
            ]
      }
    ]
};

module.exports = Data;