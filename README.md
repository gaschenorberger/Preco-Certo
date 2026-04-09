#  Preço-Certo

https://precocert.netlify.app/

Plataforma de monitoramento de preços desenvolvida para coletar, armazenar e visualizar dados de produtos a partir de diferentes lojas online.

O projeto tem como objetivo permitir o acompanhamento de variações de preços, possibilitando análises estratégicas e tomadas de decisão baseadas em dados.

---

##  Sobre o Projeto

O **Preço-Certo** é uma aplicação completa (Full Stack + Data Collection) composta por:

-  Serviço de Web Scraping para coleta automatizada de preços
-  Banco de dados para armazenamento histórico
-  Backend responsável por disponibilizar os dados
-  Frontend para visualização e interação com as informações coletadas

A arquitetura foi pensada para separar responsabilidades, garantindo organização, escalabilidade e manutenção facilitada.

---

##  Arquitetura do Sistema

```text
[ Web Scraping - Python ] 
            ↓
[ PostgreSQL - Database ]
            ↓
[ Backend - Node.js API ]
            ↓
[ Frontend - React ]
```


---

##  Participantes

###  Gabriel Alvise  
- Desenvolvimento do Web Scraping (Python)  
- Modelagem e integração com PostgreSQL  
- Estruturação e implementação do Backend  
- Organização da arquitetura de dados  

GitHub: https://github.com/gaschenorberger  

---

###  João Gabriel Gnoatto  
- Desenvolvimento do Frontend em React  
- Interface e experiência do usuário  
- Integração com o backend  

GitHub: https://github.com/jggnoatto  

---

##  Tecnologias Utilizadas

### 🔹 Web Scraping
- Python
- Selenium
- Tratamento e normalização de dados

### 🔹 Backend
- Node.js
- API REST

### 🔹 Banco de Dados
- PostgreSQL

### 🔹 Frontend
- React
- Consumo de API REST
- Renderização dinâmica de dados

---

##  Objetivo Técnico

O projeto foi desenvolvido com foco em:

- Separação clara de camadas
- Persistência estruturada de dados
- Organização modular
- Integração entre múltiplas tecnologias
- Simulação de um cenário real de produto de mercado

---

##  Status do Projeto

Projeto em desenvolvimento e evolução contínua, com melhorias previstas para:

- Monitoramento automático periódico
- Histórico de variação de preços
- Sistema de alertas
- Melhorias de performance no scraping

---

##  Contato

Gabriel Alvise  
📧 gabrielalvisedev@gmail.com  
🔗 https://www.linkedin.com/in/gabriel-alvise/

João Gabriel Gnoatto
📧 joaogabrielgnoatto2@gmail.com
🔗 https://www.linkedin.com/in/jggnoatto/
